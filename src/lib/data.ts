import { ConflictData, MapMarker, OilPricePoint, WarType, DailyData } from './types';

const staticIranData: DailyData[] = [
  { day: 1, date: '2026-01-15', events: 38, civilianFatalities: 23, militaryFatalities: 15, totalFatalities: 38, displacement: 570000 },
  { day: 2, date: '2026-01-16', events: 52, civilianFatalities: 31, militaryFatalities: 21, totalFatalities: 52, displacement: 681000 },
  { day: 3, date: '2026-01-17', events: 38, civilianFatalities: 23, militaryFatalities: 15, totalFatalities: 38, displacement: 798000 },
  { day: 4, date: '2026-01-18', events: 56, civilianFatalities: 34, militaryFatalities: 22, totalFatalities: 56, displacement: 921000 },
  { day: 5, date: '2026-01-19', events: 56, civilianFatalities: 34, militaryFatalities: 22, totalFatalities: 56, displacement: 1050000 },
  { day: 6, date: '2026-01-20', events: 45, civilianFatalities: 27, militaryFatalities: 18, totalFatalities: 45, displacement: 1173000 },
  { day: 7, date: '2026-01-21', events: 49, civilianFatalities: 29, militaryFatalities: 20, totalFatalities: 49, displacement: 1302000 },
  { day: 8, date: '2026-01-22', events: 44, civilianFatalities: 26, militaryFatalities: 18, totalFatalities: 44, displacement: 1425000 },
  { day: 9, date: '2026-01-23', events: 49, civilianFatalities: 29, militaryFatalities: 20, totalFatalities: 49, displacement: 1554000 },
  { day: 10, date: '2026-01-24', events: 41, civilianFatalities: 25, militaryFatalities: 16, totalFatalities: 41, displacement: 1677000 },
  { day: 11, date: '2026-01-25', events: 44, civilianFatalities: 26, militaryFatalities: 18, totalFatalities: 44, displacement: 1806000 },
  { day: 12, date: '2026-01-26', events: 57, civilianFatalities: 34, militaryFatalities: 23, totalFatalities: 57, displacement: 1941000 },
  { day: 13, date: '2026-01-27', events: 55, civilianFatalities: 33, militaryFatalities: 22, totalFatalities: 55, displacement: 2082000 },
  { day: 14, date: '2026-01-28', events: 49, civilianFatalities: 29, militaryFatalities: 20, totalFatalities: 49, displacement: 2217000 },
  { day: 15, date: '2026-01-29', events: 41, civilianFatalities: 25, militaryFatalities: 16, totalFatalities: 41, displacement: 2346000 },
  { day: 16, date: '2026-01-30', events: 42, civilianFatalities: 25, militaryFatalities: 17, totalFatalities: 42, displacement: 2478000 },
  { day: 17, date: '2026-01-31', events: 43, civilianFatalities: 26, militaryFatalities: 17, totalFatalities: 43, displacement: 2613000 },
  { day: 18, date: '2026-02-01', events: 37, civilianFatalities: 22, militaryFatalities: 15, totalFatalities: 37, displacement: 2739000 },
  { day: 19, date: '2026-02-02', events: 27, civilianFatalities: 16, militaryFatalities: 11, totalFatalities: 27, displacement: 2853000 },
  { day: 20, date: '2026-02-03', events: 28, civilianFatalities: 17, militaryFatalities: 11, totalFatalities: 28, displacement: 2973000 },
];

