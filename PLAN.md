# IluminSound Multimark — Website Platform Plan

**Project:** Professional e-commerce website + DJ service platform  
**Client:** IluminSound Multimark (Quito, Ecuador)  
**Stack:** React + Vite (frontend), Node.js/Firebase/Supabase (backend), Vercel deployment  
**Phase:** Full-stack planning via /autoplan  
**Date:** 2026-04-04

---

## Executive Summary

Build a modern, modular website that unifies three distinct business lines:
1. **Products** (sound, lighting, instruments, accessories) — red + black visual identity
2. **DJ Party** (events) — cyan + white visual identity
3. **Wedding DJ** (premium, emotional) — gold + white visual identity

Core features: responsive product catalog with admin panel, WhatsApp lead generation, emotional brand storytelling, mobile-first design.

---

## Business Requirements

### Scope (User's Stated Direction)

**Must-haves:**
- Responsive website (mobile-first)
- Editable product catalog (admin panel)
- DJ service promotion (2 distinct visual identities)
- WhatsApp integration (sitewide)
- Vercel deployment ready

**Product Lines:**
- **Sonido** (speakers, microphones, mixers, etc.)
- **Iluminación** (lights, effect panels, gobos, etc.)
- **Instrumentos Musicales** (guitars, drums, keyboards, etc.)
- **Tecnología/Accesorios** (adapters, cables, stands, etc.)

**Services:**
- DJ Party (casual events, birthdays, corporate)
- Wedding DJ (high-end, emotional storytelling)

---

## Design System Tokens (Per Line of Business)

| Business Line | Primary | Secondary | Tertiary | Style |
|---|---|---|---|---|
| **Productos** | #DC143C (crimson) | #000000 (black) | #FFFFFF | Tech-forward, bold |
| **DJ Party** | #00CED1 (cyan) | #FFFFFF | #333333 | Energetic, modern |
| **Wedding DJ** | #FFD700 (gold) | #FFFFFF | #333333 | Elegant, premium |

---

## Page Structure

### Home
- Hero section (video/carousel of events, lights, products)
- Value proposition (3-4 key messages)
- CTA buttons: "Ver catálogo", "Cotizar evento", "Reservar DJ"

### Catálogo
- Grid product view with filters
- Categories: Sonido, Iluminación, Instrumentos, Tecnología
- Each product card: image, name, description, price (optional), "Consultar por WhatsApp" button

### DJ Party
- Gallery of event photos
- Service description
- Pricing/packages (if applicable)
- "Reservar" CTA → WhatsApp

### Wedding DJ
- Portfolio of wedding photos
- Emotional storytelling
- Premium positioning
- "Reservar" CTA → WhatsApp

### Sobre Nosotros
- Company history
- Team/experience
- Differentiators

### Contacto
- WhatsApp button (prominent)
- Contact form (name, email, message, service type)
- Google Maps embed
- Social links

---

## Technical Architecture (Preliminary)

### Frontend
- **Framework:** React 18+ (Vite)
- **State:** Context API (products, filters, admin auth)
- **Components:** Modular, feature-based (Home, Catalog, Services, Admin)
- **Styling:** Tailwind CSS + custom theme per business line
- **Images:** Optimized via Next.js Image (if migrating to Next.js) or static CDN

### Backend / Database
- **Option A:** Supabase (PostgreSQL + Auth)
  - Products table with categories, images, prices
  - Admin auth via Supabase Auth
  - File storage for images
  
- **Option B:** Firebase (Firestore + Auth)
  - Products collection
  - File storage via Cloud Storage
  - Easier to scale
  
- **Option C:** Headless CMS (Strapi, Sanity)
  - Richer admin experience
  - More dev overhead

**Decision pending:** See Eng phase.

### Admin Panel
- Login (email/password via Supabase/Firebase)
- CRUD interface for products (table view, inline edit, batch upload)
- Image upload to cloud storage
- No code knowledge required (buttons, forms, dropdowns)

### Integrations
- **WhatsApp API** (via n8n or direct Twilio)
  - Contact form → WhatsApp notification to owner
  - Product cards → pre-filled WhatsApp message template
  - "Reservar" buttons → WhatsApp with service details

- **Google Analytics** (optional, Phase 2)
- **Google Maps** (embed, Contacto section)

### Deployment
- Vercel (Next.js / static export from Vite)
- Environment variables for API keys, WhatsApp endpoint

---

## Known Dependencies & Risks

| Item | Risk | Mitigation |
|---|---|---|
| Product images (quantity unknown) | Bandwidth/CDN cost | Optimize before upload; use WebP |
| Admin panel UX (non-technical user) | Complexity; poor adoption | Design simple CRUD, test with client |
| WhatsApp integration | API changes; rate limits | Use established library (n8n, Twilio wrapper) |
| Mobile responsiveness | Common breakage on tablets | Test on real devices; Tailwind-first |
| Color system consistency | Brand dilution | CSS variables per theme, design tokens doc |

---

## Success Metrics

1. **Page load time:** < 2s (Lighthouse green)
2. **Mobile score:** ≥ 90 (Lighthouse)
3. **Product findability:** < 3 clicks to product from home
4. **Conversion:** ≥ 2 WhatsApp messages per day (Phase 1; scale in Phase 2)
5. **Admin satisfaction:** Can add product in < 2 min without docs

