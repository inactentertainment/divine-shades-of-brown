# Navigation and Journal repair — 12 October 2026

## Root cause and corrections
- Four category renderers referenced `labels[x]` even though the label map was scoped to Shop. The Essentials startup call raised a ReferenceError and aborted the main inline script before Journal, modal, route and other initialization. Restore the category's own text in Select, Essentials, Utility and Atlas sector filters; retain Shop's intended descriptive label map.
- Journal full-page headings used the browser's URL `escape()` function, showing percent-encoded spaces. Use the existing HTML escape helper (`lbEsc`) for metadata.
- The Read card now links visibly to Library and DSB Journal. All four room cards contain real destination links; Music/Jukebox action opens the actual player. The old Open Music link only scrolled Home; it now opens the jukebox.
- Generated action cards are semantic anchors, with keyboard activation; rename the remaining Brown's Book Club action card to DSB Library.
- Remove duplicate article-history pushes from navigation capture. Add supported Library hash alias, normalize legacy entry hashes, and provide an unavailable-article fallback to Journal.
- Correct welcome-page Resource Vault and LifeBook links to canonical routes.
- Replace confirmed 404 source paths: NMAAHC Explore → Stories; HUD old housing-counseling path → national housing counseling agencies; El Reno Hilton hotel code `okcerht` → `okcelht`. All replacements returned HTTP 200.
- Therapy for Black Men returned HTTP 402 repeatedly through both direct requests and web retrieval. Replace its promoted Find Help entry with Black Mental Health Alliance's explicit therapist-referral page, keeping its accurate name/description. Preserve crisis contacts and other resources.

## Verification
- All scripts execute in their real document order using a DOM harness with browser API stubs: no initialization errors.
- All 29 Journal entries open as full article views, exact readable title retained, one comfort bar per article, cleanup on exit. Actual Read Article → All articles click path passed.
- 18 content destinations open; LifeBook/calendar open their intended personal interface. Twenty-eight category buttons exercised. Fifteen homepage room-card links plus a functioning jukebox button.
- Direct article startup and legacy Resource Vault startup passed. Supported homepage hash destinations and relative paths checked across home, entertainment, both Library URLs and both welcome pages.
- 330 static links/assets inventoried; all 44 distinct internal HTTP page/asset URLs returned 200.
- 104 unique runtime external links requested: 92 returned 200 initially; three confirmed 404s replaced and tested 200. Bank source independently retrieved successfully after a direct check returned 502. Other external 403/server/time-out results are recorded as limited verification, not falsely labelled broken or passed.
- Existing book catalog, parent plans, movie/media collections, membership prices/checkout URLs and local reader data preserved.

## Limits
This is script/DOM/link QA, not rendered desktop/mobile browser QA. Browser preview unavailable under the supported environment; no screenshots or visual-layout pass claimed. Third-party services can block automated access or be temporarily unavailable; live external availability cannot be guaranteed.

## Regression check
`qa/navigation-links.cjs` loads the actual homepage and local scripts, asserts initialization, all Journal entries, routes, category interactions, return navigation and a single reading bar. Install linkedom 0.18.12 in a temporary test directory and use its node_modules as NODE_PATH; pass the repository checkout path as the first script argument. Set DSB_TEST_HASH to test direct entry hashes.
