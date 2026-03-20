# ConflictPulse

A comparative conflict dashboard that displays real-time Iran conflict data alongside historical US-involved wars.

## Features

- **Live Conflict Tracking**: Real-time data from ACLED API
- **Historical Comparison**: Compare with Iraq (2003), Afghanistan (2001), Vietnam (1965)
- **Interactive Visualizations**:
  - Metric cards (events, fatalities, displacement, oil impact)
  - Comparison charts with toggleable views
  - War Clock timeline
  - Regional contagion map
  - Oil price tracker ("Hormuz Ripple")
- **API Status Indicators**: Shows connection status for data sources

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Recharts for data visualization
- Leaflet/React-Leaflet for maps

## Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun build

# Run linting
bun lint

# Run type checking
bun typecheck
```

## API Integration

### Environment Variables

Create a `.env.local` file with the following:

```env
# ACLED (Armed Conflict Location & Event Data)
ACLED_EMAIL=your-email@example.com
ACLED_PASSWORD=your-password

# HDX (Humanitarian Data Exchange)
HAPI_APP_IDENTIFIER=your-app-id
```

### Data Sources

| Source | Purpose | Endpoint |
|--------|---------|----------|
| ACLED | Real-time conflict events | `/api/acled` |
| HDX | Displacement metrics | `/api/hdx` |
| Static Data | Historical wars | `/api/historical` |

### Without API Keys

The app works without API keys using demo data. API status indicators in the header show which sources are connected.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── acled/        # ACLED API proxy
│   │   ├── hdx/          # HDX API proxy
│   │   └── historical/    # Static historical data
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main dashboard
├── components/
│   ├── ComparisonChart.tsx
│   ├── ConflictMap.tsx
│   ├── MapWrapper.tsx
│   ├── MetricCard.tsx
│   ├── OilPriceChart.tsx
│   ├── WarClock.tsx
│   └── WarSelector.tsx
├── data/
│   └── historical.json   # Static historical data
└── lib/
    ├── api.ts            # Data fetching utilities
    ├── data.ts           # Demo data
    └── types.ts          # TypeScript types
```

## License

MIT
