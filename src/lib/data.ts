import { ConflictData, MapMarker, OilPricePoint, WarType } from './types';

const generateDailyData = (
  baseEvents: number,
  baseFatalities: number,
  baseDisplacement: number,
  variance: number,
  days: number
) => {
  const data = [];
  let cumulativeEvents = 0;
  let cumulativeFatalities = 0;
  let cumulativeDisplacement = 0;
  
  for (let i = 1; i <= days; i++) {
    const dayFactor = 1 + (Math.sin(i / 5) * 0.3);
    const randomVariance = 1 + (Math.random() - 0.5) * variance;
    
    const events = Math.round(baseEvents * dayFactor * randomVariance);
    const fatalities = Math.round(baseFatalities * dayFactor * randomVariance);
    const displacement = Math.round(baseDisplacement * dayFactor * (1 + i * 0.1) * randomVariance);
    
    cumulativeEvents += events;
    cumulativeFatalities += fatalities;
    cumulativeDisplacement += displacement;
    
    const date = new Date('2026-01-15');
    date.setDate(date.getDate() + i - 1);
    
    data.push({
      day: i,
      date: date.toISOString().split('T')[0],
      events,
      civilianFatalities: Math.round(fatalities * 0.6),
      militaryFatalities: Math.round(fatalities * 0.4),
      totalFatalities: fatalities,
      displacement: cumulativeDisplacement,
    });
  }
  
  return data;
};

export const iran2026Data: ConflictData = {
  warType: 'iran-2026',
  name: 'Iran Conflict',
  startDate: '2026-01-15',
  currentDay: 20,
  totalEvents: 847,
  totalFatalities: 12834,
  civilianFatalities: 7690,
  militaryFatalities: 5144,
  totalDisplacement: 2847000,
  refugees: 892000,
  avgDailyEvents: 42.35,
  avgDailyFatalities: 641.7,
  oilPriceChange: 18.5,
  dailyData: generateDailyData(40, 600, 140000, 0.4, 20),
};

export const iraq2003Data: ConflictData = {
  warType: 'iraq-2003',
  name: 'Iraq Invasion',
  startDate: '2003-03-20',
  currentDay: 20,
  totalEvents: 523,
  totalFatalities: 8920,
  civilianFatalities: 5352,
  militaryFatalities: 3568,
  totalDisplacement: 1250000,
  refugees: 425000,
  avgDailyEvents: 26.15,
  avgDailyFatalities: 446,
  oilPriceChange: 12.3,
  dailyData: generateDailyData(25, 420, 62000, 0.35, 20),
};

export const afghanistan2001Data: ConflictData = {
  warType: 'afghanistan-2001',
  name: 'Afghanistan War',
  startDate: '2001-10-07',
  currentDay: 20,
  totalEvents: 312,
  totalFatalities: 4521,
  civilianFatalities: 2713,
  militaryFatalities: 1808,
  totalDisplacement: 780000,
  refugees: 210000,
  avgDailyEvents: 15.6,
  avgDailyFatalities: 226.05,
  oilPriceChange: 4.2,
  dailyData: generateDailyData(15, 220, 38000, 0.3, 20),
};

export const vietnam1965Data: ConflictData = {
  warType: 'vietnam-1965',
  name: 'Vietnam War',
  startDate: '1965-03-08',
  currentDay: 20,
  totalEvents: 189,
  totalFatalities: 3280,
  civilianFatalities: 984,
  militaryFatalities: 2296,
  totalDisplacement: 520000,
  refugees: 180000,
  avgDailyEvents: 9.45,
  avgDailyFatalities: 164,
  oilPriceChange: 8.7,
  dailyData: generateDailyData(9, 160, 25000, 0.25, 20),
};

export const getConflictData = (warType: WarType): ConflictData => {
  switch (warType) {
    case 'iran-2026':
      return iran2026Data;
    case 'iraq-2003':
      return iraq2003Data;
    case 'afghanistan-2001':
      return afghanistan2001Data;
    case 'vietnam-1965':
      return vietnam1965Data;
    default:
      return iran2026Data;
  }
};

export const mapMarkers: MapMarker[] = [
  { id: '1', lat: 35.6892, lng: 51.3890, type: 'airstrike', intensity: 'critical', label: 'Tehran', description: 'Major airstrike on military compound', date: '2026-01-18' },
  { id: '2', lat: 34.0522, lng: 49.1775, type: 'battle', intensity: 'high', label: 'Arak', description: 'Ground battle near industrial zone', date: '2026-01-19' },
  { id: '3', lat: 29.3117, lng: 48.4742, type: 'airstrike', intensity: 'critical', label: 'Kuwait City', description: 'Retaliatory strike on infrastructure', date: '2026-01-20' },
  { id: '4', lat: 25.2854, lng: 55.3605, type: 'displacement', intensity: 'high', label: 'Dubai', description: 'Mass displacement toward UAE', date: '2026-01-21' },
  { id: '5', lat: 33.3152, lng: 44.3661, type: 'refugee-camp', intensity: 'high', label: 'Baghdad', description: 'Refugee camp at capacity', date: '2026-01-22' },
  { id: '6', lat: 33.8938, lng: 35.5018, type: 'airstrike', intensity: 'medium', label: 'Beirut', description: 'Hezbollah target struck', date: '2026-01-23' },
  { id: '7', lat: 26.2285, lng: 50.5860, type: 'battle', intensity: 'medium', label: 'Manama', description: 'Naval confrontation', date: '2026-01-24' },
  { id: '8', lat: 30.0444, lng: 31.2357, type: 'displacement', intensity: 'low', label: 'Cairo', description: 'Egypt border crossing opened', date: '2026-01-25' },
];

export const oilPriceData: OilPricePoint[] = [
  { date: '2026-01-15', price: 72.4 },
  { date: '2026-01-16', price: 74.8, event: 'Initial strikes' },
  { date: '2026-01-17', price: 78.2, event: 'Oil facility hit' },
  { date: '2026-01-18', price: 82.1 },
  { date: '2026-01-19', price: 79.5 },
  { date: '2026-01-20', price: 85.7, event: 'Strait threat' },
  { date: '2026-01-21', price: 91.3, event: 'Hormuz partial closure' },
  { date: '2026-01-22', price: 88.9 },
  { date: '2026-01-23', price: 94.2, event: 'UAE strike' },
  { date: '2026-01-24', price: 89.7 },
  { date: '2026-01-25', price: 86.4 },
  { date: '2026-01-26', price: 92.1 },
  { date: '2026-01-27', price: 88.5 },
  { date: '2026-01-28', price: 95.8, event: 'Supply concerns' },
  { date: '2026-01-29', price: 91.2 },
  { date: '2026-01-30', price: 87.6 },
  { date: '2026-01-31', price: 93.4 },
  { date: '2026-02-01', price: 89.1 },
  { date: '2026-02-02', price: 85.7 },
  { date: '2026-02-03', price: 88.3 },
  { date: '2026-02-04', price: 86.9 },
];
