# 🚀 Angular v20 Senior-Level Learning Plan

This repo tracks my journey from intermediate to **senior Angular developer**.  
The plan is structured into phases with **study topics, mini-projects, and resources**.  
I’ll work on this part-time (6–8 hrs/week) while working full-time.

---

## 🎯 Goal
Master **Angular v20** with focus on:
- Signals
- RxJS interop
- Dependency Injection
- Advanced Routing
- Performance & SSR
- Zoneless Change Detection
- Testing & Architecture

---

## 📅 Phases (with estimated hours)

---

### ✅ Phase 1 — Signals Mastery (Deep Dive)  
⏱ *9–12 hrs*

- [ ] `signal`, `computed`, `effect` (DI-bound effects, cleanup)  
- [ ] `toSignal`, `toObservable`, `fromSignal` (Signals ↔ RxJS interop)  
- [ ] `input()`, `model()`, `output()`  
- [ ] `linkedSignal` for writable derived state  
- [ ] Advanced: `untracked`, batching updates, avoiding feedback loops  
- [ ] Signals in forms, router, HTTP  
- [ ] Signals + `OnPush` change detection  

**Mini-Project: Live Crypto Tracker**  
- WebSocket/REST → `toSignal`  
- Derived stats with `computed`  
- `linkedSignal` for two-way “price range” filter  
- `effect` for side-effects (logging, dynamic title)  
- **API**: [CoinCap](https://docs.coincap.io/)  

---

### ✅ Phase 2 — Dependency Injection Mastery  
⏱ *7–10 hrs*

- [ ] Provider scopes (root, component, lazy route)  
- [ ] `inject()` function & `DestroyRef`  
- [ ] Tree-shakable providers  
- [ ] Multi-providers + custom tokens  
- [ ] Runtime config via DI tokens  
- [ ] Testing DI with provider overrides  

**Mini-Project: Notification System**  
- `NotificationService` with console + http providers  
- Configurable via custom `InjectionToken`  
- Different providers at app vs feature level  
- Unit tests with provider overrides  

---

### ✅ Phase 3 — RxJS + Signals Interop  
⏱ *12–16 hrs*

- [ ] When to use RxJS vs Signals  
- [ ] `toSignal`, `toObservable` bridging  
- [ ] Cleanup with `takeUntilDestroyed()`  
- [ ] Advanced RxJS operators (`switchMap`, `concatMap`, `exhaustMap`)  
- [ ] Caching + deduping requests with Signals  
- [ ] Retry/backoff patterns  

**Mini-Project: Movie Search App**  
- Input search with RxJS `debounceTime`  
- API call with `switchMap` → Signal  
- Cache results in Map Signal  
- Computed Signals for pagination  
- Error/loading signals  
- **API**: [OMDb](http://www.omdbapi.com/)  

---

### ✅ Phase 4 — Routing + App State  
⏱ *8–12 hrs*

- [ ] Standalone routing with `loadComponent()`  
- [ ] Route guards & resolvers (Signal-powered)  
- [ ] Lazy loading strategies  
- [ ] Global state with Signals  
- [ ] When (and when not) to use NgRx  

**Mini-Project: E-commerce Cart Flow**  
- Product list & details (lazy routes)  
- Global cart Signal (persisted in `localStorage`)  
- Guard: block checkout if cart empty  
- Resolver: prefetch product details  
- **API**: [Fake Store API](https://fakestoreapi.com/)  

---

### ✅ Phase 5 — Performance, SSR, Hydration & Zoneless  
⏱ *14–18 hrs*

- [ ] Change detection strategies (`OnPush` + Signals)  
- [ ] Angular Universal (SSR)  
- [ ] Hydration + partial hydration (Angular v17+)  
- [ ] Zoneless change detection (`provideZonelessChangeDetection`)  
- [ ] `@defer`, `@if`, `@for` control flow for performance  
- [ ] Bundle optimization  

**Mini-Project: SSR Blog (Hydrated + Zoneless)**  
- SSR-render posts  
- Hydrate on client with `provideClientHydration()`  
- Defer/hydrate comments on scroll  
- Zoneless bootstrap (no Zone.js)  
- Measure load/hydration times  
- **API**: [JSONPlaceholder](https://jsonplaceholder.typicode.com/)  

---

### ✅ Phase 6 — Testing, Tooling & Architecture  
⏱ *12–16 hrs*

- [ ] Testing Signals & components (Jest)  
- [ ] E2E testing with Cypress  
- [ ] Nx monorepo structure (libs, dep graph, affected)  
- [ ] Angular CDK (drag-drop, overlay, virtual scroll)  
- [ ] Optional: Micro-frontends with Module Federation  

**Mini-Project: Project Management MVP**  
- Tasks/columns with CDK drag-drop  
- State managed with Signals  
- Unit tests (store, components) + Cypress E2E  
- **API**: Local JSON or `json-server`  

---

## 🧩 Time Breakdown
- Phase 1 — 9–12 hrs  
- Phase 2 — 7–10 hrs  
- Phase 3 — 12–16 hrs  
- Phase 4 — 8–12 hrs  
- Phase 5 — 14–18 hrs  
- Phase 6 — 12–16 hrs  

**Total: 62–84 hrs** (≈ 10–12 weeks part-time at 6–8 hrs/week)  

---

## 📚 Recommended Study Materials (non-official docs)

**Signals / Reactivity**
- Netanel Basal blog (advanced Signals patterns)  
- Angular University – Signals vs RxJS  
- InDepth.dev – Signals deep dive  

**Dependency Injection**
- InDepth.dev – DI & provider patterns  
- Manfred Steyer articles  

**RxJS**
- [LearnRxJS.io](https://www.learnrxjs.io/)  
- [RxJS Marbles](https://rxmarbles.com/)  

**Routing & State**
- Manfred Steyer – routing & lazy loading  
- Articles on Signals for state management  

**SSR & Performance**
- InDepth.dev – Angular performance  
- Blogs on hydration & `@defer`  

**Testing & Architecture**
- [Nx.dev](https://nx.dev/) – monorepos, Jest, Cypress  
- Nrwl blog – scalable Angular  
- Guides on Angular micro-frontends  

---

## ✅ Notes for Senior-Level Mastery
- Prefer **Signals** for UI + app state, use **RxJS** for async/event streams.  
- Embrace **standalone APIs** (`input`, `model`, `output`).  
- Use **Zoneless change detection** from Phase 5 onward.  
- Always keep **strict mode + ESLint** enabled.  
- Build **reusable utilities** (`httpCacheStore`, `retryBackoff`, typed DI tokens).  

---

📌 *Progress is tracked via checkboxes above. Each mini-project will be stored in its own folder inside this repo.*
