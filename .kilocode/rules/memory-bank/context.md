# Active Context: ConflictPulse Dashboard

## Current State

**Project Status**: ✅ Complete
**Type**: Comparative Conflict Dashboard Web Application

ConflictPulse is a real-time conflict comparison dashboard that displays Iran 2026 conflict data alongside historical US-involved wars (Iraq 2003, Afghanistan 2001, Vietnam 1965).

## Recently Completed

- [x] ConflictPulse dashboard with dark military/intelligence aesthetic
- [x] War selector panel for historical comparison
- [x] Metric cards showing intensity, casualties, displacement, oil impact
- [x] Comparison chart with toggleable views (fatalities, events, displacement)
- [x] War Clock timeline visualization
- [x] Oil price tracker ("Hormuz Ripple")
- [x] Interactive Leaflet map with regional hotspots
- [x] Demo data for all conflicts (Iran, Iraq, Afghanistan, Vietnam)
- [x] Responsive layout with sidebar

## Tech Stack

- Next.js 16 with App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Recharts for data visualization
- Leaflet/React-Leaflet for maps
- Bun package manager

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Main dashboard | ✅ Complete |
| `src/app/globals.css` | Theme & styles | ✅ Complete |
| `src/lib/types.ts` | TypeScript types | ✅ Complete |
| `src/lib/data.ts` | Demo data | ✅ Complete |
| `src/components/MetricCard.tsx` | Metric display | ✅ Complete |
| `src/components/WarSelector.tsx` | War selector | ✅ Complete |
| `src/components/ComparisonChart.tsx` | Bar chart | ✅ Complete |
| `src/components/OilPriceChart.tsx` | Oil tracker | ✅ Complete |
| `src/components/WarClock.tsx` | Timeline | ✅ Complete |
| `src/components/ConflictMap.tsx` | Leaflet map | ✅ Complete |
| `src/components/MapWrapper.tsx` | Dynamic map loader | ✅ Complete |

## Design System

- **Colors**: Dark theme (#0a0c10 primary), red-orange for live (#ff3d00), cyan for historical (#00e5ff)
- **Typography**: JetBrains Mono (headings), IBM Plex Sans (body), Space Mono (data)
- **Effects**: Glow cards, pulse animations, smooth transitions

## Session History

| Date | Changes |
|------|---------|
| 2026-03-19 | Created ConflictPulse dashboard with full feature set |

## Pending Improvements

- [ ] API integration (ACLED, UCDP, HDX) with rate limiting and caching
- [ ] Additional chart types
- [ ] Export functionality
- [ ] Dark/light mode toggle
