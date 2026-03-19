'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapMarker } from '@/lib/types';

const createIcon = (intensity: string) => {
  const colors: Record<string, string> = {
    low: '#00ff88',
    medium: '#ffab00',
    high: '#ff6b35',
    critical: '#ff3d00',
  };
  
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      width: 16px;
      height: 16px;
      background: ${colors[intensity] || colors.low};
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 12px ${colors[intensity] || colors.low};
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
};

interface ConflictMapProps {
  markers: MapMarker[];
}

export default function ConflictMap({ markers }: ConflictMapProps) {
  return (
    <div className="card" style={{ marginTop: '24px' }}>
      <h3 style={{ marginBottom: '16px' }}>Regional Contagion Map</h3>
      <div className="map-container">
        <MapContainer
          center={[30, 48]}
          zoom={5}
          style={{ height: '100%', width: '100%', background: 'var(--bg-secondary)' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          {markers.map((marker) => (
            <Marker
              key={marker.id}
              position={[marker.lat, marker.lng]}
              icon={createIcon(marker.intensity)}
            >
              <Popup>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, marginBottom: '8px' }}>
                  {marker.label}
                </div>
                <div style={{ fontSize: '12px', marginBottom: '4px' }}>
                  <span style={{ color: 'var(--accent-live)', textTransform: 'uppercase', fontSize: '10px' }}>
                    {marker.type}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {marker.description}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                  {marker.date}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div style={{ display: 'flex', gap: '16px', marginTop: '12px', fontSize: '11px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff3d00', boxShadow: '0 0 8px #ff3d00' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Critical</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff6b35', boxShadow: '0 0 8px #ff6b35' }} />
          <span style={{ color: 'var(--text-secondary)' }}>High</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffab00', boxShadow: '0 0 8px #ffab00' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Medium</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 8px #00ff88' }} />
          <span style={{ color: 'var(--text-secondary)' }}>Low</span>
        </div>
      </div>
    </div>
  );
}
