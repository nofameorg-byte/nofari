# NOFARI Database

NOFARI uses PostgreSQL as the primary relational database and Prisma as the database toolkit.

## Current Configuration

- Prisma configuration lives in `prisma.config.ts`.
- The Prisma schema lives in `database/prisma/schema.prisma`.
- Migrations are expected under `database/prisma/migrations`.
- `DATABASE_URL` is required at runtime and is documented in `.env.example`.

## Modeling Policy

Sprint 001 does not define application models. Future models should be introduced through Prisma
migrations with clear ownership, indexes, constraints, and documentation for any non-obvious data
relationships.

## pgvector Planning

NOFARI is expected to need vector-aware storage for future memory and retrieval capabilities. Sprint
001 does not implement vector columns, embeddings, similarity search, or retrieval behavior.

When requirements are ready, pgvector should be introduced deliberately:

1. Add a migration that enables the PostgreSQL `vector` extension.
2. Define vector-backed models only after embedding dimensions and ownership are known.
3. Add indexes appropriate to the retrieval strategy.
4. Document operational implications such as extension availability, backup/restore expectations,
   and query performance testing.

## Operational Expectations

Database changes should be reviewed through generated migrations, validated against PostgreSQL, and
kept separate from unrelated product changes.
