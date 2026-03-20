import { NextResponse } from 'next/server';
import historicalData from '@/data/historical.json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const war = searchParams.get('war') || 'iraq-2003';

  const data = historicalData[war as keyof typeof historicalData];

  if (!data) {
    return NextResponse.json(
      { error: 'Historical data not found for specified war' },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
