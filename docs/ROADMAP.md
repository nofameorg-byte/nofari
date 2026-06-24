# NOFARI Roadmap

This roadmap starts from the Sprint 001 foundation. It is intentionally technical and avoids
committing to speculative product surfaces.

## Sprint 001: Genesis

- Create the permanent Next.js, TypeScript, Tailwind, Prisma, and documentation foundation.
- Establish root folder architecture and path aliases.
- Document pgvector as planned infrastructure without implementing vector features.

## Sprint 002: Identity

- Establish the permanent NOFARI dark luxury visual identity.
- Build reusable UI primitives in `components/ui`.
- Replace the foundation homepage with a single centered conversation-first experience.
- Keep the sprint UI-only with no backend behavior, mock AI, uploads, authentication, or persistence.

## Sprint 003: Product Contracts

Recommended next work:

- Define the first real product and domain contracts before adding backend implementation.
- Decide which Sprint 002 UI primitives become part of real user workflows.
- Introduce behavior only when it has a durable owner, verification strategy, and documentation.
- Keep authentication, data modeling, upload handling, and intelligence logic separated by boundary.

## Later Foundation Extensions

- Storage adapter contracts under `storage`.
- Knowledge ingestion boundaries under `knowledge`.
- Memory and retrieval architecture under `memory`.
- Intelligence engine contracts under `engines`.
- pgvector migrations after retrieval requirements are specified.
