'use client';

import { ConflictData } from '@/lib/types';

interface WarClockProps {
  liveData: ConflictData;
  historicalData: ConflictData;
}

export default function WarClock({ liveData, historicalData }: WarClockProps) {
  const maxDays = Math.max(liveData.currentDay, historicalData.currentDay);
  const days = Array.from({ length: maxDays }, (_, i) => i + 1);

  return (
    <div className="card" style={{ marginTop: '24px' }}>
      <h3 style={{ marginBottom: '16px' }}>War Clock: First 20 Days Comparison</h3>
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        marginBottom: '24px',
        padding: '16px',
        background: 'var(--bg-primary)',
        borderRadius: '8px',
        overflowX: 'auto',
      }}>
        {days.map((day) => (
          <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', minWidth: '40px' }}>
            <span style={{ fontSize: '10px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
              D{day}
            </span>
            <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '60px' }}>
              <div 
                style={{
                  width: '16px',
                  background: 'var(--accent-live)',
                  borderRadius: '2px',
                  height: `${Math.min(100, (liveData.dailyData[day - 1]?.events || 0) / 2)}%`,
                  opacity: day <= liveData.currentDay ? 1 : 0.2,
                  transition: 'height 0.3s ease',
                }}
                title={`Iran Day ${day}: ${liveData.dailyData[day - 1]?.events || 0} events`}
              />
              <div 
                style={{
                  width: '16px',
                  background: 'var(--accent-historical)',
                  borderRadius: '2px',
                  height: `${Math.min(100, (historicalData.dailyData[day - 1]?.events || 0) / 1.5)}%`,
                  opacity: day <= historicalData.currentDay ? 1 : 0.2,
                  transition: 'height 0.3s ease',
                }}
                title={`${historicalData.name} Day ${day}: ${historicalData.dailyData[day - 1]?.events || 0} events`}
              />
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', fontSize: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: 12, height: 12, background: 'var(--accent-live)', borderRadius: '2px' }} />
          <span>Iran 2026 (Live)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: 12, height: 12, background: 'var(--accent-historical)', borderRadius: '2px' }} />
          <span>{historicalData.name}</span>
        </div>
      </div>
    </div>
  );
}
