# ConflictPulse - Specification

## Project Overview

**Project Name:** ConflictPulse  
**Type:** Comparative Conflict Dashboard (Web Application)  
**Core Functionality:** Real-time comparison dashboard displaying current Iran conflict data alongside historical US-involved wars (Iraq 2003, Afghanistan 2001, Vietnam 1965)  
**Target Users:** Researchers, journalists, policy analysts, general public interested in conflict analysis

---

## UI/UX Specification

### Layout Structure

**Page Sections:**
1. **Header** - Logo, navigation, live clock showing conflict duration
2. **Side Panel** - Historical war selector (Iraq, Afghanistan, Vietnam)
3. **Main Dashboard** - Split view with Live (Iran) and Historical (selected war) data
4. **Metrics Grid** - Four key comparison cards (Intensity, Human Toll, Economic, Displacement)
5. **Visualization Area** - War Clock timeline, charts, and map
6. **Footer** - Data source attribution, last updated timestamp

**Grid Layout:**
- Desktop: 12-column grid, sidebar fixed at 280px
- Tablet: Collapsible sidebar, 8-column main area
- Mobile: Stacked layout, hamburger menu

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Design

**Color Palette:**
- Background Primary: `#0a0c10` (deep black)
- Background Secondary: `#12151c` (card backgrounds)
- Background Tertiary: `#1a1e28` (hover states)
- Accent Live (Iran): `#ff3d00` (warning red-orange)
- Accent Historical: `#00e5ff` (cyan blue)
- Success/Positive: `#00ff88` (neon green)
- Warning: `#ffab00` (amber)
- Text Primary: `#e8eaed` (off-white)
- Text Secondary: `#8b9099` (muted gray)
- Border: `#2a2f3a` (subtle borders)

**Typography:**
- Headings: "JetBrains Mono", monospace (military/intel aesthetic)
- Body: "IBM Plex Sans", sans-serif
- Data/Numbers: "Space Mono", monospace
- Font sizes:
  - H1: 32px / 700
  - H2: 24px / 600
  - H3: 18px / 600
  - Body: 14px / 400
  - Caption: 12px / 400

**Spacing System:**
- Base unit: 4px
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px

**Visual Effects:**
- Card shadows: `0 4px 24px rgba(0, 0, 0, 0.5)`
- Glow effects on live data: `0 0 20px rgba(255, 61, 0, 0.3)`
- Pulse animation on live indicators
- Smooth transitions: 200ms ease-out
- Scanline overlay effect on header (subtle)

### Components

**1. War Selector Panel**
- Radio button group styled as military-style toggles
- Options: Iraq (2003), Afghanistan (2001), Vietnam (1965)
- States: default (dim), hover (brighten), selected (glowing border)

**2. Metric Cards**
- Large number display with trend arrow
- Label and comparison text
- Sparkline mini-chart
- Live cards have pulsing dot indicator
- States: loading (skeleton), loaded, error

**3. Comparison Chart**
- Dual-axis bar/line chart
- Toggle between: Daily Fatalities, Displacement, Events
- Time range selector: 10 days, 20 days, 30 days
- Tooltip on hover showing exact values

**4. War Clock Timeline**
- Horizontal timeline with day markers
- Two colored tracks (Iran = red, Historical = blue)
- Event markers with tooltips
- Zoom controls

**5. Regional Map**
- Interactive Leaflet map centered on Middle East
- Hotspot markers with intensity coloring
- Layer toggles: Strikes, Displacement, Oil Routes
- Popup details on click

**6. Oil Price Tracker**
- Line chart showing price over time
- Event annotations (airstrikes, closures)
- Price threshold indicators

---

## Functionality Specification

### Core Features

1. **Data Fetching & Caching**
   - Server-side API routes for ACLED, UCDP, HDX data
   - In-memory cache with 15-minute TTL
   - Fallback to static demo data if APIs unavailable

2. **War Comparison Engine**
   - Normalize data between different time periods
   - Calculate per-day metrics for fair comparison
   - Generate percentage comparisons

3. **Live/Historical Toggle**
   - Visual distinction between live (pulsing) and historical data
   - Auto-refresh live data every 5 minutes

4. **Interactive Visualizations**
   - Recharts for all charts
   - Leaflet for map (using react-leaflet)
   - Smooth animations on data updates

5. **Demo Data Mode**
   - Since real APIs require keys, use realistic demo data
   - Iran 2026: Generated realistic conflict data
   - Historical: Static datasets for Iraq/Afghanistan/Vietnam

### User Interactions

- Click war selector → Update historical view
- Hover chart bars → Show tooltip with values
- Click map markers → Show event details
- Toggle chart types → Switch visualization
- Toggle map layers → Show/hide data layers

### Edge Cases

- API timeout: Show cached data with "stale" indicator
- No data: Show "No data available" placeholder
- Loading: Show skeleton loaders
- Error: Show error state with retry button

---

## Acceptance Criteria

1. Dashboard loads within 3 seconds
2. All four metric cards display data
3. War selector switches historical comparison correctly
4. Charts render with correct data and tooltips work
5. Map displays with at least 5 markers
6. Live indicator pulses on Iran data
7. Responsive layout works on mobile
8. No console errors on load
9. TypeScript compiles without errors
10. ESLint passes with no warnings
