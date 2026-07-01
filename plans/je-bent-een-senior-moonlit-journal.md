# Plan: Interactive Mobile News App Prototype

## Context
The user has an existing Figma design (`src/imports/MobileV2/index.tsx`) of a Dutch mobile news homepage. The task is to build an interactive React prototype that adds native-feeling horizontal topic navigation (like Instagram/YouTube tabs) on top of the existing design — without redesigning the visual identity.

## What we're building
- Sticky `HeaderNavTopics` bar that stays visible while scrolling
- Horizontal swipe between topic feeds (touch + pointer events)
- Tap-to-switch topics with animated indicator
- Per-topic vertically scrollable feed
- Smooth transitions between topics using `motion/react`

---

## Architecture

### App.tsx
Main shell — renders the full mobile prototype inside a centred phone frame.

```
App
 └── MobileNewsApp          ← new component (state lives here)
      ├── StatusBar          ← from import (MobileV > StatusBar slice)
      ├── MainNav            ← from import (sticky, always visible)
      ├── TopicsNavBar       ← NEW interactive component
      │    └── TopicPill × N  ← active/inactive variants from import PillButton
      └── TopicFeedSwiper    ← NEW swiper shell
           └── TopicFeed × N  ← one per topic, each is vertically scrollable
                └── <MobileV feed content>  ← render the import's Frame11 content
```

---

## Topics
Derive the topics list from the existing PillButton labels in the import. Since the import shows 4 topics ("sub-nav__item" placeholders), we'll use realistic Dutch news topics that match the design context:

```ts
const TOPICS = [
  "Nieuws", "Politiek", "Sport", "Wereld",
  "Tech", "Cultuur", "Video", "Lifestyle"
]
```

---

## Key Components