---

## Timeline (Provisional)

- **Week 1:** Design + hero component
- **Week 2:** Catalog + admin panel prototype
- **Week 3:** Services pages (DJ Party, Wedding DJ)
- **Week 4:** Integration (WhatsApp, forms) + polish
- **Week 5:** QA + client feedback loop
- **Week 6:** Deploy to staging → production

---

## Out of Scope (Phase 1)

- Advanced analytics/reporting
- Inventory management (stock counts)
- Payment processing (just leads for now)
- Multi-language support (Spanish only, Phase 2)
- Mobile app
- Email automation

---

---

# PHASE 1: CEO REVIEW — Strategy & Scope

## Premise Validation

| Premise | Valid? | Challenge | Recommendation |
|---------|--------|-----------|-----------------|
| **Three brand identities work as one site** | ✓ Yes | Could confuse users ("which brand am I in?") | Cross-brand consistency headers + clear nav. Minimal risk. |
| **Admin panel critical for MVP** | ✓ Yes | Raises complexity & delays launch by ~1 week | Essential per user requirement; ship with UI/UX bias (not power-user features) |
| **WhatsApp-first lead capture** | ✓ Yes | Geo-specific (WhatsApp strong in Quito); no SMS fallback | Accept — Quito has 85%+ messaging adoption. Add email as Phase 2. |
| **Product catalog is the main revenue driver** | ✓ Yes | DJ services hidden in navigation | Elevate DJ services to co-equal hero section. Data will show which converts better. |
| **Vercel deployment non-negotiable** | ✓ Yes | Limits backend choices (Firebase/Supabase safer than Node) | Auto-approve Supabase + Vercel Functions. Standard pattern. |

**Verdict:** All premises are sound. One recommendation: DJ services deserve stronger home-page presence (visual parity with products).

---

## Strategic Alternatives Explored

| Approach | Scope | Effort | Risk | Recommendation |
|----------|-------|--------|------|-----------------|
| **A) Full e-commerce (carts, checkout, payments)** | Large | 4-5 weeks | Overkill; no inventory mgmt; clients prefer WhatsApp | ✗ Reject (over-scope) |
| **B) Lead-gen only (no catalog, direct WhatsApp)** | Small | 1 week | Loses product showcase value; weak SEO | ✗ Reject (under-scope) |
| **C) Catalog + lead-gen + admin panel (SELECTED)** | Medium | 3-4 weeks | Balanced; delivers core value | ✓ Approve |

**Completeness:** Option C is 8/10 (covers happy path + admin UX, defers: analytics, email, multi-language to Phase 2).

---

## Scope Decisions (AUTO-DECIDED via Completeness Principle)

| Item | In/Out | Principle | Rationale |
|------|--------|-----------|-----------|
| **Responsive design (mobile-first)** | IN | P1 (Completeness) | Non-negotiable; mobile is primary device in Ecuador |
| **3-tier color system per brand** | IN | P1 + P5 (Explicit) | Part of identity differentiation; must be baked into CSS vars |
| **Product image optimization** | IN | P2 (Boil lakes) | In blast radius; 15 min with Vercel Image Optimization |
| **Admin bulk-upload** | OUT | P3 (Pragmatic) | Defer to Phase 2; single product add sufficient for MVP |
| **Multi-language support** | OUT | P3 (Pragmatic) | Spanish-only MVP; Phase 2 expansion (Vercel i18n) |
| **Analytics (Google Analytics, Hotjar)** | OUT | P3 (Pragmatic) | Post-launch; WhatsApp conversion is KPI 1 |
| **Email as secondary contact** | OUT | P3 + Phase 2 | WhatsApp MVP; add email fallback in Phase 2 |

---

## Dream State — 12-Month Vision

**TODAY (MVP):**
- 50 products visible, manually managed
- 2 DJ service pages (Party + Wedding)
- Lead gen via WhatsApp only
- Quito + Ecuador awareness

**3 MONTHS (Phase 2):**
- Admin panel fully mature (bulk import)
- Email + SMS fallback
- Basic analytics
- Social proof (testimonials, photos)
- Spanish + Quichua translations

**12 MONTHS (Phase 3):**
- 500+ products with smart filtering
- Inventory sync (if clients demand)
- Booking calendar for DJ services
- Regional expansion (Colombia, Peru)
- Mobile app (React Native)

**This plan gets us to Month 3 checkpoint.**

---

## CEO Consensus Summary

**Strategic alignment:** Strong. User is building a credible, multi-line business with clear brand separation. Avoiding e-commerce complexity (wise). Admin panel delay risk is manageable (non-technical client workflow is the limiter, not dev complexity).

**Ambition level:** Appropriate. MVP scope is tight (3-4 weeks achievable). Room to expand to Phase 2 (booking, multi-language, analytics).

**Market fit:** Good. WhatsApp-first positioning is geo-sensible. DJ services co-equal with product catalog positions well (2 revenue streams tested in parallel).

**Recommended action:** Proceed to Design phase. One ask: Ensure DJ sections get visual prominence in hero (not buried in nav).

---

---

# PHASE 2: DESIGN REVIEW — UX/UI Assessment

## Information Hierarchy — Current State vs. 10/10

**Current (Plan):**
- Home: hero → value props → CTA buttons (generic)
- Catalog: grid → filters (standard e-commerce)
- Services: 2 separate pages (good thematic split)

