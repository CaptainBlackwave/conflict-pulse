'use client';

import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from 'recharts';
import { ConflictData } from '@/lib/types';

interface ComparisonChartProps {
  liveData: ConflictData;
  historicalData: ConflictData;
}

type ChartType = 'fatalities' | 'events' | 'displacement';

export default function ComparisonChart({ liveData, historicalData }: ComparisonChartProps) {
  const [chartType, setChartType] = useState<ChartType>('fatalities');

  const combinedData = liveData.dailyData.map((live, index) => {
    const hist = historicalData.dailyData[index];
    return {
      day: `Day ${live.day}`,
      'Iran 2026': chartType === 'fatalities' ? live.totalFatalities : 
                   chartType === 'events' ? live.events : 
                   live.displacement / 1000,
      [historicalData.name]: chartType === 'fatalities' ? hist.totalFatalities :
                             chartType === 'events' ? hist.events :
                             hist.displacement / 1000,
    };
  });

  const yLabel = chartType === 'displacement' ? 'Displacement (K)' : 
                 chartType === 'events' ? 'Events/Day' : 'Fatalities';

  return (
    <div className="card" style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3>Conflict Comparison</h3>
        <div style={{ display: 'flex', gap: '8px' }}>
          {(['fatalities', 'events', 'displacement'] as ChartType[]).map((type) => (
            <button
              key={type}
              className={`btn ${chartType === type ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setChartType(type)}
              style={{ padding: '6px 12px', fontSize: '12px' }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="day" 
              stroke="var(--text-secondary)" 
              fontSize={11}
              tickLine={false}
            />
            <YAxis 
              stroke="var(--text-secondary)" 
              fontSize={11}
              tickLine={false}
              label={{ value: yLabel, angle: -90, position: 'insideLeft', fill: 'var(--text-secondary)', fontSize: 11 }}
            />
            <Tooltip
              contentStyle={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="Iran 2026" fill="var(--accent-live)" radius={[4, 4, 0, 0]} />
            <Bar dataKey={historicalData.name} fill="var(--accent-historical)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
