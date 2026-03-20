import { NextResponse } from 'next/server';

const HDX_HAPI_URL = 'https://api.hdx.org/hapi';

interface HapiResponse {
  resources: Array<{
    id: string;
    name: string;
    format: string;
    url: string;
  }>;
}

const CACHE_KEY = 'hdx_cache';
const CACHE_TTL = 30 * 60 * 1000;

const cacheStore: { data: any | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

async function fetchHdxData(): Promise<any> {
  const now = Date.now();
  
  if (cacheStore.data && now - cacheStore.timestamp < CACHE_TTL) {
    return cacheStore.data;
  }

  const appId = process.env.HAPI_APP_IDENTIFIER;

  if (!appId) {
    throw new Error('HDX HAPI app identifier not configured');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(
      `${HDX_HAPI_URL}/population?country=IR&limit=10`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`HDX API error: ${response.status}`);
    }

    const data = await response.json();
    
    cacheStore.data = data;
    cacheStore.timestamp = now;

    return data;
  } catch (error) {
    console.error('HDX API error:', error);
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const country = searchParams.get('country') || 'IR';
  const dataset = searchParams.get('dataset') || 'population';

  try {
    const hdxData = await fetchHdxData();

    if (!hdxData) {
      return NextResponse.json({
        error: 'HDX data unavailable, using fallback',
        fallback: true,
      });
    }

    return NextResponse.json(hdxData);
  } catch (error) {
    console.error('HDX API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch HDX data' },
      { status: 500 }
    );
  }
}