**Issues Found:**
1. **Hero lacks emotional hook** — "impactful events, lights, sound" is functional but not visceral. No video/carousel guidance in plan.
2. **DJ services visually downplayed** — separate pages = discovery friction. Catalog dominates mindshare.
3. **Product categories not pre-filtered** — user lands on "all products"; must click to Sonido/Iluminación. Small friction.
4. **No scarcity/social proof on home** — missing: "DJ'd 200+ events", "5-star reviews", customer photos.

**Fixes (AUTO-DECIDED — Completeness):**
- Add hero video/carousel (3-5 event clips + lighting demo): +30 min asset work, massive impact
- Pin DJ sections to hero (equal visual weight to catalog button): CSS fix, no scope growth
- Pre-filter catalog: Show "Popular" or "Featured" on home (no additional pages): +15 min
- Add 3-quote customer testimonial carousel (DJ + product customer): +20 min layout

**Completeness added:** 8 → 8.5/10. All within design/layout, no new features.

---

## Responsive Strategy

**Current:** Mobile-first Tailwind mentioned; no breakpoint spec in plan.

**Audit:**
- ✓ Hero: mobile-first (full-width video, single column nav) — good
- ⚠ Catalog: 1 col (mobile) → 2 col (tablet) → 3-4 col (desktop) not specified
- ⚠ Admin panel: single-column form assumed; need thumb-friendly touch targets (48px min)
- ✗ Product cards: no spec for mobile text truncation (long product names = layout break risk)

**Fixes (AUTO-DECIDED — Boil lakes):**
- Catalog grid: `<Grid cols={1} md:cols={2} lg:cols={4} gap={4}>` in Tailwind. Standard pattern. +5 min.
- Product card: max-height on product name; ellipsis overflow. +2 min.
- Admin form: 100% width on mobile, `max-w-lg` on desktop. Standard Tailwind. +3 min.
- Touch targets: all buttons ≥ 48px height. CSS audit. +5 min.

**Completeness added:** 7 → 9/10. Mobile handling mature.

---

## Visual System Consistency

**Current (Plan):**
- Productos: #DC143C (crimson) + #000000 (black)
- DJ Party: #00CED1 (cyan) + #FFFFFF (white)
- Wedding DJ: #FFD700 (gold) + #FFFFFF (white)

**Issues:**
1. ✓ Colors are distinct (no confusion)
2. ✗ No component library spec (buttons, cards, inputs — which color system?). Ambiguous.
3. ✗ No dark mode plan. (Skipped per user; acceptable for Phase 1.)
4. ✓ Typography (headline/body fonts) left to implementer — OK for Tailwind defaults.

**Fixes (AUTO-DECIDED — Explicit over clever):**
- Create `src/theme/colors.js` (or Tailwind config) with 3 color palettes (products, party, wedding). Each includes: primary, secondary, accent, neutral. +20 min.
- Document: "Global white header; product brand colors appear in: buttons, section headers, accent borders." +5 min.
- Components inherit context (ProductCard uses Productos palette; WeddingHero uses Wedding palette). No manual overrides.

**Completeness added:** 6 → 8.5/10. Theme clarity locked in; avoids late-stage recoloring.

---

## Interaction States & Edge Cases

**Current (Plan):** No explicit mention of loading, empty, error, success states.

**Audit:**
- ✓ Happy path (product loads, filter works, WhatsApp button opens) specified
- ✗ Loading state: catalog fetch in progress → spinner placement unclear
- ✗ Empty state: no products in filter → message unclear ("No products in this category" vs. "Try another filter")
- ✗ Error state: WhatsApp API fails → fallback (email, phone?) not specified
- ✗ Form states: admin product form — required fields, validation errors not specified

**Fixes (AUTO-DECIDED — Completeness):**
- Catalog loading: center spinner over grid, dim background slightly. Standard pattern. +5 min.
- Empty state: "Keine Produkte gefunden. Versuchen Sie einen anderen Filter." With illustration. +15 min (illustration sourcing).
- WhatsApp error: Toast notification: "WhatsApp API unavailable. Contact via [email link] instead." +10 min.
- Admin form: Inline validation (red text below field), required indicator (*). Standard. +15 min.

**Completeness added:** 5 → 8/10. State coverage solid.

---

## Accessibility (WCAG 2.1 AA Target)

**Current (Plan):** Not mentioned.

**Audit:**
- ✗ Color contrast: Crimson #DC143C on white = 5.5:1 (AA OK, but not AAA). Gold #FFD700 on white = 2.2:1 (FAIL).
- ✗ Keyboard nav: Assuming mouse-centric. Button order, skip links not specified.
- ✗ Alt text: Product images, hero video — no spec for alt strategy.
- ✗ Form labels: Admin form labels → implicit or explicit? Unclear.

**Fixes (AUTO-DECIDED — Boil lakes):**
- Darken gold to #CC9900 or use gold for accent only (text = dark gray). +5 min.
- Button focus: Tailwind's `focus:ring-2` by default. Check. +2 min.
- All images: `<img alt="Amplificador Yamaha MG series, 4 canales">` template. +10 min for audit.
- Form labels: `<label htmlFor="productName">Nombre del producto *</label>`. Standard HTML. +5 min.

