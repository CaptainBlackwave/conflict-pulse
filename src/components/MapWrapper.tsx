'use client';

import dynamic from 'next/dynamic';

const ConflictMap = dynamic(() => import('./ConflictMap'), { 
  ssr: false,
  loading: () => (
    <div className="card" style={{ marginTop: '24px' }}>
      <h3 style={{ marginBottom: '16px' }}>Regional Contagion Map</h3>
      <div className="map-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-tertiary)' }}>
        <span style={{ color: 'var(--text-secondary)' }}>Loading map...</span>
      </div>
    </div>
  )
});

export default ConflictMap;
