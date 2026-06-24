# NOFARI Roadmap

This roadmap starts from the Sprint 001 foundation. It is intentionally technical and avoids
committing to speculative product surfaces.

## Sprint 001: Genesis

- Create the permanent Next.js, TypeScript, Tailwind, Prisma, and documentation foundation.
- Establish root folder architecture and path aliases.
- Document pgvector as planned infrastructure without implementing vector features.

## Sprint 002: First Contracts

Recommended next work:

- Define the first domain contracts in `core` before adding UI or persistence behavior.
- Decide the initial authentication and authorization posture.
- Create the first real database models only after durable domain entities are agreed.
- Introduce reusable component primitives if a real interface workflow requires them.
- Add test strategy and CI commands once the first behavior-bearing code exists.

## Later Foundation Extensions

- Storage adapter contracts under `storage`.
- Knowledge ingestion boundaries under `knowledge`.
- Memory and retrieval architecture under `memory`.
- Intelligence engine contracts under `engines`.
- pgvector migrations after retrieval requirements are specified.