### `TopicsNavBar`
- Horizontal `overflow-x: auto` scroll container with `scroll-snap-type: x mandatory`
- Each pill: mirrors `PillButton` classes from import (bg-[#ffe6e6], text-[#af0202], rounded-[999px], font-['Libre_Franklin'])
- Active state: same pill style (it's already the "active" red pill in the import — inactive pills get `bg-transparent text-black border` variant)
- On topic change: `scrollIntoView({ behavior: 'smooth', inline: 'center' })`
- Sticky via CSS: `position: sticky; top: 0; z-index: 10`

### `TopicFeedSwiper`
- Full-width container, `overflow: hidden`
- Inner track: `display: flex`, width = `N * 100%`, translated via `transform: translateX(-index * (100% / N))`
- Transition: `motion` `animate` with `type: "spring", stiffness: 300, damping: 35`
- Touch handling: `onPointerDown/Move/Up` to detect horizontal swipe (threshold ~50px), block vertical scroll during horizontal swipe
- Each feed pane: `flex-shrink: 0; width: 100%; overflow-y: auto; height: 100%`

### `TopicFeed`
- Renders `Frame11` content from the import for the main "Nieuws" topic
- For other topics: renders a simplified placeholder that still uses the import's card structure/styling (dividers, typography, PillButton styles) to feel realistic, but with fewer/different articles
- Vertical scroll is native browser scroll within each pane

---

## Sticky behaviour
```
[StatusBar]      ← not sticky, scrolls away
[MainNav]        ← sticky top:0 during scroll
[TopicsNavBar]   ← sticky top:48px (MainNav height)
[TopicFeedSwiper] ← fills remaining viewport height, internal scroll per pane
```

The sticky approach: the outer shell has a fixed phone frame height. The `TopicFeedSwiper` panes each get `overflow-y: auto` so they scroll internally. The StatusBar + MainNav + TopicsNav are outside the scrollable area, making them inherently "sticky."

This gives us clean scroll isolation — swiping left/right doesn't reset vertical scroll position within each feed because each feed has its own scroll container.

---

## Files to create/modify

| File | Action |
|------|--------|
| `src/app/App.tsx` | Replace with `MobileNewsApp` shell |
| `src/styles/fonts.css` | Add Libre Franklin Google Fonts import |
| `src/styles/theme.css` | Keep existing tokens unchanged |

The import files under `src/imports/MobileV2/` are read-only — we render them, never edit them.

---

## Visual fidelity
- Use exact class names from import for PillButton states: `bg-[#ffe6e6]`, `text-[#af0202]`, `rounded-[999px]`
- Inactive pill: `bg-transparent text-[#1a1a1a]` with same padding/font
- Active indicator: the pill background is the indicator (no separate underline needed — matches existing design)
- Phone frame: 375px wide, max 844px tall (iPhone 13 viewport), centred on desktop with subtle shadow

---

---

## Change set 3 — Fix 3:2 aspect ratio on DefaultStoryblock thumbnails + Chameleon guidance

### Problem
The thumbnail in `DefaultStoryblock` uses `width: 96, height: 64` (fixed px). The inner `<img>` is `position: absolute; size-full` but the container's rendered height can collapse if the `position: relative` cascade is broken by a flex parent. Result: images look square.

### Fix
Replace the fixed `height: 64` on `ThumbImage` with the same padding-top technique used for hero and grid images:

```tsx
function ThumbImage({ imgIdx }) {
  return (
    <div style={{ width: 96, flexShrink: 0, position: "relative", borderRadius: 2, overflow: "hidden", background: "#e0e0e0" }}>
      {/* 3:2 aspect ratio spacer */}
      <div style={{ paddingTop: "66.67%" }} />
      <img
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        src={IMGS[imgIdx % IMGS.length]}
      />
    </div>
  );
}
```

**File:** `src/app/App.tsx` — `ThumbImage` component only.

### Chameleon / Figma components — how to share them

Chameleon (Mediahuis design system) is **not installed** in this project. Three ways to bring it in, ranked easiest → most complete:

| Option | How | Result |
|--------|-----|--------|
| **Figma frame import** | Select a teaser frame in Figma → "Import to Make" | Arrives as `<figma_imported_react_code>` — I render it faithfully |
| **Make Kit** | Select the Chameleon kit in Figma Make's kit picker | Arrives as `<figma_selected_make_kits>` — I use its components & tokens throughout |
| **npm package** | `npm install @chameleon/...` and share the package name | I can read its exports and use the real components |

**Recommended:** Use the **Make Kit** route — select Chameleon in the Figma Make kit picker before sending your next message. That gives me access to all tokens, components, and spacing from the design system without any manual copy-paste.

---

## Change set 4 — Fix all AspectRatioKeeperRotatedAutoLayout to 3:2

### Context
Figma exports aspect ratios using a rotated-div spacer trick: a fixed `h-[166.666px]` wrapper forces image containers to a fixed pixel height regardless of width. This breaks the 3:2 ratio at any width other than 250px. The fix replaces every occurrence with a responsive `padding-top: 66.67%` spacer (standard CSS aspect-ratio technique).

### Pattern to replace (identical in all files)
```tsx
// OLD — inside every AspectRatioKeeperRotatedAutoLayout* function body:
<div className="flex h-[166.666px] items-center justify-center relative shrink-0 w-full">
  <div className="flex-none rotate-[-41.81deg] w-full">
    <div className="h-0 relative w-full" data-name="Aspect ratio keeper # Rotated Auto Layout" />
  </div>
</div>

// NEW
<div className="relative shrink-0 w-full" style={{ paddingTop: "66.67%" }} />
```

The parent `Aspect Ratio` wrapper already has `overflow-clip` and `w-full`; the image layer is `absolute inset-0 size-full object-cover` — so the padding-top spacer correctly drives the container height and the image fills it at 3:2.

### Files and occurrence count

| File | Variants | Strategy |
|------|----------|----------|
| `src/imports/MobileV2/index.tsx` | 96 (`…0`–`…95`) | `replace_all: true` on the inner div block |
| `src/imports/Frame3766/index.tsx` | 4 (`…0`–`…3`) | same |
| `src/imports/DefaultTeaser/index.tsx` | 1 | same |
| `src/imports/ZoneMobile/index.tsx` | 2 (`…0`, `…1`) | same |

All four files share the **exact same** three-line JSX block, so a single `replace_all: true` edit per file is sufficient.

### Verification
After the change every image placeholder (hero, default-teaser thumbnail, grid) should render at 3:2 across all topic feeds and the Nieuws feed.

---

## Verification
1. `npm run dev` — app loads without errors
2. Tap a topic pill → feed changes, active pill highlighted, bar auto-scrolls to keep it in view
3. Swipe left/right on feed → topic changes, pill bar follows
4. Scroll down in a feed → MainNav + TopicsNav stay visible (sticky)
5. Switch topics → previously scrolled position is preserved per-feed
6. Works on touch (mobile) and mouse (desktop pointer events)

---

## Change set 2 — Remove "10:33" + Arnhem font

### Problem
The image (`src/imports/image-1.png`) shows two issues in the rendered phone:
1. A large "10:33" (date/time sprite from `imgDateTimeFill1`) bleeds into the right side of the custom StatusBar
2. The user wants Arnhem (the publication's editorial serif) applied to article titles

### Fix 1 — Remove 10:33
`imgDateTimeFill1` is a 140×15 SVG sprite containing the carrier-name + time string. It is one of the three `svg-7njua` exports rendered in our custom `StatusBar`. Remove that single `<img>` tag (keep `imgDateTimeFill` = cellular icon 32×13, and `imgDateTimeFill2` = battery icon 37×15).

**File:** `src/app/App.tsx` — `StatusBar()` component, remove the line:
```tsx
<img src={imgDateTimeFill1} alt="" style={{ height: 12, width: "auto" }} />
```

### Fix 2 — Arnhem font
Arnhem (OurType foundry, commercial licence) is **not** available on Google Fonts and there are no font files in the project. Two viable paths:

**Option A — Rely on local installation** (zero-config, prototype-only):  
Declare `font-family: 'Arnhem Blond', 'Arnhem', Georgia, serif` for article titles and the topics-header in placeholder feeds. Arnhem renders on any device that has it installed (designer's machine, typically). Falls back to Georgia elsewhere.

**Option B — Free editorial serif from Google Fonts** (works everywhere):  
Use [Lora](https://fonts.google.com/specimen/Lora) or [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) — both are high-quality serif display faces with a similar editorial character to Arnhem Blond. Import via `fonts.css`, apply to titles.

**Recommended:** Option A for the prototype (matches the actual design intent), with a Georgia fallback so it degrades gracefully.

**Files changed:**
- `src/app/App.tsx` — update `ArticleCard` title `fontFamily` and `PlaceholderFeed` `h2` `fontFamily` to `'Arnhem Blond', 'Arnhem', Georgia, serif`
