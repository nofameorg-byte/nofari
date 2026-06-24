# NOFARI Design

This document captures the initial design posture for NOFARI. It is not a component inventory and
does not define product screens yet.

## Principles

- **Clarity before density:** Interfaces should explain what a user can trust, inspect, and act on.
- **Evidence-first workflows:** Future intelligence experiences should make sources, state, and
  reasoning boundaries explicit.
- **Calm operational surfaces:** Visual treatment should support analysis and review rather than
  distracting from critical information.
- **Accessible by default:** Color, contrast, keyboard navigation, and semantic structure are
  baseline requirements.
- **No fake confidence:** Avoid placeholder charts, simulated metrics, or mock intelligence outputs
  that could be mistaken for real platform behavior.

## Visual Baseline

Sprint 001 uses a restrained dark foundation with Tailwind CSS. Future design work should introduce
tokens, components, and interaction patterns only when real product requirements exist.

## Design System Direction

When reusable UI begins, place shared primitives in `components` and document usage constraints here.
Route-specific composition should remain in `app`.
