'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Label,
} from 'recharts';
import { OilPricePoint } from '@/lib/types';

interface OilPriceChartProps {
  data: OilPricePoint[];
}

export default function OilPriceChart({ data }: OilPriceChartProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <div className="card" style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3>&ldquo;Hormuz Ripple&rdquo; Oil Tracker</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ 
            fontFamily: 'var(--font-mono)', 
            fontSize: '18px', 
            color: 'var(--accent-warning)',
            fontWeight: 700 
          }}>
            ${data[data.length - 1]?.price.toFixed(1)}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Brent Crude</span>
        </div>
      </div>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis 
              dataKey="date" 
              stroke="var(--text-secondary)" 
              fontSize={11}
              tickFormatter={formatDate}
              tickLine={false}
            />
            <YAxis 
              domain={['dataMin - 5', 'dataMax + 5']}
              stroke="var(--text-secondary)" 
              fontSize={11}
              tickLine={false}
              label={{ value: '$/barrel', angle: -90, position: 'insideLeft', fill: 'var(--text-secondary)', fontSize: 11 }}
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
            <ReferenceLine y={90} stroke="var(--accent-live)" strokeDasharray="5 5" label={{ value: 'Critical', fill: 'var(--accent-live)', fontSize: 10, position: 'right' }} />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="var(--accent-warning)" 
              strokeWidth={2}
              dot={(props: { cx?: number; cy?: number; payload?: OilPricePoint }) => {
                if (props.payload?.event && props.cx && props.cy) {
                  return (
                    <svg x={props.cx - 4} y={props.cy - 4} width={8} height={8}>
                      <circle cx={4} cy={4} r={4} fill="var(--accent-live)" />
                    </svg>
                  );
                }
                return <circle cx={props.cx} cy={props.cy} r={2} fill="var(--accent-warning)" />;
              }}
              activeDot={{ r: 6, fill: 'var(--accent-warning)', stroke: 'var(--bg-primary)', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
