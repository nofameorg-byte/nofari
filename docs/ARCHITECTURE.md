# NOFARI Architecture

NOFARI is organized around stable root-level boundaries. Sprint 001 creates the boundaries without
introducing product features.

## Root Folders

- `app` - Next.js App Router entrypoints, layouts, pages, and route-level styles.
- `components` - Shared React UI components once reusable interface elements are introduced.
- `core` - Platform-level domain rules, application services, and cross-cutting orchestration.
- `engines` - Intelligence engines and processing pipelines once their contracts are defined.
- `memory` - Memory abstractions and retrieval workflows planned for future sprints.
- `knowledge` - Knowledge ingestion, normalization, and representation boundaries.
- `database` - Prisma schema, migrations, and database-adjacent assets.
- `storage` - File/object storage adapters and policies.
- `lib` - Small shared infrastructure helpers that do not belong to a domain boundary.
- `public` - Static public assets.
- `docs` - Permanent project documentation.
- `scripts` - Operational and developer automation scripts.
- `types` - Shared TypeScript type declarations.

## Dependency Direction

Feature code should flow inward toward stable domain contracts. UI surfaces in `app` and
`components` can depend on `core` services. Domain logic should not depend on route-level rendering
or framework-specific UI details. Database and storage access should remain behind explicit helpers
or services rather than spreading persistence code across the application.

## Current Scope

Sprint 001 establishes the architecture shell. Sprint 002 can begin adding domain contracts and
implementation details inside these boundaries.
