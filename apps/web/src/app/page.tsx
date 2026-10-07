import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6">
      <header className="flex items-center justify-between border-b border-neutral-200 py-6">
        <Link href="/" className="text-xl font-semibold">Sema</Link>
        <nav aria-label="Main navigation">
          <Link href="/dashboard" className="text-sm font-medium hover:underline">
            Dashboard →
          </Link>
        </nav>
      </header>
      <main className="flex flex-1 flex-col items-start justify-center py-24">
        <p className="mb-4 text-sm font-medium text-neutral-500">Welcome to Sema</p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Your work, brought together.
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
          A simpler place to stay organized, focus on what matters, and move
          your work forward.
        </p>
        <Link
          href="/dashboard"
          className="mt-8 rounded-lg bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Open dashboard
        </Link>
      </main>
      <footer className="border-t border-neutral-200 py-6 text-sm text-neutral-500">
        Sema. Keep things simple.
      </footer>
    </div>
  );
}
