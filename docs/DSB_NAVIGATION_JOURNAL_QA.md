# DSB navigation and journal build — October 11, 2026

## Delivered
- Fifteen menu destinations, with small, normal-weight descriptions and hash markers.
- A full-width square bronze Membership button with the existing signature shine.
- Separate routes for business discovery, articles, history, resources, shopping, membership, saved discoveries, and the personal LifeBook/calendar.
- Existing sections are temporarily moved into destination views and restored on close; event listeners and user data stay attached to the original elements.
- Fixed a menu-close handler that could reset an open destination to the homepage.
- Removed the delayed Atlas/Pulse rendering race that prevented Atlas search listeners from attaching.
- Twenty new original educational essays, preserving the nine existing articles. Added search, category, title order, saved-only filtering, article deep links, and saved-story links in My DSB.
- Short verified Black-diaspora passages, highlighted attribution, author/date citations, real online locators, and reference links. No invented page numbers. The topic selection is editorial, not a measured ranking.
- Motto: **Build the change. Practice excellence. Care for each other.** Editorial standards live in `EDITORIAL_VOICE.md`.
- Visitor-selected human-emoji shade; neutral symbols stay neutral. The preference remains in this browser and is never inferred from identity.
- The supplied beige-backed circular DSB mark is used for favicon and touch icons. Existing header logo placement and homepage circle remain.
- Dark article windows, directory panels, and image-backed surfaces retain cream text in light page mode. Article Lights On uses dark text on its light reading surface.
- Homepage journal cards use normal document flow for Read controls to avoid overlap.

## Verification
| Check | Result | Scope |
|---|---|---|
| All 15 menu links | Pass | Fourteen internal destinations and the entertainment page opened live |
| Atlas search | Pass | Mahogany query returned its two matching bookstore cards |
| Route close | Pass | Restores moved sections without missing homepage content |
| Article search | Pass | “excellent service” returned one matching article |
| Saved-only filter | Pass | The saved article appeared in the filtered list |
| My DSB saved article | Pass | Saved story became a working article link |
| Calendar route and refresh | Pass | Calendar reopened directly after refresh |
| Calendar saving | Pass | A QA-browser event survived reload; entries remain device-local |
| Article route and lights | Pass | Deep link opens the article; headings use cream in dark window and brown in Lights On |
| Browser back | Pass | Returned from Journal to the prior entertainment page |
| Homepage spacing | Pass | Adjacent section boundaries meet; all sections visible; no clipped journal cards at tested widths |
| Responsive layout | Pass | 360 and 390 px phone layouts and 768 px tablet layout in same-origin iframe viewports; no horizontal body overflow or clipped article paragraphs |
| JavaScript/HTML checks | Pass | Inline and external scripts parse; 20 unique new article IDs; references present; unique HTML IDs; linked local assets exist |
| GitHub Pages | Pass | App build deployment completed successfully |

## Limits and remaining work
- These are responsive browser viewports, not physical-phone or tablet hardware tests.
- This pass verified destinations and the named interactions. It is not a claim that every external listing, checkout, download, speech engine, or media stream has been retested.
- Saved collections, Black Receipt, emoji preferences, and LifeBook/calendar use existing browser storage. No Supabase connection, secure membership entitlement, Stripe webhook, or cloud synchronization was added or verified by this build.
- No paid infrastructure was activated and no charge was made.

## Files
`index.html`, `entertainment.html`, `assets/dsb-navigation.js`, `assets/dsb-navigation.css`, `assets/dsb-journal-data.js`, `docs/EDITORIAL_VOICE.md`, `docs/DSB_NAVIGATION_JOURNAL_QA.md`, `favicon.ico`, `site.webmanifest`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`, `assets/dsb-icon-192.png`, `assets/dsb-icon-512.png`, `qa/viewport.html`.
