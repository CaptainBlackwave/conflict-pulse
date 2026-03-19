export type WarType = 'iran-2026' | 'iraq-2003' | 'afghanistan-2001' | 'vietnam-1965';

export interface MetricData {
  value: number;
  label: string;
  unit: string;
  trend?: number;
  isLive: boolean;
}

export interface DailyData {
  day: number;
  date: string;
  events: number;
  civilianFatalities: number;
  militaryFatalities: number;
  totalFatalities: number;
  displacement: number;
}

export interface ConflictData {
  warType: WarType;
  name: string;
  startDate: string;
  currentDay: number;
  totalEvents: number;
  totalFatalities: number;
  civilianFatalities: number;
  militaryFatalities: number;
  totalDisplacement: number;
  refugees: number;
  avgDailyEvents: number;
  avgDailyFatalities: number;
  oilPriceChange: number;
  dailyData: DailyData[];
}

export interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  type: 'airstrike' | 'battle' | 'displacement' | 'refugee-camp';
  intensity: 'low' | 'medium' | 'high' | 'critical';
  label: string;
  description: string;
  date: string;
}

export interface OilPricePoint {
  date: string;
  price: number;
  event?: string;
}
