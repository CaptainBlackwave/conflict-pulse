'use client';

import { useState, useEffect } from 'react';
import { WarType, ConflictData } from '@/lib/types';
import { getConflictData, mapMarkers, oilPriceData } from '@/lib/data';
import { fetchLiveData, fetchHistoricalData, getApiStatus } from '@/lib/api';
import MetricCard from '@/components/MetricCard';
import WarSelector from '@/components/WarSelector';
import ComparisonChart from '@/components/ComparisonChart';
import OilPriceChart from '@/components/OilPriceChart';
import WarClock from '@/components/WarClock';
import MapWrapper from '@/components/MapWrapper';

export default function Home() {
  const [selectedWar, setSelectedWar] = useState<WarType>('iraq-2003');
  const [currentTime, setCurrentTime] = useState<string>('');
  const [liveData, setLiveData] = useState<ConflictData>(getConflictData('iran-2026'));
  const [historicalData, setHistoricalData] = useState<ConflictData>(getConflictData('iraq-2003'));
  const [apiStatus, setApiStatus] = useState<{ acled: boolean; hdx: boolean; historical: boolean }>({ acled: false, hdx: false, historical: true });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toISOString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      
      const status = getApiStatus();
      setApiStatus(status);

      const live = await fetchLiveData();
      setLiveData(live);

      const historical = await fetchHistoricalData(selectedWar);
      if (historical) {
        setHistoricalData(historical);
      }
      
      setLoading(false);
    }

    loadData();
  }, [selectedWar]);

  const metrics = [
    {
      label: 'Total Events',
      value: liveData.totalEvents,
      unit: '',
      isLive: true,
      historicalValue: historicalData.totalEvents,
    },
    {
      label: 'Total Fatalities',
      value: liveData.totalFatalities,
      unit: '',
      isLive: true,
      historicalValue: historicalData.totalFatalities,
    },
    {
      label: 'Displacement',
      value: liveData.totalDisplacement,
      unit: '',
      isLive: true,
      historicalValue: historicalData.totalDisplacement,
    },
    {
      label: 'Oil Price Impact',
      value: liveData.oilPriceChange || 18.5,
      unit: '%',
      isLive: true,
      historicalValue: historicalData.oilPriceChange,
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <header className="scanline-overlay" style={{
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 24px',
        position: 'sticky',
        top: 0,
        background: 'rgba(10, 12, 16, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              background: 'linear-gradient(135deg, var(--accent-live), #ff6b35)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '18px',
            }}>
              CP
            </div>
            <div>
              <h1 style={{ fontSize: '20px', margin: 0 }}>ConflictPulse</h1>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Comparative Conflict Dashboard
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '12px', fontSize: '10px' }}>
              <span style={{ 
                padding: '4px 8px', 
                borderRadius: '4px', 
                background: apiStatus.acled ? 'rgba(0,255,136,0.2)' : 'rgba(255,61,0,0.2)',
                color: apiStatus.acled ? 'var(--accent-success)' : 'var(--accent-live)',
                border: `1px solid ${apiStatus.acled ? 'var(--accent-success)' : 'var(--accent-live)'}`,
              }}>
                ACLED {apiStatus.acled ? '●' : '○'}
              </span>
              <span style={{ 
                padding: '4px 8px', 
                borderRadius: '4px', 
                background: apiStatus.hdx ? 'rgba(0,255,136,0.2)' : 'rgba(255,61,0,0.2)',
                color: apiStatus.hdx ? 'var(--accent-success)' : 'var(--accent-live)',
                border: `1px solid ${apiStatus.hdx ? 'var(--accent-success)' : 'var(--accent-live)'}`,
              }}>
                HDX {apiStatus.hdx ? '●' : '○'}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Conflict Duration</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '18px', color: 'var(--accent-live)', fontWeight: 700 }}>
                Day {liveData.currentDay}
              </div>
            </div>
            <div style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              background: 'var(--accent-live)',
              animation: 'pulse-live 2s ease-in-out infinite',
            }} />
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '24px' }}>
          <aside style={{ position: 'sticky', top: '100px', height: 'fit-content' }}>
            <WarSelector selectedWar={selectedWar} onSelect={setSelectedWar} />
            <div className="card" style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '14px', color: 'var(--accent-historical)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                Data Sources
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 2 }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ 
                    width: 6, height: 6, borderRadius: '50%', 
                    background: apiStatus.acled ? 'var(--accent-success)' : 'var(--accent-warning)' 
                  }} />
                  ACLED — {apiStatus.acled ? 'Connected' : 'Using demo data'}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ 
                    width: 6, height: 6, borderRadius: '50%', 
                    background: apiStatus.hdx ? 'var(--accent-success)' : 'var(--accent-warning)' 
                  }} />
                  HDX — {apiStatus.hdx ? 'Connected' : 'Using demo data'}
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ 
                    width: 6, height: 6, borderRadius: '50%', 
                    background: 'var(--accent-success)' 
                  }} />
                  Historical — Static datasets
                </li>
              </ul>
            </div>
          </aside>

          <div>
            {loading && (
              <div style={{ 
                padding: '20px', 
                textAlign: 'center', 
                color: 'var(--text-secondary)',
                marginBottom: '16px',
              }}>
                Loading data...
              </div>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '8px' }}>
              <div className="animate-fade-in animate-delay-1">
                <MetricCard 
                  metric={metrics[0]} 
                  historicalValue={metrics[0].historicalValue} 
                />
              </div>
              <div className="animate-fade-in animate-delay-2">
                <MetricCard 
                  metric={metrics[1]} 
                  historicalValue={metrics[1].historicalValue} 
                />
              </div>
              <div className="animate-fade-in animate-delay-3">
                <MetricCard 
                  metric={metrics[2]} 
                  historicalValue={metrics[2].historicalValue} 
                />
              </div>
              <div className="animate-fade-in animate-delay-4">
                <MetricCard 
                  metric={metrics[3]} 
                  historicalValue={metrics[3].historicalValue} 
                />
              </div>
            </div>

            <ComparisonChart liveData={liveData} historicalData={historicalData} />
            <WarClock liveData={liveData} historicalData={historicalData} />
            <OilPriceChart data={oilPriceData} />
            <MapWrapper markers={mapMarkers} />
          </div>
        </div>
      </main>

      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '24px',
        marginTop: '48px',
        textAlign: 'center',
        fontSize: '12px',
        color: 'var(--text-secondary)',
      }}>
        <p>
          {!apiStatus.acled && !apiStatus.hdx && 'Data shown uses demo values. Configure API keys for live data. '}
          ACLED and HDX connections are indicated in the header.
        </p>
        <p style={{ marginTop: '8px' }}>Last updated: {currentTime}</p>
      </footer>
    </div>
  );
}