const staticIraqData: DailyData[] = [
  { day: 1, date: '2003-03-20', events: 23, civilianFatalities: 14, militaryFatalities: 9, totalFatalities: 23, displacement: 345000 },
  { day: 2, date: '2003-03-21', events: 31, civilianFatalities: 19, militaryFatalities: 12, totalFatalities: 31, displacement: 390000 },
  { day: 3, date: '2003-03-22', events: 29, civilianFatalities: 17, militaryFatalities: 12, totalFatalities: 29, displacement: 441000 },
  { day: 4, date: '2003-03-23', events: 28, civilianFatalities: 17, militaryFatalities: 11, totalFatalities: 28, displacement: 498000 },
  { day: 5, date: '2003-03-24', events: 26, civilianFatalities: 16, militaryFatalities: 10, totalFatalities: 26, displacement: 561000 },
  { day: 6, date: '2003-03-25', events: 34, civilianFatalities: 20, militaryFatalities: 14, totalFatalities: 34, displacement: 630000 },
  { day: 7, date: '2003-03-26', events: 35, civilianFatalities: 21, militaryFatalities: 14, totalFatalities: 35, displacement: 705000 },
  { day: 8, date: '2003-03-27', events: 32, civilianFatalities: 19, militaryFatalities: 13, totalFatalities: 32, displacement: 786000 },
  { day: 9, date: '2003-03-28', events: 38, civilianFatalities: 23, militaryFatalities: 15, totalFatalities: 38, displacement: 873000 },
  { day: 10, date: '2003-03-29', events: 33, civilianFatalities: 20, militaryFatalities: 13, totalFatalities: 33, displacement: 966000 },
  { day: 11, date: '2003-03-30', events: 36, civilianFatalities: 22, militaryFatalities: 14, totalFatalities: 36, displacement: 1065000 },
  { day: 12, date: '2003-03-31', events: 34, civilianFatalities: 20, militaryFatalities: 14, totalFatalities: 34, displacement: 1170000 },
  { day: 13, date: '2003-04-01', events: 28, civilianFatalities: 17, militaryFatalities: 11, totalFatalities: 28, displacement: 1281000 },
  { day: 14, date: '2003-04-02', events: 32, civilianFatalities: 19, militaryFatalities: 13, totalFatalities: 32, displacement: 1402000 },
  { day: 15, date: '2003-04-03', events: 23, civilianFatalities: 14, militaryFatalities: 9, totalFatalities: 23, displacement: 1533000 },
  { day: 16, date: '2003-04-04', events: 22, civilianFatalities: 13, militaryFatalities: 9, totalFatalities: 22, displacement: 1674000 },
  { day: 17, date: '2003-04-05', events: 25, civilianFatalities: 15, militaryFatalities: 10, totalFatalities: 25, displacement: 1827000 },
  { day: 18, date: '2003-04-06', events: 25, civilianFatalities: 15, militaryFatalities: 10, totalFatalities: 25, displacement: 1992000 },
  { day: 19, date: '2003-04-07', events: 21, civilianFatalities: 13, militaryFatalities: 8, totalFatalities: 21, displacement: 2169000 },
  { day: 20, date: '2003-04-08', events: 19, civilianFatalities: 11, militaryFatalities: 8, totalFatalities: 19, displacement: 2358000 },
];

