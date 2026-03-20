import { NextResponse } from 'next/server';

const ACLED_API_URL = 'https://api.acleddata.com/acled/read';

interface AcledEvent {
  event_id_cnty: string;
  event_date: string;
  year: number;
  time_precision: number;
  sub_event_type: string;
  actor1: string;
  actor2: string;
  inter1: number;
  inter2: number;
  interaction: number;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  geo_precision: number;
  source: string;
  notes: string;
  fatalities: number;
  timestamp: number;
  iso: number;
}

interface AcledResponse {
  count: number;
  data: AcledEvent[];
}

const CACHE_KEY = 'acled_cache';
const CACHE_TTL = 15 * 60 * 1000;

const cacheStore: { data: AcledResponse | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

async function fetchAcledData(country: string, dateFrom: string, dateTo: string): Promise<AcledResponse> {
  const now = Date.now();
  
  if (cacheStore.data && now - cacheStore.timestamp < CACHE_TTL) {
    return cacheStore.data;
  }

  const email = process.env.ACLED_EMAIL;
  const password = process.env.ACLED_PASSWORD;

  if (!email || !password) {
    throw new Error('ACLED credentials not configured');
  }

  const params = new URLSearchParams({
    key: Buffer.from(`${email}:${password}`).toString('base64'),
    country,
    date_from: dateFrom,
    date_to: dateTo,
    limit: '1000',
    format: 'json',
  });

  const response = await fetch(`${ACLED_API_URL}?${params}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`ACLED API error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  
  cacheStore.data = data;
  cacheStore.timestamp = now;

  return data;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || 'Iran';
  const dateFrom = searchParams.get('date_from') || '2026-01-01';
  const dateTo = searchParams.get('date_to') || '2026-12-31';

  try {
    const acledData = await fetchAcledData(country, dateFrom, dateTo);

    const aggregated = {
      totalEvents: acledData.count,
      totalFatalities: acledData.data.reduce((sum, e) => sum + (e.fatalities || 0), 0),
      events: acledData.data.map(e => ({
        id: e.event_id_cnty,
        date: e.event_date,
        type: e.sub_event_type,
        actor1: e.actor1,
        actor2: e.actor2,
        fatalities: e.fatalities,
        lat: e.latitude,
        lng: e.longitude,
        country: e.country,
        source: e.source,
      })),
    };

    return NextResponse.json(aggregated);
  } catch (error) {
    console.error('ACLED API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch ACLED data' },
      { status: 500 }
    );
  }
}
