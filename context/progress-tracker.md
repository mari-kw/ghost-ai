# Progress Tracker

Update this file whenever the current phase, active feature, or implementation state changes.

## Current Phase

- Authentication — implemented; local sign-in page returns HTTP 200. Full browser sign-in/sign-out verification remains pending.

## Current Goal

- Implement `context/feature-specs/03-auth.md`: Clerk provider, token-themed auth pages, redirects, default route protection, and editor user menu.

## Completed

- 01 — Design system: configured shadcn/ui; installed Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea, and Lucide React.
- Added `lib/utils.ts` with the CLI-provided reusable `cn()` helper.
- Integrated the documented dark palette with application and shadcn theme tokens, Geist typography, and a permanent root dark class with `color-scheme: dark`.
- 02 — Editor chrome:
  - [x] Fixed-height navbar with left/center/right sections, state-dependent PanelLeftOpen/PanelLeftClose toggle, and empty right section.
  - [x] Floating sidebar that slides over the canvas, accepts `isOpen`, and includes Projects heading, close button, empty My Projects/Shared tabs, and full-width New Project button with Plus icon.
  - [x] Home-page editor shell with local sidebar state, accessible toggle labels, inert closed sidebar, reduced-motion support, and focus return when closed from the sidebar.
  - [x] Token-based dialog composition pattern documented in `ui-context.md`, supporting title, description, and footer actions. No actual dialogs created.
  - [x] TypeScript, ESLint, and production build passed.

## In Progress

- 03 — Authentication implementation is in place:
  - [x] Installed `@clerk/ui`; root `ClerkProvider` uses its `dark` theme and existing CSS tokens.
  - [x] Added minimal responsive sign-in/sign-up layouts with Clerk's built-in forms and nested flow routes.
  - [x] Root `proxy.ts` protects routes by default using the existing Clerk sign-in/sign-up URL variable names; only auth paths and framework assets are exempt.
  - [x] Added `/editor` with a server-side auth guard; `/` redirects authenticated users there and unauthenticated users to Clerk sign-in.
  - [x] Added the default `UserButton` to the editor navbar, preserving Clerk profile/logout flows.
  - [x] ESLint, build TypeScript validation, and 23 proxy protection/matcher assertions passed. Routing assertions used configured URL fixtures and a mocked Clerk guard, not a live authenticated session.
  - [x] Exact `npm run build` acceptance check passed. The build script now uses the supported `next build --webpack` option because Turbopack cannot bind its worker port in this environment, including on the approved retry. Building required approved network access for the existing Google fonts.
  - [x] Fixed missing auth URL configuration: provider and proxy share existing environment values with `/sign-in` and `/sign-up` defaults. No environment files or variable names were added. Local `/sign-in` returns HTTP 200; nine auth-path assertions pass.
  - [ ] Complete browser sign-in, sign-up, profile, and logout verification with a live Clerk session.

## Next Up

- Verify signed-in/sign-out browser flows with a live Clerk session.

## Open Questions

- None for configuration: missing auth URL values now use the implemented local auth paths, while existing environment values take precedence.

## Architecture Decisions

- Use the shadcn CLI default `base-nova` components with CSS-variable theming. Generated `components/ui/*` files remain unchanged; application styling belongs outside these files.
- `lib/utils.ts` re-exports the CLI-provided `cn` package helper, which supports conditional classes and Tailwind conflict resolution.
- Editor visibility state belongs to the client `EditorShell` at `/editor`; route components remain Server Components. The sidebar is an absolute overlay inside the workspace, so opening it does not resize the canvas.
- Auth routes use exact path or slash-delimited descendant comparisons instead of the installed Clerk SDK's deprecated `createRouteMatcher`. The editor also checks auth at the resource boundary.
- Production builds use Webpack via `npm run build`; development retains Next.js's default builder.
- `lib/auth-paths.ts` resolves and validates auth paths for both ClerkProvider and proxy, preventing missing optional URL settings from crashing local requests.
- New Project accepts an optional callback and is disabled until one is supplied by a future feature; project creation is outside spec 02.

## Session Notes

- 2026-10-02: Updated both auth pages to the supplied visual reference: equal desktop columns, solid token-based cyan tint on the left, top branding, headline and icon feature rows, bottom copyright, and centered Clerk form on the dark right panel. Mobile remains form-only. Applied the generated Geist Sans font directly to body and Clerk; retained Geist Mono for code. Updated UI guidelines and auth spec to reflect the requested design. ESLint, TypeScript, production build, and diff checks passed. Browser visual inspection was unavailable; no browser tool or browser automation package is installed.
- 2026-09-29: Re-read `03-auth.md` and audited the existing implementation. Preserved the built-in Clerk forms and user menu, token-based dark appearance, and responsive two-panel auth layout. Corrected stale environment status: Clerk keys are present; auth URL variables are missing. Build and route checks now pass; browser/session verification remains pending configuration.
- Auth specification is now populated; cleared the previous missing-spec blocker and began implementation.
- Auth verification used Clerk's current SDK types and the Next.js bundled documentation. No browser visual inspection or authenticated session test was performed. The temporary production server was stopped after the configuration failure.
- Marked this feature in progress before implementation. The starting `globals.css` contained only the Tailwind import, so the palette was restored from `ui-context.md`.
- Verification passed: ESLint, TypeScript, runtime imports for all seven components, `cn()` conditional/array/conflicting utility checks, and production HTML/CSS checks for dark defaults.
- Production build passed with `npm run build -- --webpack`. The default Turbopack build encountered an environment restriction on binding its worker port. No browser visual inspection was performed.
- SHA-256 checks confirmed all seven generated component files remained unchanged after installation.
- Spec 02 verification passed: `npm run lint`, `npx tsc --noEmit`, `npm run build -- --webpack`, and `git diff --check`. No browser visual or interaction inspection was performed; no browser tool or installed Playwright package was available. Generated `components/ui/*` files were not edited.
