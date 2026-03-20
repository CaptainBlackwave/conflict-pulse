# Active Context: ConflictPulse Dashboard

## Current State

**Project Status**: ✅ Production-ready with API integration
**Type**: Comparative Conflict Dashboard Web Application

ConflictPulse is a real-time conflict comparison dashboard that displays Iran 2026 conflict data alongside historical US-involved wars (Iraq 2003, Afghanistan 2001, Vietnam 1965).

## Recently Completed

- [x] API integration layer with ACLED and HDX
- [x] Static historical data for UCDP replacement (Iraq, Afghanistan, Vietnam)
- [x] API status indicators in header
- [x] Data fetching utilities with fallback to demo data
- [x] Environment-based credential loading

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Recharts for data visualization
- Leaflet/React-Leaflet for maps
- Bun package manager

## API Integration

| Source | Endpoint | Status |
|--------|----------|--------|
| ACLED | `/api/acled` | ✅ OAuth2 email/password |
| HDX/HAPI | `/api/hdx` | ✅ App identifier |
| Historical | `/api/historical` | ✅ Static JSON |

## Environment Variables

```
ACLED_EMAIL=your-email
ACLED_PASSWORD=your-password
HAPI_APP_IDENTIFIER=your-app-id
```

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Main dashboard with API | ✅ Complete |
| `src/app/api/acled/route.ts` | ACLED proxy | ✅ Complete |
| `src/app/api/hdx/route.ts` | HDX proxy | ✅ Complete |
| `src/app/api/historical/route.ts` | Static data server | ✅ Complete |
| `src/lib/api.ts` | Data fetching utilities | ✅ Complete |
| `src/data/historical.json` | Historical conflict data | ✅ Complete |

## Design System

- **Colors**: Dark theme (#0a0c10 primary), red-orange for live (#ff3d00), cyan for historical (#00e5ff)
- **Typography**: JetBrains Mono (headings), IBM Plex Sans (body), Space Mono (data)
- **Effects**: Glow cards, pulse animations, smooth transitions

## Session History

| Date | Changes |
|------|---------|
| 2026-03-19 | Created ConflictPulse dashboard with full feature set |
| 2026-03-20 | Added API integration for ACLED/HDX, static historical data |

## Pending Improvements

- [ ] Add oil price API (Alpha Vantage)
- [ ] Real-time WebSocket updates
- [ ] Data export functionality