const staticAfghanistanData: DailyData[] = [
  { day: 1, date: '2001-10-07', events: 15, civilianFatalities: 9, militaryFatalities: 6, totalFatalities: 15, displacement: 125000 },
  { day: 2, date: '2001-10-08', events: 18, civilianFatalities: 11, militaryFatalities: 7, totalFatalities: 18, displacement: 143000 },
  { day: 3, date: '2001-10-09', events: 16, civilianFatalities: 10, militaryFatalities: 6, totalFatalities: 16, displacement: 164000 },
  { day: 4, date: '2001-10-10', events: 14, civilianFatalities: 8, militaryFatalities: 6, totalFatalities: 14, displacement: 188000 },
  { day: 5, date: '2001-10-11', events: 12, civilianFatalities: 7, militaryFatalities: 5, totalFatalities: 12, displacement: 215000 },
  { day: 6, date: '2001-10-12', events: 10, civilianFatalities: 6, militaryFatalities: 4, totalFatalities: 10, displacement: 245000 },
  { day: 7, date: '2001-10-13', events: 11, civilianFatalities: 7, militaryFatalities: 4, totalFatalities: 11, displacement: 278000 },
  { day: 8, date: '2001-10-14', events: 9, civilianFatalities: 5, militaryFatalities: 4, totalFatalities: 9, displacement: 314000 },
  { day: 9, date: '2001-10-15', events: 10, civilianFatalities: 6, militaryFatalities: 4, totalFatalities: 10, displacement: 353000 },
  { day: 10, date: '2001-10-16', events: 8, civilianFatalities: 5, militaryFatalities: 3, totalFatalities: 8, displacement: 395000 },
  { day: 11, date: '2001-10-17', events: 9, civilianFatalities: 5, militaryFatalities: 4, totalFatalities: 9, displacement: 440000 },
  { day: 12, date: '2001-10-18', events: 7, civilianFatalities: 4, militaryFatalities: 3, totalFatalities: 7, displacement: 488000 },
  { day: 13, date: '2001-10-19', events: 8, civilianFatalities: 5, militaryFatalities: 3, totalFatalities: 8, displacement: 539000 },
  { day: 14, date: '2001-10-20', events: 6, civilianFatalities: 4, militaryFatalities: 2, totalFatalities: 6, displacement: 593000 },
  { day: 15, date: '2001-10-21', events: 7, civilianFatalities: 4, militaryFatalities: 3, totalFatalities: 7, displacement: 650000 },
  { day: 16, date: '2001-10-22', events: 5, civilianFatalities: 3, militaryFatalities: 2, totalFatalities: 5, displacement: 710000 },
  { day: 17, date: '2001-10-23', events: 6, civilianFatalities: 4, militaryFatalities: 2, totalFatalities: 6, displacement: 773000 },
  { day: 18, date: '2001-10-24', events: 5, civilianFatalities: 3, militaryFatalities: 2, totalFatalities: 5, displacement: 839000 },
  { day: 19, date: '2001-10-25', events: 4, civilianFatalities: 2, militaryFatalities: 2, totalFatalities: 4, displacement: 908000 },
  { day: 20, date: '2001-10-26', events: 5, civilianFatalities: 3, militaryFatalities: 2, totalFatalities: 5, displacement: 980000 },
];

const staticVietnamData: DailyData[] = [
  { day: 1, date: '1965-03-08', events: 8, civilianFatalities: 2, militaryFatalities: 6, totalFatalities: 8, displacement: 24000 },
  { day: 2, date: '1965-03-09', events: 10, civilianFatalities: 3, militaryFatalities: 7, totalFatalities: 10, displacement: 28000 },
  { day: 3, date: '1965-03-10', events: 7, civilianFatalities: 2, militaryFatalities: 5, totalFatalities: 7, displacement: 32000 },
  { day: 4, date: '1965-03-11', events: 9, civilianFatalities: 3, militaryFatalities: 6, totalFatalities: 9, displacement: 37000 },
  { day: 5, date: '1965-03-12', events: 6, civilianFatalities: 2, militaryFatalities: 4, totalFatalities: 6, displacement: 42000 },
  { day: 6, date: '1965-03-13', events: 5, civilianFatalities: 2, militaryFatalities: 3, totalFatalities: 5, displacement: 48000 },
  { day: 7, date: '1965-03-14', events: 7, civilianFatalities: 2, militaryFatalities: 5, totalFatalities: 7, displacement: 55000 },
  { day: 8, date: '1965-03-15', events: 4, civilianFatalities: 1, militaryFatalities: 3, totalFatalities: 4, displacement: 63000 },
  { day: 9, date: '1965-03-16', events: 6, civilianFatalities: 2, militaryFatalities: 4, totalFatalities: 6, displacement: 72000 },
  { day: 10, date: '1965-03-17', events: 5, civilianFatalities: 2, militaryFatalities: 3, totalFatalities: 5, displacement: 82000 },
  { day: 11, date: '1965-03-18', events: 6, civilianFatalities: 2, militaryFatalities: 4, totalFatalities: 6, displacement: 93000 },
  { day: 12, date: '1965-03-19', events: 4, civilianFatalities: 1, militaryFatalities: 3, totalFatalities: 4, displacement: 105000 },
  { day: 13, date: '1965-03-20', events: 5, civilianFatalities: 2, militaryFatalities: 3, totalFatalities: 5, displacement: 118000 },
  { day: 14, date: '1965-03-21', events: 3, civilianFatalities: 1, militaryFatalities: 2, totalFatalities: 3, displacement: 132000 },
  { day: 15, date: '1965-03-22', events: 4, civilianFatalities: 1, militaryFatalities: 3, totalFatalities: 4, displacement: 147000 },
  { day: 16, date: '1965-03-23', events: 3, civilianFatalities: 1, militaryFatalities: 2, totalFatalities: 3, displacement: 163000 },
  { day: 17, date: '1965-03-24', events: 4, civilianFatalities: 1, militaryFatalities: 3, totalFatalities: 4, displacement: 180000 },
  { day: 18, date: '1965-03-25', events: 2, civilianFatalities: 1, militaryFatalities: 1, totalFatalities: 2, displacement: 198000 },
  { day: 19, date: '1965-03-26', events: 3, civilianFatalities: 1, militaryFatalities: 2, totalFatalities: 3, displacement: 217000 },
  { day: 20, date: '1965-03-27', events: 2, civilianFatalities: 1, militaryFatalities: 1, totalFatalities: 2, displacement: 237000 },
];

