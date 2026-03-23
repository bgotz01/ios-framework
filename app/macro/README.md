# Macro Transits

This page displays current planetary positions and aspects in the sky, independent of any birth chart. These are the cosmic energies affecting everyone collectively.

## Features

- **Current Planetary Positions**: Shows all major planets (Sun through Pluto, plus North Node) with their current zodiac positions, degrees, and movement speed
- **Retrograde Indicators**: Planets moving backward are marked with ℞
- **Current Aspects**: Displays active aspects between planets in the sky right now
- **Applying/Separating**: Shows whether aspects are getting tighter (applying) or looser (separating)
- **Real-time Updates**: Refresh button to get the latest positions

## Architecture

### API Route: `/src/app/api/macro-transits/route.ts`
Server-side API endpoint that:
- Accepts optional `date` query parameter (defaults to current date)
- Calls Swiss Ephemeris calculations (which require Node.js)
- Returns JSON with positions and aspects

### Library: `/src/lib/astrology/macro-transits.ts`
Core calculation functions (server-side only):
- `getCurrentPlanetaryPositions()` - Calculates current positions of all major planets using Swiss Ephemeris
- `calculateMacroAspects()` - Finds aspects between current planetary positions
- Returns detailed position data including retrograde status and speed

### Components

### `/src/components/astrology/macro/CurrentSkyPositions.tsx`
Displays the current positions of all planets in a grid layout with:
- Planet symbols and colors
- Current zodiac sign and degree
- Movement speed
- Retrograde indicators

### `/src/components/astrology/macro/MacroAspects.tsx`
Shows current aspects between planets:
- Grouped by aspect type (conjunction, square, trine, etc.)
- Color-coded by aspect nature
- Orb precision
- Applying/separating status

## Usage

This page doesn't require a birth chart - it shows the current state of the cosmos that affects everyone. It's useful for:
- Understanding collective energies
- Timing decisions based on planetary weather
- Seeing what transits are active globally
- Learning about current astrological conditions

## Navigation

Added to the Astrology sidebar under "Cycles - Timing & Evolution" as the first item, since it doesn't require a birth chart.