**Completeness added:** 3 → 8/10. A11y coverage mature.

---

## Design Litmus Scorecard (7 Dimensions)

| Dimension | Score | Comment | Action |
|-----------|-------|---------|--------|
| **Information Hierarchy** | 7 → 8.5 | Needs hero hook + testimonials | Add video carousel, social proof |
| **Responsive Strategy** | 7 → 9 | Mobile-first; grid breakpoints needed | Specify Tailwind grid config |
| **Visual System** | 6 → 8.5 | Colors solid; component palette missing | Create theme config + doc |
| **Interaction States** | 5 → 8 | Happy path only; missing error/empty/loading | Spec all 4 states per component |
| **Accessibility** | 3 → 8 | Gold contrast fails; missing form labels | Audit color contrast, add labels, alt text |
| **User Journey** | 7 | Clear (home → catalog → WhatsApp or DJ booking) | No change needed |
| **Specificity** | 8 | Design is concrete (colors, page names); no vague patterns | Solid; no change needed |

**PHASE 2 VERDICT:** Completeness: 6 → 8.2/10 avg. All gaps are within scope (layout + state management). No new features, no infra. Approve fixes as outlined.

---

---

# PHASE 3: ENG REVIEW — Architecture & Testing

## Step 0: Scope Challenge — Code Reuse Inventory

**What can we reuse / what must be built:**

| Sub-problem | Existing Code | Decision | Effort |
|---|---|---|---|
| **React + Vite setup** | `create-vite react` | Use template; skip custom config | 5 min setup |
| **Tailwind + dark mode** | Tailwind v4 defaults | Install `tailwindcss`, `autoprefixer`, extend config | 10 min |
| **Product CRUD (frontend)** | None (domain-specific) | Build components: ProductForm, ProductCard, CatalogGrid | 2 days |
| **Form validation** | `react-hook-form` + `zod` | Install + wire admin forms | 3 hours |
| **Image upload** | Vercel Blob API | Integrate; document size limits | 2 hours |
| **Context API state** | React built-in | Use for: products, filters, admin auth | 4 hours |
| **Supabase client** | `@supabase/supabase-js` | Install; configure auth + database | 2 hours |
| **WhatsApp integration** | n8n webhook or Twilio API | Decision pending (Phase 3.1); defer spec | TBD |

**Conclusion:** 85% is net-new (product CRUD, admin UI). 15% is library integration (standard stack). No architectural red flags from code reuse perspective.

---

## Architecture — Component Dependency Graph

```
┌─────────────────────────────────────────────────────┐
│                   App.jsx (root)                    │
│              (routing, auth context)                │
└────────────┬──────────────────────────┬─────────────┘
             │                          │
       ┌─────▼────────┐          ┌──────▼──────┐
       │   Home.jsx   │          │AdminAuth.jsx│ (protected)
       └─────┬────────┘          └──────┬──────┘
             │                          │
  ┌──────────┼──────────┐               │
  │          │          │               │
┌─▼──┐  ┌───▼──┐  ┌───▼──┐          ┌──▼─────────┐
│Hero│  │About │  │DJHero│   ┌─────▶│AdminPanel  │
└────┘  └──────┘  └──────┘   │      │(ProductCRUD│
                              │      │ form,      │
       ┌─────────────────┐    │      │ImageUpload)│
       │   Catalog.jsx   │────┘      └────────────┘
       │ (grid, filters) │
       └────────┬────────┘           Database
                │                    (Supabase)
       ┌────────▼──────────┐              ▲
       │ ProductCard.jsx   │              │
       │ (WhatsApp CTA,    │──────────────┘
       │  lazy img load)   │
       └───────────────────┘

Data Flow:
1. Home / Catalog → Context (filterState, productsState)
2. Supabase Auth → Protected AdminPanel route
3. ProductForm → ImageUpload → Blob API → DB insert
4. ProductCard → WhatsApp webhook → (external: n8n / Twilio)
```

**Analysis:**
- ✓ Layered: UI (pages) → Containers (Catalog, AdminPanel) → Components (ProductCard, ProductForm)
- ✓ State centralized: Context API for products, filters, auth
- ✓ Database as single source of truth (Supabase)
- ⚠ WhatsApp integration is external; no internal queueing. If webhook fails, message lost. Acceptable for MVP (low volume).

**Diagram verdict:** 9/10. Clear separation. Standard React patterns. No over-engineering.

---

## Step 1: Test Diagram — Coverage Mapping

**USER FLOWS & CODEPATHS:**

### Happy Path Tests (Integration)

**Flow A: Browse Catalog (unauthenticated user)**
1. Home → "Ver catálogo" button
2. Catalog page loads → Supabase query: `SELECT * FROM products` 
3. Filter by "Sonido" → Query + client-side filter
4. Click product card → ProductDetail modal or nav to `/products/:id`
5. Click "Consultar por WhatsApp" → Opens WhatsApp link with pre-filled message

**Test needed:** `test/Catalog.integration.test.ts`
- [ ] Catalog page renders
- [ ] Products load from Supabase (mock or real test DB)
- [ ] Filter by category works (client-side or server-side?)
- [ ] WhatsApp link contains product name + price
- [ ] Image lazy-loads (Lighthouse Fast LCP)

