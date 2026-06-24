# NOFARI Design

This document captures the permanent NOFARI visual identity established in Sprint 002. It defines
the design system direction without introducing backend behavior, fake product data, or simulated AI.

## Principles

- **Clarity before density:** Interfaces should explain what a user can trust, inspect, and act on.
- **Evidence-first workflows:** Future intelligence experiences should make sources, state, and
  reasoning boundaries explicit.
- **Dark luxury restraint:** Use depth, spacing, typography, and material contrast without gradients,
  glassmorphism, neon, or decorative noise.
- **Accessible by default:** Color, contrast, keyboard navigation, and semantic structure are
  baseline requirements.
- **No fake confidence:** Avoid placeholder charts, simulated metrics, or mock intelligence outputs
  that could be mistaken for real platform behavior.

## Visual Identity

- **Background:** `#090909`
- **Panels:** `#1A1A1A`
- **Primary:** `#D4AF37`
- **Text:** warm off-white, muted warm gray for secondary text.
- **Shape:** rounded corners and generous spacing.
- **Typography:** elegant serif display moments paired with clear system sans-serif interface text.

## Component Inventory

Reusable primitives live in `components/ui`:

- `Button`
- `TextInput`
- `ChatInput`
- `UploadButton`
- `Card`
- `Avatar`
- `Badge`
- `LoadingIndicator`
- `MessageBubble`
- `SectionContainer`

These components are UI-only. They do not authenticate, upload, chat, persist data, call AI services,
or imply unavailable backend behavior.

## Homepage Composition

The homepage is a single centered experience:

1. NOFARI logo text.
2. `Built to Think.` tagline.
3. Reusable NOFARI avatar.
4. Greeting.
5. Large conversation input.
6. Two premium upload buttons.

No sidebar, feature lists, pricing, fake dashboards, marketing cards, or demo statistics belong on
the Sprint 002 homepage. The conversation is the product.
