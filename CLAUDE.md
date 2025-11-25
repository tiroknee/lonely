# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

**Lonely Lantern** is an ASCII action roguelike game built with the
**Asciitorium** framework. The game features dual-control gameplay where players
control both a hero's movement (WASD/F) and a bard's musical support
(HJKL+Shift). The game uses LLM-driven natural conversation for NPC interactions
instead of traditional static dialogue menus.

**Key Technologies:**

- TypeScript on Node
- Asciitorium (custom ASCII game framework with React-like JSX syntax)
- Vite for building/bundling
- Custom state management via Asciitorium's `State` class (NOT React hooks)

## Essential Commands

### Development

```bash
npm run web          # Start Vite dev server (port 5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run cli          # Run CLI version with tsx
npm run format       # Format all files with Prettier
npm run format:check # Check formatting without making changes
```

### Utility Scripts

```bash
# Generate ASCII art from figlet fonts
npm run figlet <font-name> <text>
npm run figlet:fonts              # List available figlet fonts

# Generate dungeon maps
npm run map-builder <width> <height> <directory-name> [--smooth]
# Example: npm run map-builder 10 10 dungeon-level-1 --smooth
```

## Architecture Overview

### State Management Pattern

**CRITICAL:** This project uses Asciitorium's `State` class, NOT React hooks.

```tsx
// ✅ CORRECT
import { State } from 'asciitorium';
const count = new State(0);
count.value++;

// ❌ WRONG - DO NOT USE REACT
const [count, setCount] = useState(0);
```

### Application Structure

The app uses a **state machine pattern** for screen navigation:

```
main.tsx (root)
  ↓
Screen state machine (Switch/Case components)
  ├─ TitleScreen   → 'title'
  ├─ Prologue      → 'prologue'
  ├─ Inn           → 'inn'
  └─ (future) Overworld → 'overworld'
```

**Key file:** [src/main.tsx](src/main.tsx) - Entry point with screen state
machine and global keybinds

**Navigation pattern:**

- Central `currentScreen` State tracks which screen is active
- Screen transitions use helper functions (`screen.goToTitle()`, etc.)
- Each screen component receives an `onComplete` callback to trigger next screen
- Switch/Case pattern ensures only one screen component exists at a time (memory
  efficient)

### Component Structure

Components follow **function component pattern** (not classes):

```tsx
interface ScreenProps {
  onComplete?: () => void;
}

export const ScreenName = ({ onComplete }: ScreenProps) => {
  return (
    <Column align="center" width="fill" height="fill">
      {onComplete && <Keybind keyBinding="Enter" action={onComplete} />}
      {/* Component content */}
    </Column>
  );
};
```

### Art Asset System

**Asset directories:**

- `public/art/sprites/*.art` - ASCII sprites (static or animated)
- `public/art/fonts/*.flf` - Figlet fonts for banners
- `public/art/maps/*/` - Game maps with legend.json files
- `public/art/materials/*.art` - Textures for 3D rendering
- `public/art/sounds/*.mp3` - Audio files

**Art file format:**

- Use `§` separator for metadata
- Use `¶` separator for animation frames or newlines in text
- Files without separators are treated as static sprites

**Usage:**

```tsx
<Art sprite="logo" />                    // Loads public/art/sprites/logo.art
<Banner font="marker" text="Title" />    // Loads public/art/fonts/marker.flf
```

### Game Loop Design (Future)

Per CONCEPT_AND_VISION.md, the game follows this loop:

1. **Inn** - Converse with NPCs (Gareth, heroes, patrons)
2. **Dungeon** - Follow hero into dungeon (dual-control combat)
3. **Composition** - Create song based on dungeon run
4. **Performance** - Perform for crowd, earn rewards
5. **Upgrade** - Purchase instruments, improve reputation

## Asciitorium Framework Specifics

**IMPORTANT:** Always reference `ASCIITORIUM_REFERENCE.md` when working with
Asciitorium components. The framework has significant differences from React.

### Key Differences from React

1. **State:** Use `new State(value)`, access via `.value`, NOT useState
2. **Newlines:** Use `¶` (pilcrow) in Text components, NOT `\n`
3. **Styling:** Use component props (`border`, `width`, `gap`), NOT
   className/style
4. **Conditional Rendering:** Use `Switch/Case/Default` components, NOT
   ternaries with JSX
5. **Lifecycle:** Components auto-subscribe to State, no useEffect needed

### Component Sizing Strategy

- **Omit width/height** for auto-sizing (recommended for Text, Art, Column)
- **Use `"fill"`** to fill parent container (Row defaults to this)
- **Use numbers** for fixed dimensions

### TSConfig JSX Setup

The project uses custom JSX runtime:

```json
{
  "jsx": "react-jsx",
  "jsxImportSource": "asciitorium"
}
```

Do not modify these settings. Asciitorium provides its own JSX factory.

## Current Implementation Status

**Implemented:**

- ✅ Title screen with ASCII art and keybind navigation
- ✅ Prologue with typewriter effect and narrative text
- ✅ Basic Inn screen placeholder
- ✅ Screen state machine with transition system
- ✅ Custom art assets (lantern, flame, cyclops, etc.)

**Not Yet Implemented:**

- ⏳ LLM-driven dialogue system
- ⏳ Dual-control combat system
- ⏳ Song composition mini-game
- ⏳ Dungeon exploration (GameWorld, MapView, FirstPersonView)
- ⏳ NPC memory and gossip system
- ⏳ Progression (gold, reputation, instruments)

## Development Guidelines

### When Adding New Screens

1. Create component file in `src/` directory
2. Define props interface with `onComplete?: () => void`
3. Add to screen state type in [src/main.tsx](src/main.tsx)
4. Add Case to Switch statement with appropriate state value
5. Create transition helper in `screen` object

### When Creating Art Assets

- Use `npm run figlet` for banner text
- Use `npm run map-builder` for dungeon maps
- Place custom sprites in `public/art/sprites/`
- Reference the art/sprites/README.md for file format details

### When Working with State

Always use Asciitorium State:

```tsx
const myState = new State(initialValue);

// Read
console.log(myState.value);

// Write
myState.value = newValue;

// Subscribe
myState.subscribe((newVal) => {
  console.log('Changed to:', newVal);
});

// Use in JSX (auto-subscribes)
<Text>{myState}</Text>;
```

### When Adding Navigation

Use Keybind components for global shortcuts:

```tsx
<Keybind keyBinding="Enter" action={() => screen.goToNextScreen()} description="Continue" />
```

Note: Letter keys won't work when TextInput has focus. Use Arrow keys, Enter,
Escape, or F-keys for global navigation.

## Game Design Notes

**Theme:** Dark humor meets quiet melancholy **Tone:** Episodic storytelling
where each hero's run becomes a vignette **Progression:** Songs as currency,
reputation unlocks stronger heroes **Dungeons:** Three difficulty levels
(Graveditch → Mine → Tomb)

See CONCEPT_AND_VISION.md for complete design vision.

## Reference Documentation

- **ASCIITORIUM_REFERENCE.md** - Complete Asciitorium API reference (CRITICAL -
  read this first!)
- **CONCEPT_AND_VISION.md** - Game design, narrative, and system overview
- **public/art/sprites/README.md** - Art file format and sprite system
