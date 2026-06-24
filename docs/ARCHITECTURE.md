# NOFARI Architecture

NOFARI is organized around stable root-level boundaries. Sprint 001 creates the boundaries without
introducing product features.

## Root Folders

- `app` - Next.js App Router entrypoints, layouts, pages, and route-level styles.
- `components` - Shared React UI components, including the reusable `components/ui` design system.
- `core` - Shared Intelligence Pipeline types, orchestration, identifiers, and exports.
- `brain` - High-level facade for sending requests through the Intelligence Pipeline.
- `intent` - Intent detection interface and default provider-neutral detector.
- `planner` - Execution planning interface and default orchestration plan builder.
- `reasoning` - Reasoning engine interface for future provider-backed execution.
- `verification` - Verification interface for validating execution results before response shaping.
- `memory-manager` - Memory update preparation interface for future persistence and retrieval flows.
- `response` - Structured response payload builder.
- `router` - Resource routing for memory, knowledge, tools, documents, and images.
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

## Intelligence Pipeline

Sprint 003 establishes the permanent provider-neutral Intelligence Pipeline. All future request
flows should pass through this orchestration layer before any AI provider, future NOFARI model,
memory system, tool runtime, document handler, image handler, or response surface is attached.

The canonical pipeline is `IntelligencePipeline` in `core/intelligence-pipeline.ts`. It executes the
following stages:

1. Detect intent through the `intent` module.
2. Build an execution plan through the `planner` module.
3. Determine required resources through the `router` module:
   - memory
   - knowledge
   - tools
   - documents
   - images
4. Execute through the `reasoning` module.
5. Verify execution through the `verification` module.
6. Build a structured response through the `response` module.
7. Prepare memory updates through the `memory-manager` module.

Each stage is defined by a TypeScript interface and a default implementation. The defaults perform
architecture-safe orchestration only: they do not call AI models, produce mock answers, implement
chat, perform uploads, authenticate users, persist data, or retrieve memory.

Shared contracts live in `core/types.ts`:

- `Intent`
- `ExecutionPlan`
- `PipelineContext`
- `VerificationResult`
- `ResponsePayload`
- `MemoryUpdate`

The `brain` module exposes `NofariBrain` and `createNofariBrain` as a high-level facade over the
pipeline. Product surfaces should depend on the facade or pipeline contracts rather than concrete
stage implementations. Future providers replace individual modules by implementing the relevant
interface and injecting that implementation into `IntelligencePipeline`.

## Current Scope

Sprint 001 established the architecture shell. Sprint 002 added UI-only identity primitives in
`components/ui`. Sprint 003 adds the Intelligence Pipeline orchestration layer. Backend behavior,
persistence, uploads, authentication, AI providers, chat execution, and model integrations remain
future work.