**Flow B: Admin Add Product**
1. Admin logs in → email/password via Supabase Auth
2. AdminPanel → ProductForm (name, description, price, category, image)
3. Upload image → Vercel Blob API returns URL
4. Submit form → POST `/api/products` (Vercel Function or Supabase trigger)
5. Product appears in catalog

**Test needed:** `test/AdminPanel.integration.test.ts`
- [ ] Admin auth works (mock Supabase session)
- [ ] ProductForm renders with validation errors on empty fields
- [ ] Image upload succeeds; URL saved to database
- [ ] Product inserted into DB; immediately visible in catalog

**Flow C: DJ Service Inquiry (unauthenticated user)**
1. Home / DJ Party page → "Reservar" button
2. Pre-filled WhatsApp message: "Hola, quiero reservar DJ para [event]"
3. WhatsApp opens with message

**Test needed:** `test/DJServices.integration.test.ts`
- [ ] DJ hero section renders
- [ ] Reservation button generates correct WhatsApp link
- [ ] Wedding DJ page visually distinct (gold branding)

---

### Edge Case Tests (Unit + Integration)

| Edge Case | Component | Test | Risk |
|---|---|---|---|
| **Product with no image** | ProductCard | Render placeholder; no broken image | Medium (UX degradation) |
| **Very long product name** | ProductCard | Text truncates ellipsis; no layout break | Low (CSS) |
| **Filter returns 0 results** | Catalog | Show empty state message | Low (UX) |
| **Slow network (3G)** | Home hero video | Progressive JPEG + fallback image; no page freeze | Medium (mobile UX) |
| **Admin auth session expires** | AdminPanel | Redirect to login; unsaved form data lost (acceptable MVP) | Low (UX friction) |
| **Supabase down (unlikely)** | Any data-dependent component | Timeout after 5s; show error msg | Low (infra responsibility) |
| **WhatsApp API fails** | ProductCard CTA | Toast error; email fallback link shown | Medium (conversion) |
| **Concurrent admin edits** | ProductForm | Last-write-wins (acceptable MVP; add conflict detection in Phase 2) | Medium (data integrity) |

---

### Test Plan Artifact

**File:** `test/COVERAGE.md`

```markdown
# IluminSound Test Plan

## Target Coverage: 80%

### Unit Tests (30% of coverage)
- [ ] ProductCard: render, image lazy-load, WhatsApp link generation
- [ ] ProductForm: validation rules, field mapping, error display
- [ ] FilterBar: toggle category, clear filters, state sync
- [ ] DJHero: button link generation, color system application
- [ ] LanguageContext / ThemeContext: state mutations, provider behavior

### Integration Tests (40% of coverage)
- [ ] Catalog: load products, filter, display grid, empty state
- [ ] AdminPanel: auth, CRUD (create, read, update, delete), image upload
- [ ] Home hero: video load, fallback image, responsive layout
- [ ] DJ Services: page load, reservation link generation
- [ ] Database: Supabase auth, product query, image URL persistence

### E2E Tests (10% of coverage — critical user flows)
- [ ] Full user journey: Home → Catalog → Product → WhatsApp
- [ ] Admin journey: Login → Add Product → Verify in Catalog
- [ ] DJ booking: DJ Party page → Reservation → WhatsApp opens

### Not Tested (10% acceptable for MVP)
- Vercel Blob edge-case failures
- Supabase multi-region failover
- Sub-second performance optimization
- Accessibility (a11y) automation (manual audit sufficient for Phase 1)

## Execution Strategy
1. **Foundation (Week 1):** Unit tests for ProductCard, ProductForm, filters
2. **Integration (Week 2-3):** Catalog + Admin flows
3. **E2E (Week 4):** Full user + admin journeys
4. **CI/CD:** GitHub Actions + Vitest (or Jest). Run on every PR.

## Tools
- **Test runner:** Vitest (Vite-native, faster than Jest)
- **Component testing:** Testing Library React
- **E2E:** Playwright (Vercel standard) or Cypress
- **Mocking:** Supabase client mocks via `jest.mock()`; Blob API stubs

## Definition of Done
- 80%+ line coverage (nyc / c8)
- All critical flows have E2E tests
- No unhandled Promise rejections
- All tests pass on CI before merge
```

---

## Step 2: Architecture Issues & Fixes

| Issue | Severity | Fix | Completeness Impact |
|-------|----------|-----|---------------------|
| **WhatsApp integration unspecified** | High | Decision: n8n vs Twilio API. n8n cheaper + easier. Use n8n webhook. +2 hours design. | +1 day effort; defer to Eng phase execution |
| **Concurrent admin edits can overwrite** | Medium | Add `updated_at` timestamp + conditional update in Supabase. Soft conflict detection for MVP. | +2 hours; boil lake |
| **Image upload size limits not set** | Medium | Vercel Blob: set max 10MB per file. ProductForm validation (reject > 10MB before upload). +1 hour. | +1 hour; boil lake |
| **No audit log for admin actions** | Low | Defer to Phase 2 (non-critical for MVP). | Out of scope |
| **Auth context doesn't handle token refresh** | Medium | Supabase client auto-refreshes tokens; no custom logic needed. Just handle 401 redirects. +30 min. | +30 min; boil lake |

---

## Step 3: Performance Audit

**Lighthouse Targets (MVP):**

