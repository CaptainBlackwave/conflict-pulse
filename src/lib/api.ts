import { ConflictData, DailyData, WarType } from './types';
import { iran2026Data } from './data';

export interface ApiConfig {
  acledEmail?: string;
  acledPassword?: string;
  hdxAppId?: string;
}

const DEFAULT_CONFIG: ApiConfig = {
  acledEmail: process.env.ACLED_EMAIL,
  acledPassword: process.env.ACLED_PASSWORD,
  hdxAppId: process.env.HAPI_APP_IDENTIFIER,
};

export async function fetchLiveData(config: ApiConfig = DEFAULT_CONFIG): Promise<ConflictData> {
  const hasAcledCredentials = config.acledEmail && config.acledPassword;
  const hasHdxCredentials = config.hdxAppId;

  if (hasAcledCredentials) {
    try {
      const response = await fetch(
        `/api/acled?country=Iran&date_from=2026-01-01&date_to=2026-12-31`
      );
      
      if (response.ok) {
        const acledData = await response.json();
        
        const dailyMap = new Map<string, DailyData>();
        
        for (const event of acledData.events) {
          const date = event.date;
          if (!dailyMap.has(date)) {
            dailyMap.set(date, {
              day: dailyMap.size + 1,
              date,
              events: 0,
              civilianFatalities: 0,
              militaryFatalities: 0,
              totalFatalities: 0,
              displacement: 0,
            });
          }
          const day = dailyMap.get(date)!;
          day.events++;
          day.totalFatalities += event.fatalities;
          day.civilianFatalities += Math.round(event.fatalities * 0.6);
          day.militaryFatalities += Math.round(event.fatalities * 0.4);
        }

        const dailyData = Array.from(dailyMap.values()).slice(0, 20);
        
        let cumulativeDisplacement = 0;
        for (const day of dailyData) {
          cumulativeDisplacement += day.events * 15000;
          day.displacement = cumulativeDisplacement;
        }

        return {
          ...iran2026Data,
          totalEvents: acledData.totalEvents,
          totalFatalities: acledData.totalFatalities,
          civilianFatalities: Math.round(acledData.totalFatalities * 0.6),
          militaryFatalities: Math.round(acledData.totalFatalities * 0.4),
          dailyData,
        };
      }
    } catch (error) {
      console.error('Failed to fetch ACLED data:', error);
    }
  }

  return iran2026Data;
}

export async function fetchHistoricalData(warType: WarType): Promise<ConflictData | null> {
  if (warType === 'iran-2026') {
    return fetchLiveData();
  }

  try {
    const response = await fetch(`/api/historical?war=${warType}`);
    
    if (response.ok) {
      const data = await response.json();
      
      const dailyData: DailyData[] = data.dailyData.map((d: any) => ({
        day: d.day,
        date: d.date,
        events: d.events,
        civilianFatalities: Math.round(d.fatalities * 0.6),
        militaryFatalities: Math.round(d.fatalities * 0.4),
        totalFatalities: d.fatalities,
        displacement: d.displacement,
      }));

      return {
        warType: data.warType,
        name: data.name,
        startDate: data.startDate,
        currentDay: data.currentDay,
        totalEvents: data.summary.totalEvents,
        totalFatalities: data.summary.totalFatalities,
        civilianFatalities: data.summary.civilianFatalities,
        militaryFatalities: data.summary.militaryFatalities,
        totalDisplacement: data.summary.totalDisplacement,
        refugees: data.summary.refugees,
        avgDailyEvents: data.summary.avgDailyEvents,
        avgDailyFatalities: data.summary.avgDailyFatalities,
        oilPriceChange: data.summary.oilPriceChange,
        dailyData,
      };
    }
  } catch (error) {
    console.error('Failed to fetch historical data:', error);
  }

  return null;
}

export function isApiConfigured(): boolean {
  return !!(process.env.ACLED_EMAIL && process.env.ACLED_PASSWORD);
}

export function getApiStatus() {
  return {
    acled: !!(process.env.ACLED_EMAIL && process.env.ACLED_PASSWORD),
    hdx: !!process.env.HAPI_APP_IDENTIFIER,
    historical: true,
  };
}
