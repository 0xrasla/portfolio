---
name: Technical Monochrome
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002113'
  on-tertiary-container: '#009668'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: ui-monospace
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1200px
---

## Brand & Style

This design system is defined by a "Modern Technical Minimalist" aesthetic, blending the precision of developer tools with the clarity of high-end editorial design. It targets a sophisticated technical audience—engineers, architects, and digital designers—who value efficiency, performance, and structural integrity.

The visual direction combines **Minimalism** with subtle **Brutalism**. It utilizes a strict grid-based architecture, heavy whitespace, and sharp geometric forms to evoke an atmosphere of intentionality and "engineered" beauty. The emotional response is one of calm authority, professional transparency, and meticulous attention to detail.

## Colors

The palette is strictly monochrome, utilizing high-contrast values to establish hierarchy without the distraction of hue.

- **Primary & Neutral:** Stark black (#000000) and crisp white (#FFFFFF) form the core of the interface, creating a definitive, high-contrast workspace.
- **Grays:** Mid-tones are used sparingly for borders, metadata, and secondary text, preventing the interface from feeling visually overwhelming.
- **Functional Accent:** A single chromatic accent—Emerald (#10B981)—is reserved exclusively for "active" states, terminal cursors, or success indicators, mimicking the functional color logic of a code editor.

Maintain a "Light" default mode for a clean, printed-documentation feel, but ensure the system is architected for a seamless inversion to a "Dark" mode where black becomes the primary surface.

## Typography

The typographic system relies on a dual-purpose strategy:

1.  **Headlines (Space Grotesk):** Provides a geometric, technical character that feels modern and innovative. For a more "pixelated" feel in accents, use `ui-monospace` at smaller sizes for labels and metadata.
2.  **Body (Inter):** Ensures maximum legibility for long-form project descriptions and professional bios. 

All headings should be set with tight tracking (letter-spacing), while labels and code-snippets should have slightly increased tracking to emphasize their technical nature. Avoid italicization; use font weight or case transformation (UPPERCASE) for emphasis instead.

## Layout & Spacing

This design system uses a **Fixed Grid** model based on a strict 4px baseline. Layouts are constructed on a 12-column grid with generous gutters to allow the content to breathe.

- **Margins:** Large outer margins keep the focus centered and create a "gallery" or "documentation" feel.
- **Rhythm:** Vertical spacing between sections should be significant (using multiples of 16px or 24px) to clearly define content blocks without the need for heavy separators.
- **Grid Details:** Where possible, align borders and text edges precisely to the grid. Use thin 1px lines to separate logical sections of a page.

## Elevation & Depth

In keeping with the technical minimalist aesthetic, this system avoids traditional shadows and soft blurs.

- **Bold Borders:** Depth is conveyed through 1px solid borders (`#000000` or `#E2E8F0`). 
- **Tonal Layering:** Use subtle shifts in background color (e.g., `#F8FAFC`) to indicate nested content or different UI tiers.
- **Hover Interaction:** Instead of elevation, use "inverted" states for interaction. A button might shift from a white background with a black border to a solid black background on hover.
- **Flat UI:** Elements should feel like they are printed on the surface rather than floating above it.

## Shapes

The shape language is strictly **Sharp (0px)**. 

Every component—buttons, input fields, project cards, and containers—must have square corners. This reinforces the technical, grid-based nature of the design. Circular elements are permitted only for specific functional icons or status indicators (like a "live" pulse), but the containers themselves remain rectangular.

## Components

### Buttons
Buttons are rectangular with a 1px solid border. The default state is a transparent or white background with black text. On hover, the button should invert (Black background, White text) or display a "pixel" dither pattern to signal interactivity.

### Project Cards
Cards are defined by thin 1px borders and internal padding that follows the 4px grid. Avoid shadows; use a change in border-weight or a subtle background fill change on hover. Headers within cards should use the `label-mono` style for a technical feel.

### Data Tables
Tables are the heart of the technical portfolio. Use horizontal lines only to separate rows, maintaining a clean, breathable flow. Column headers should be `UPPERCASE` and use `label-mono`.

### Inputs & Form Fields
Inputs are simple underlines or full 1px boxes with square corners. The focus state is indicated by a thicker 2px bottom border or a change in the border color to the functional Emerald accent.

### Chips & Tags
Tags should resemble "code tags," using a monospace font at a small scale, enclosed in a 1px border. No background fill is required unless the tag is "Active."