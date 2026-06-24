export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
          NOFARI
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Intelligence platform foundation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Sprint 001 establishes the permanent technical base for NOFARI: a typed Next.js
          application, PostgreSQL-ready data layer, documented architecture, and scalable project
          boundaries.
        </p>
      </section>
    </main>
  );
}