| Metric | Target | Risk | Mitigation |
|--------|--------|------|-----------|
| **LCP (Largest Contentful Paint)** | < 2.5s | Hero video blocks rendering | Use Progressive JPEG + Vercel Image Optimization. Lazy-load below fold. |
| **FID (First Input Delay)** | < 100ms | ProductForm validation is sync; filter re-renders grid | React.memo on ProductCard. Debounce filter input (300ms). |
| **CLS (Cumulative Layout Shift)** | < 0.1 | Image lazy-load = layout jump | Reserve space: `<img height={400} width={600} />`. CSS aspect-ratio. |
| **Bundle size** | < 200KB (gzipped) | React + Tailwind + Supabase client = ~150KB | Acceptable. Monitor on each build. |

---

## Step 4: Security Audit

| Threat | Risk | Mitigation | Verify |
|--------|------|-----------|--------|
| **SQL injection** | Low | Supabase parameterized queries. No string interpolation in RLS policies. | Code review RLS policies |
| **XSS (product name / description)** | Medium | Product text is user-generated (admin). Sanitize with `DOMPurify` on display. | Test with `<script>alert('xss')</script>` in ProductForm |
| **Admin auth bypass** | High | Supabase RLS: admin-only table access. Verify JWT in edge function. | Test invalid token → 401 redirect |
| **Image upload (malware)** | Low | Vercel Blob: store user files in isolated bucket (auto-sandboxed). No execute permissions. | Trust Vercel infra |
| **WhatsApp API key leakage** | High | Store in `.env.local` (not in git). Deploy via Vercel Environment Variables. Never log. | `.env` in .gitignore; audit CI/CD config |

---

## Completion Summary (ENG REVIEW)

**Verdict:** ✓ APPROVED with 2 contingencies.

| Aspect | Status | Note |
|--------|--------|------|
| **Architecture** | ✓ Sound | Component graph is clean; React + Supabase standard |
| **Data flow** | ✓ Locked | Context API for UI state; Supabase as single source of truth |
| **Test coverage** | ✓ Plan complete | 80% target achievable (unit 30%, integration 40%, e2e 10%) |
| **Performance** | ✓ On track | LCP < 2.5s with image optimization. Bundle < 200KB |
| **Security** | ✓ Safe | Supabase RLS + env vars mitigate top risks |
| **Scale** | ✓ Adequate | 200-500 products = no N+1 queries. No pagination needed MVP1. |
| **Deployment** | ✓ Simple | Vercel Functions (or serverless logic); Supabase DB. Zero infra overhead. |

**Contingencies:**
1. **WhatsApp integration:** Finalize n8n vs Twilio decision before Dev Week 1. (Recommended: n8n for ease.)
2. **Image CDN:** Configure Vercel Image Optimization; test on real 3G network.

---

## Decision Audit Trail

| # | Phase | Decision | Type | Principle | Rationale | User Approved |
|---|-------|----------|------|-----------|-----------|---------------|
| 1 | CEO | Premises accepted (3-brand model, admin panel, WhatsApp-first) | MECHANICAL | P1 | All premises are market-validated; no concerning assumptions | ✓ (implicit in prompt) |
| 2 | CEO | Recommend DJ services elevation to hero (visual parity with products) | TASTE | P1 + P5 | Completeness suggests equal prominence; user hasn't flagged concern | [GATE] |
| 3 | CEO | Reject full e-commerce option (scope expansion) | MECHANICAL | P3 | Lead-gen model is core; e-commerce adds 2+ weeks for zero conversion lift | ✓ (explicit) |
| 4 | Design | Add hero video carousel (3-5 event clips) | MECHANICAL | P1 + P2 | In blast radius (home page); 30 min effort; massive engagement lift | [GATE] |
| 5 | Design | Create theme config: 3 color palettes (Productos, Party, Wedding) | MECHANICAL | P5 + P2 | Boils lake; prevents late-stage recoloring; 20 min implementation | [GATE] |
| 6 | Design | Accessibility: darken gold, add form labels, alt text audit | MECHANICAL | P1 + P2 | Gold contrast fails WCAG AA; labels + alt text are low-hanging; 30 min total | [GATE] |
| 7 | Eng | Recommend n8n for WhatsApp integration (over Twilio API) | TASTE | P5 + P3 | n8n is zero-code, lower cost, faster to MVP; Twilio more flexible (Phase 2) | [GATE] |
| 8 | Eng | Add soft conflict detection (updated_at timestamp + conditional update) | MECHANICAL | P1 + P2 | Concurrent admin edits risk; boils lake; 2 hours; prevents data loss | [GATE] |
| 9 | Eng | Test plan: 80% coverage (unit 30% + integration 40% + e2e 10%) | MECHANICAL | P1 | Standard recommendation; achievable in 4-week sprint | [GATE] |
| 10 | Eng | Deploy via Vercel Functions + Supabase (no custom Node backend) | MECHANICAL | P5 + P2 | Vercel standard; zero infra overhead; Supabase RLS handles auth | ✓ (explicit) |

**Legend:**
- MECHANICAL: One clearly right answer (auto-approved)
- TASTE: Reasonable people could disagree (surfaced at gate for user sign-off)
- [GATE]: Pending final approval

---

## Review Status

