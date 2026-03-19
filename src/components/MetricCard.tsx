'use client';

import { MetricData } from '@/lib/types';

interface MetricCardProps {
  metric: MetricData;
  historicalValue?: number;
}

export default function MetricCard({ metric, historicalValue }: MetricCardProps) {
  const formatValue = (value: number): string => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    }
    if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'K';
    }
    return value.toLocaleString();
  };

  const comparison = historicalValue
    ? ((metric.value - historicalValue) / historicalValue * 100).toFixed(1)
    : null;

  return (
    <div className={`card ${metric.isLive ? 'card-glow-live' : 'card-glow-historical'}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
        <span className="metric-label">{metric.label}</span>
        {metric.isLive && <span className="live-dot" />}
      </div>
      <div className="metric-value" style={{ color: metric.isLive ? 'var(--accent-live)' : 'var(--accent-historical)' }}>
        {metric.unit === '%' ? `${metric.value}%` : formatValue(metric.value)}
      </div>
      {comparison && (
        <div style={{ marginTop: '8px', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
          <span className={Number(comparison) > 0 ? 'trend-up' : 'trend-down'}>
            {Number(comparison) > 0 ? '+' : ''}{comparison}%
          </span>
          <span style={{ color: 'var(--text-secondary)', marginLeft: '8px' }}>vs historical</span>
        </div>
      )}
    </div>
  );
}