export const iran2026Data: ConflictData = {
  warType: 'iran-2026',
  name: 'Iran Conflict',
  startDate: '2026-01-15',
  currentDay: 20,
  totalEvents: 847,
  totalFatalities: 847,
  civilianFatalities: 508,
  militaryFatalities: 339,
  totalDisplacement: 2973000,
  refugees: 892000,
  avgDailyEvents: 42.35,
  avgDailyFatalities: 42.35,
  oilPriceChange: 18.5,
  dailyData: staticIranData,
};

export const iraq2003Data: ConflictData = {
  warType: 'iraq-2003',
  name: 'Iraq Invasion',
  startDate: '2003-03-20',
  currentDay: 20,
  totalEvents: 523,
  totalFatalities: 523,
  civilianFatalities: 314,
  militaryFatalities: 209,
  totalDisplacement: 2358000,
  refugees: 425000,
  avgDailyEvents: 26.15,
  avgDailyFatalities: 26.15,
  oilPriceChange: 12.3,
  dailyData: staticIraqData,
};

export const afghanistan2001Data: ConflictData = {
  warType: 'afghanistan-2001',
  name: 'Afghanistan War',
  startDate: '2001-10-07',
  currentDay: 20,
  totalEvents: 167,
  totalFatalities: 167,
  civilianFatalities: 100,
  militaryFatalities: 67,
  totalDisplacement: 980000,
  refugees: 210000,
  avgDailyEvents: 8.35,
  avgDailyFatalities: 8.35,
  oilPriceChange: 4.2,
  dailyData: staticAfghanistanData,
};

export const vietnam1965Data: ConflictData = {
  warType: 'vietnam-1965',
  name: 'Vietnam War',
  startDate: '1965-03-08',
  currentDay: 20,
  totalEvents: 95,
  totalFatalities: 95,
  civilianFatalities: 29,
  militaryFatalities: 66,
  totalDisplacement: 237000,
  refugees: 180000,
  avgDailyEvents: 4.75,
  avgDailyFatalities: 4.75,
  oilPriceChange: 8.7,
  dailyData: staticVietnamData,
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
  { id: '5', lat: 33.8938, lng: 44.3661, type: 'refugee-camp', intensity: 'high', label: 'Baghdad', description: 'Refugee camp at capacity', date: '2026-01-22' },
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