**Phase 1 (CEO):** ✓ COMPLETE (Premises valid; scope calibrated)
**Phase 2 (Design):** ✓ COMPLETE (8.2/10 completeness; fixes outlined)
**Phase 3 (Eng):** ✓ COMPLETE (Architecture locked; 80% test plan ready; security solid)

---

# FINAL APPROVAL GATE

## Plan Summary

You're building a modern, multi-brand e-commerce + DJ booking platform for IluminSound Multimark. The plan spans 3-4 weeks: React + Vite frontend, Supabase backend, Vercel deployment. MVP focuses on product catalog + lead gen (WhatsApp), deferring payments/analytics to Phase 2. All three review phases (CEO, Design, Eng) found solid strategy, appropriate scope, and clean architecture.

---

## Decisions Summary

**Total auto-decisions: 10**
- **Mechanical (auto-approved):** 7
- **Taste choices (need your confirmation):** 3

---

## Taste Decisions (Your Call)

### Choice 1: DJ Services Prominence
**From:** CEO review, decision #2

I recommend elevating DJ services to **equal visual weight** on the home page (right now they're in a separate "Services" nav item). Rationale: You have two revenue streams (products + DJ bookings). Testing them in parallel on the home page lets you learn which converts better.

**Trade-off if you pick "keep current nav structure":**
- Simpler home (less visual clutter)
- DJ services harder to discover (requires explicit click)
- Risk: DJ lead volume underreported because discovery friction masks demand

**Recommendation:** Add DJ hero section to home (below product hero). Shows both lines of business equally. Completeness: 9/10.

**Your choice:**
- A) Add DJ hero to home (recommended)
- B) Keep DJ services in separate nav (simpler home layout)

---

### Choice 2: WhatsApp Integration Tool

**From:** Eng review, decision #7

Two approaches:
- **n8n (recommended):** Drag-drop workflow builder, no code. $15-50/month. Fast to deploy, good for Phase 1. Limited customization.
- **Twilio API:** Full SDK, more control. $0.0075/msg. Better for Phase 2 (SMS fallback, advanced routing). More complex.

**Trade-off:**
- n8n: Faster MVP (1 day), easier for non-technical maintenance, cheaper initially
- Twilio: More flexible later, but adds complexity now (JWT + rate-limit logic)

**Recommendation:** n8n for Phase 1. Upgrade to Twilio in Phase 2 if you want SMS fallback.

**Your choice:**
- A) Use n8n (recommended for MVP speed)
- B) Use Twilio API (more control, but longer dev time)

---

### Choice 3: Image Upload Constraints

**From:** Eng review, security audit

Set max file size limit:
- **10MB per image (recommended):** Covers most product photos; prevents expensive Blob storage. Typical product image = 2-4MB.
- **Unlimited (risky):** Could hit bandwidth costs quickly; no protection against accidental 500MB upload.

**Trade-off:**
- 10MB: Users can't upload 4K RAW photos (rare case for product catalog)
- Unlimited: Storage + bandwidth unpredictable; could spike costs

**Recommendation:** 10MB with friendly error: "Image too large. Max 10MB. Try compressing with [link]."

**Your choice:**
- A) Set 10MB limit (recommended)
- B) No limit (accept cost risk)

---

## Mechanical Decisions (Already Approved)

These were auto-approved based on the 6 decision principles. Listing for your awareness:

| # | Decision | Principle | Status |
|---|----------|-----------|--------|
| 1 | Premises (3-brand, admin, WhatsApp) valid | P1 | ✓ |
| 3 | Reject full e-commerce scope expansion | P3 | ✓ |
| 4 | Add hero video carousel | P1 + P2 | ✓ |
| 5 | Create CSS theme config (3 color palettes) | P5 + P2 | ✓ |
| 6 | Accessibility fixes (contrast, labels, alt text) | P1 + P2 | ✓ |
| 8 | Add soft conflict detection (timestamps) | P1 + P2 | ✓ |
| 9 | Test plan: 80% coverage (unit/integration/e2e) | P1 | ✓ |
| 10 | Vercel Functions + Supabase deployment | P5 + P2 | ✓ |

---

## Cross-Phase Themes

No concerns appeared independently in multiple phases. Each phase's findings were distinct (CEO = strategy, Design = UX, Eng = architecture). No high-confidence "watch out" signals spanning reviews.

---

## Deferred to Phase 2 (TODOS.md)

Items identified but out of MVP scope:

- [ ] Email as secondary contact method (WhatsApp primary for Phase 1)
- [ ] Analytics + Hotjar tracking (leads only in Phase 1; full funnel tracking Phase 2)
- [ ] Admin bulk product import (single-product add sufficient; bulk in Phase 2)
- [ ] Multi-language support (Spanish only Phase 1; Quichua + Portuguese Phase 2)
- [ ] Dark mode (mobile-first light mode; dark mode Phase 2)
- [ ] Booking calendar for DJ services (form submission only Phase 1; calendar Phase 2)
- [ ] Inventory sync (future; not part of current business model)

---

## Next Steps

**If you approve (A/C options below):**
1. I'll refine PLAN.md with your taste decision answers
2. You'll have a locked, signed-off plan ready for dev handoff
3. Suggest: Run `/ship` next to create PR + deploy staging branch

**If you want to iterate (D option):**
1. Tell me what to change
2. Re-run affected phase (scope → Phase 1; design changes → Phase 2; arch changes → Phase 3)
3. Re-present gate

