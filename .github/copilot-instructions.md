# Copilot / AI Agent Instructions — Elan Noir mono-repo

Quick, focused guidance to help an AI coding agent become productive immediately in this repository.

Project overview
- Mono-repo with two main apps: `backend/` (Express + TypeScript + Prisma) and `elannoir-react/` (React + Vite + TypeScript).
- Runtime: Node.js (v24+ verified in workspace). Backend uses Prisma (Postgres), JWT auth, and server runs on `PORT` (default 3000). Frontend uses `VITE_API_URL` to target backend.

Where to start
- Backend entry: `backend/src/server.ts` (health check, middleware, route registration). Register new routes here with `app.use('/api/xxx', route)`.
- Auth routes: `backend/src/routes/auth.routes.ts` and middleware `backend/src/middleware/auth.middleware.ts` (JWT verify/optionalAuth). JWT secret lives in `backend/.env` as `JWT_SECRET`.
- DB schema + seed: `backend/prisma/schema.prisma` and `backend/prisma/seed.ts`. Seed creates 3 products and a test user `teste@elannoir.com` / password `123456`.

Key files and patterns (search these first)
- API client (frontend): `elannoir-react/src/services/api.ts` — axios instance, `authAPI` and `productsAPI`, request/response interceptors and `VITE_API_URL` usage.
- Auth context (frontend): `elannoir-react/src/context/AuthContext.tsx` — reads `localStorage.token`, calls `authAPI.getMe()` on load, stores `user` in `localStorage`.
- Product pages: `elannoir-react/src/pages/Home.tsx` and `elannoir-react/src/pages/Product.tsx` — now use `productsAPI.getAll()` and `productsAPI.getById()`.
- Data model: `backend/prisma/schema.prisma` — canonical source for product/order models and fields. Use `slug` for public product id.

Build / dev / DB commands (exact)
- Backend
  - install: `cd backend && npm install`
  - generate prisma client: `npm run prisma:generate`
  - apply migrations (dev): `npm run prisma:migrate`
  - seed test data: `npm run prisma:seed`
  - build: `npm run build` (runs `tsc`)
  - dev server: there is no `dev` script in `backend/package.json` by default; run `node dist/server.js` after build or add a dev script (e.g., `tsx watch src/server.ts`).
- Frontend
  - install: `cd elannoir-react && npm install`
  - dev: `npm run dev` (Vite)
  - build: `npm run build` (runs `tsc && vite build`)

Auth & tokens
- Backend issues: code recently had TypeScript overload friction with `jsonwebtoken@^9`; code was patched to cast `(jwt as any).sign(...)` in `auth.routes.ts` — be aware of JWT v9 type differences.
- Frontend persistence: token stored in `localStorage` under key `token`. Axios request interceptor adds `Authorization: Bearer <token>`.
- Typical endpoints: `POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`.

Products and IDs
- DB `Product` uses `id` (UUID) and `slug` (unique). Routes created here expose products by `slug` and map `id` -> `uuid`/`id` fields. Frontend expects `product.id` to be slug-friendly; see `backend/src/routes/product.routes.ts` for mapping.

Where to add new features
- Orders: add `backend/src/routes/order.routes.ts` and protect with `authenticate` from `backend/src/middleware/auth.middleware.ts`.
- Register new route in `backend/src/server.ts` after import.
- Frontend: extend `elannoir-react/src/services/api.ts` with `ordersAPI` (follow existing `authAPI` pattern). Integrate into `CartContext`/checkout pages.

Project conventions & gotchas
- Typescript strict mode is enabled in `backend/tsconfig.json` — prefer explicit types and avoid ambient any unless necessary.
- Prisma models are the source of truth; keep migrations via `prisma migrate dev` in development.
- Environment variables: backend reads from `backend/.env` (DATABASE_URL, JWT_SECRET, JWT_EXPIRES_IN, FRONTEND_URL, PORT). Frontend uses Vite env `VITE_API_URL` in `elannoir-react/.env`.
- Seed user: use `teste@elannoir.com` / `123456` for quick auth testing after `npm run prisma:seed`.

Examples (copy/paste)
- Fetch products from frontend (already implemented):
  - `const data = await productsAPI.getAll();`
- Add protected route on backend:
  - `import { authenticate } from './middleware/auth.middleware';`
  - `router.post('/create', authenticate, async (req, res) => { ... })`

Editing guidance for AI agents
- Focus edits to minimal, well-scoped patches. Preserve `prisma/schema.prisma` changes via proper migrations.
- When adding new API routes, add tests or manual verification steps: run `npm run build` (backend) and `npm run build` (frontend) to catch TypeScript errors.
- If using `jsonwebtoken` signature helpers, prefer keeping runtime code compatible with v9 — casting `(jwt as any)` is an accepted minimal workaround for compile issues, but consider updating types if making larger auth changes.

Files to inspect during onboarding
- `backend/src/server.ts`, `backend/src/routes/auth.routes.ts`, `backend/src/middleware/auth.middleware.ts`, `backend/prisma/schema.prisma`, `backend/prisma/seed.ts`
- `elannoir-react/src/services/api.ts`, `elannoir-react/src/context/AuthContext.tsx`, `elannoir-react/src/pages/Home.tsx`, `elannoir-react/src/pages/Product.tsx`, `elannoir-react/src/context/CartContext.tsx`

If anything above is unclear or you want more detail (e.g., exact payload shapes for orders, how the cart maps to `OrderItem`), tell me which area to expand and I will update this file.
