import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Dashboard" };

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <nav
          aria-label="Dashboard navigation"
          className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6"
        >
          <Link href="/" className="text-xl font-semibold">Sema</Link>
          <Link href="/" className="text-sm text-neutral-600 hover:underline">
            Back to home
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
        <p className="mt-2 text-neutral-600">Welcome to your Sema workspace.</p>
        <section className="mt-8 rounded-xl border border-neutral-200 bg-white p-8">
          <h2 className="text-lg font-medium">A fresh start</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Your workspace is ready. This is where your projects and activity
            will live.
          </p>
        </section>
      </main>
    </div>
  );
}