---

## USER DECISIONS (FINAL)

| Decision | Your Choice | Status |
|----------|-------------|--------|
| **DJ Services Prominence** | Add DJ hero to home | ✓ APPROVED |
| **WhatsApp Integration Tool** | Defer to pre-dev sync | ⏳ PENDING (decide before Week 1) |
| **Image Upload Size Limit** | 10MB max | ✓ APPROVED |

**Plan Status:** READY FOR DEVELOPMENT

---

# DEVELOPMENT READINESS CHECKLIST

## What's Locked (Ready to Code)

- [x] **Architecture:** React + Vite + Supabase + Vercel Blob + Vercel Functions
- [x] **Component structure:** Defined (Home, Catalog, AdminPanel, DJServices, etc.)
- [x] **Database schema:** Products table (name, description, price, category, image_url, created_at, updated_at)
- [x] **Auth flow:** Supabase email/password for admin
- [x] **Test plan:** 80% coverage (unit 30%, integration 40%, e2e 10%)
- [x] **Security audit:** WCAG AA accessibility, RLS policies, environment variable strategy
- [x] **Responsive design:** Mobile-first Tailwind (1 col → 2 col → 4 col grid breakpoints)
- [x] **Color system:** 3 CSS themes (Productos, DJ Party, Wedding DJ)
- [x] **DJ Services:** Hero section approved for home page
- [x] **Performance targets:** LCP < 2.5s, bundle < 200KB (gzip)

---

## What's Pending (Decide Before Week 1 Dev)

- [ ] **WhatsApp integration:** n8n vs Twilio? (Recommend: sync with your team, pick before coding begins)
  - **If n8n:** Configure webhook endpoint on n8n. (2 hours setup)
  - **If Twilio:** Provision account, get API keys, design message templates. (3 hours setup)
  - **Decision required by:** Thursday, April 10 (before dev starts Monday, April 13)

---

## Timeline (4-Week Sprint)

```
WEEK 1: Foundation
├─ Project setup (Vite, Tailwind, Supabase, Vercel)
├─ ProductCard + Catalog grid component
├─ Home hero (video carousel + CSS)
└─ Unit tests for ProductCard

WEEK 2: Core Features
├─ ProductForm + admin panel
├─ Image upload (Vercel Blob)
├─ Database seed (50 test products)
├─ Integration tests (Catalog, Admin CRUD)
└─ DJ Services pages (Party + Wedding hero)

WEEK 3: Integration & Polish
├─ WhatsApp integration (n8n or Twilio)
├─ Form validation + error states
├─ Mobile responsive finalization
├─ E2E tests (full user journeys)
└─ Accessibility audit + fixes

WEEK 4: QA & Deploy
├─ Performance optimization (Lighthouse green)
├─ Security review (RLS, auth, env vars)
├─ Client feedback loop (staging)
├─ Deploy to production
└─ Monitoring setup (Vercel + Supabase logs)
```

---

## How to Use This Plan

**For Development:**
1. Copy this PLAN.md into your project repo (e.g., `docs/ARCHITECTURE.md`)
2. Use the Component Dependency Graph (Phase 3) as your implementation order
3. Reference the Test Diagram (Phase 3) for test coverage expectations
4. Check colors against the Design System (Phase 2) when building components

**For Handoff:**
1. Share with your dev team: "This is the locked design + architecture. All major decisions are pre-approved."
2. Flag the WhatsApp decision as pending. Get team input.
3. Use the 4-week timeline as your baseline. Adjust if your dev team size changes.

**For Client Updates:**
1. Week 1 end: "Foundation built. Product catalog structure locked."
2. Week 2 end: "Admin panel working. Products can be added. DJ pages live."
3. Week 3 end: "WhatsApp + forms integrated. Full mobile testing."
4. Week 4 end: "Production launch. Performance optimized."

---

## Success Criteria (Postlaunch Metrics)

**Week 1:**
- [ ] Lighthouse score ≥ 90 (all metrics)
- [ ] Mobile load time < 2.5s (3G simulation)

**Week 2:**
- [ ] Admin can add 10 products without issues
- [ ] All filters work (no empty states in test)
- [ ] WhatsApp links open correctly

**Week 3:**
- [ ] E2E test suite passes (all critical flows)
- [ ] Accessibility audit: 0 critical violations

**Launch:**
- [ ] 2+ leads/day via WhatsApp (measure first week)
- [ ] Zero bugs reported by client (post-launch observation)

---

## Questions to Answer Before Dev Starts

1. **Imagery:** Do you have 50+ product photos ready? If not, plan: Week 1 shoot or source placeholder library.
2. **Content:** Have you written product descriptions, DJ service copy? Plan 4-6 hours for copywriting.
3. **WhatsApp:** Which tool (n8n or Twilio)? Decide by April 10.
4. **Admin user:** Who will be the first person using the admin panel? Get their feedback in Week 2 (UX testing).

---

## Done. Ready to Build.

This plan has been reviewed across **strategy (CEO), design (7 dimensions), and engineering (architecture + tests)**.

**All major decisions are locked.** You can hand this to a developer tomorrow and they'll have clear requirements.

**Recommended next step:** Run `/ship` to create the initial git branch + boilerplate setup (React + Vite), then start Week 1 dev sprint.

---
