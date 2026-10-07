# Sema

Sema is a website-support SaaS for Kenyan businesses. A business adds an embeddable chat widget to its website, uploads support documents, and gives visitors grounded AI answers or a clear path to a human support agent.

The MVP is designed around KES pricing, M-Pesa payments, English and Kiswahili support, and a lightweight mobile-friendly widget.

## Product scope

- **Live website chat:** anonymous visitor sessions, a shared team inbox, assignments, internal notes, and human handoff.
- **Document-grounded AI:** PDF, DOCX, TXT, and Markdown ingestion; workspace-isolated retrieval; source references for staff; no unsupported claims or autonomous account actions.
- **Business administration:** knowledge, widget branding and approved domains, support hours, team access, usage, billing, and basic reporting.
- **Paid access:** a 14-day trial followed by prepaid monthly M-Pesa plans, with clear usage limits and manual renewal.

Sema deliberately excludes email ticketing, WhatsApp/SMS/social channels, native mobile apps, OCR, web crawling, and AI actions involving orders, refunds, bookings, or payments from v1.

## Repository status

This repository currently provides the web foundation: a marketing page, a starter dashboard route, and shadcn/ui. The complete product architecture and the planned workspace layout are documented targets, not claims that every service has been implemented.

## Technology direction

The selected baseline includes Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, oRPC, Drizzle with Neon PostgreSQL/pgvector, Neon Auth and Functions, PartyServer on Cloudflare, Neon AI Gateway, IntaSend for M-Pesa, and Resend for transactional email.

See [the technical architecture](docs/sema-tech-stack.md) for system boundaries, security requirements, service responsibilities, and implementation stages.

## Development

Requires Node.js 20.9+ and pnpm 12.9.1.

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the marketing site or [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the dashboard starter.

## Workspace structure

```text
apps/
  web/                         Next.js application (`@sema/web`)
    src/app/page.tsx           Marketing home page
    src/app/dashboard/page.tsx Dashboard route
    src/components/ui/         shadcn/ui components
    src/lib/                   Shared web utilities
docs/
  sema-idea.md                 Product concept and initial assumptions
  sema-prd.md                  MVP requirements and acceptance criteria
  sema-tech-stack.md           Selected technical architecture
packages/                      Reserved for shared workspace packages
```

## Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the web development server. |
| `pnpm build` | Create a production build. |
| `pnpm start` | Serve the production build. |
| `pnpm lint` | Run ESLint across workspace packages. |
| `pnpm typecheck` | Generate Next.js route types and run TypeScript checks. |

## Documentation

- [Product idea](docs/sema-idea.md) — target customers, core proposition, pricing assumptions, and v1 boundaries.
- [Product requirements document](docs/sema-prd.md) — user journeys, lifecycle rules, measurable pilot outcomes, requirements, and release gates.
- [Technical stack and architecture](docs/sema-tech-stack.md) — selected technologies, data boundaries, RLS strategy, real-time design, AI pipeline, and delivery plan.

Product behavior is defined by the PRD. The technical stack document defines the selected implementation baseline; provider capabilities, pricing, and package compatibility must be revalidated before production use.
