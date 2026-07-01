# Ganaesh Website — Design System
Generated from style.css · ganaesh-website-v2.pages.dev

---

## Colour Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0e0f0d` | Page background |
| `--surface` | `#151712` | Card and component backgrounds |
| `--surface-2` | `#1c1f1a` | Elevated surfaces |
| `--border` | `#252820` | All borders and dividers |
| `--accent` | `#7a9e7e` | Sage green — primary accent, links, tags, CTA background |
| `--accent-dim` | `#4d6b51` | Muted sage — hover states on bordered elements |
| `--text-primary` | `#e8e9e4` | Headlines, primary body text |
| `--text-secondary` | `#8a8d85` | Supporting body text, descriptions |
| `--text-tertiary` | `#565850` | Footer, timestamps, least-important labels |

---

## Typography

### Typefaces
- **Display / Headings:** DM Serif Display (Google Fonts) — weight 400, line-height 1.15, letter-spacing -0.02em on large sizes
- **Body / UI:** DM Sans (Google Fonts) — weight 300 default, 500 for labels and uppercase items, line-height 1.65

### Type Scale (fluid, clamp-based)
| Token | Min | Max | Usage |
|---|---|---|---|
| `--step--1` | 0.8rem | 0.875rem | Captions, tags, footer, small labels |
| `--step-0` | 1rem | 1.125rem | Body text default |
| `--step-1` | 1.2rem | 1.5rem | Subheadings, hero sub, focus text |
| `--step-2` | 1.44rem | 1.875rem | Pillar headings (h3) |
| `--step-3` | 1.73rem | 2.375rem | Mid-level headings |
| `--step-4` | 2.07rem | 3rem | Impact numbers, mobile hero |
| `--step-5` | 2.49rem | 3.75rem | Connect heading, tablet hero |
| `--step-6` | 3rem | 4.75rem | Hero headline (desktop) |

### Label Style (repeated pattern)
```css
font-size: var(--step--1);
font-weight: 500-600;
letter-spacing: 0.08–0.12em;
text-transform: uppercase;
color: var(--accent) or var(--text-primary);
```

---

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | 0.5rem | Tight gaps within components |
| `--space-s` | 1rem | Element spacing within sections |
| `--space-m` | 1.5rem | Grid gaps, internal padding |
| `--space-l` | 2.5rem | Section internal padding, card padding |
| `--space-xl` | 4rem | Between pillars and major content blocks |
| `--space-2xl` | 7rem | Hero bottom padding |
| `--space-3xl` | 10rem | Section padding-block (reduced to 5rem at 480px) |

---

## Layout

### Container
- Max-width: 1080px, centred
- Padding-inline: clamp(1.25rem, 5vw, 3rem) — fluid, responsive

### Section Grid (label + content)
- Two columns: 160px label | 1fr content
- Collapses to single column at 768px
- Gap: `--space-l`

### Section Structure
- Every section: `padding-block: var(--space-3xl)`
- Every section: `border-bottom: 1px solid var(--border)`
- Hero: `min-height: 100svh`, flex centred

---

## Animation

### Scroll Reveal (.reveal)
```css
opacity: 0;
transform: translateY(40px) scale(0.97);
transition: opacity 600ms, transform 600ms;
easing: cubic-bezier(0.16, 1, 0.30, 1);  /* fast-out, slow-in */
will-change: transform, opacity;
```
Triggered by adding `.visible` class via Intersection Observer.

### Hover Transitions (cards, links, buttons)
```css
transition-duration: 350ms;  /* --duration */
easing: cubic-bezier(0.22, 1, 0.36, 1);  /* --ease-out */
```

### Accessibility
`prefers-reduced-motion: reduce` disables all transitions and sets opacity to 1, transform to none.

### Hero Entrance
Staggered per element at 80ms intervals — opacity + translateY only.

---

## Components

### Cards (impact-item, article-card)
```css
background: var(--surface);
border: 1px solid var(--border);
border-radius: 3px;  /* --radius */
padding: var(--space-l);
```
Hover: `border-color` transitions to `--accent-dim`

### Buttons / Links (connect-link)
```css
font-size: var(--step--1);
font-weight: 500;
letter-spacing: 0.06em;
text-transform: uppercase;
padding: 0.6em 1.4em;
border: 1px solid var(--border);
border-radius: 3px;
```
Primary variant: `background: var(--accent)`, `color: var(--bg)`
Hover: background transparent, border and text switch to accent

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| 768px | Section grid collapses to 1 col; impact and writing grids go to 1 col; hero headline drops to `--step-5` |
| 480px | `--space-3xl` reduces to 5rem; `--space-2xl` to 3.5rem; hero headline drops to `--step-4`; connect links stack full-width |

---

## Design Principles (decisions behind the values)

1. **Dark-first.** Near-black background (#0e0f0d) is warm, not cold — avoids the sterile feel of pure #000000.
2. **Sage as the only colour.** One accent, used sparingly. Everything else is greyscale. Restraint is the premium signal.
3. **Serif for display, sans for everything else.** DM Serif Display carries authority without formality. DM Sans at weight 300 keeps body text light and readable.
4. **Fluid type scale.** No hard breakpoints for font sizes — clamp() makes every screen size feel intentional.
5. **Borders as structure.** Hairline borders (#252820) divide sections instead of whitespace alone — creates editorial density.
6. **Animation serves entry, not decoration.** Scroll reveals only. No looping animations, no hover motion beyond colour transitions.
7. **3px radius only.** Near-square corners signal precision, not friendliness. Appropriate for an executive audience.

---

## How to use this file

At the start of any Claude Code session working on this site:
> "Read design-system.md before making any visual changes. All new components must use only the tokens defined here."

For new projects using this as a base:
> "Use design-system.md as the reference. Adapt the colour palette and typefaces for the new brief but preserve the spacing scale, animation system, and layout structure."
