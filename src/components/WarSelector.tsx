'use client';

import { WarType } from '@/lib/types';

interface WarSelectorProps {
  selectedWar: WarType;
  onSelect: (war: WarType) => void;
}

const wars = [
  { id: 'iraq-2003' as WarType, name: 'Iraq Invasion', year: '2003', description: 'Gulf War II' },
  { id: 'afghanistan-2001' as WarType, name: 'Afghanistan War', year: '2001', description: 'War on Terror' },
  { id: 'vietnam-1965' as WarType, name: 'Vietnam War', year: '1965', description: 'Second Indochina' },
];

export default function WarSelector({ selectedWar, onSelect }: WarSelectorProps) {
  return (
    <div className="war-selector">
      <h3 style={{ marginBottom: '16px', color: 'var(--accent-historical)', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px' }}>
        Historical Mirror
      </h3>
      {wars.map((war) => (
        <label
          key={war.id}
          className={`war-option ${selectedWar === war.id ? 'selected' : ''}`}
          onClick={() => onSelect(war.id)}
        >
          <span className="war-indicator" />
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>
              {war.name}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              {war.year} — {war.description}
            </div>
          </div>
        </label>
      ))}
    </div>
  );
}
