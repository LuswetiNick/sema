# Sema

A pnpm workspace with a Next.js App Router application, TypeScript, Tailwind CSS, and ESLint.

## Development

Requires Node.js 20.9+ and pnpm 12.9.1.

```sh
pnpm install
pnpm dev
```

Open http://localhost:3000 for the marketing home page or http://localhost:3000/dashboard for the dashboard.

## Structure

```text
apps/web/                 Next.js application (@sema/web)
  src/app/page.tsx        Marketing home page
  src/app/dashboard/     Dashboard route
packages/                Optional shared workspace packages
```

## Commands

- `pnpm dev` — start the development server
- `pnpm build` — create a production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint
- `pnpm typecheck` — generate route types and check TypeScript
