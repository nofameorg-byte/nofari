# NOFARI Foundation

This document records the permanent foundation created during Sprint 001. It is the baseline for
future product, intelligence, memory, and infrastructure work.

## Foundation Goals

- Establish a production-grade Next.js application using TypeScript and Tailwind CSS.
- Configure a PostgreSQL-ready data layer with Prisma.
- Create stable folder boundaries for application, domain, data, storage, and shared utilities.
- Document early architectural decisions before feature work begins.
- Avoid demo features, fake analytics, mock AI flows, or throwaway placeholder product surfaces.

## Technology Baseline

- **Application framework:** Next.js 16 with the App Router.
- **Language:** TypeScript with strict compiler settings.
- **Styling:** Tailwind CSS 4 through the official PostCSS plugin.
- **Database ORM:** Prisma 7 configured for PostgreSQL.
- **Formatting and linting:** Prettier and ESLint with Next.js TypeScript presets.

## Project Readiness Standard

Future sprints should keep the foundation clean by adding code only where it has a clear ownership
boundary, accompanying documentation, and verification through linting, type checking, and build
commands.
