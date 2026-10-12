# Brown's Book Club — DSB reading hall

Buildless, responsive ES-module application at `/books/`, deployed by the existing GitHub Pages workflow. Uses the requested Tailwind browser CDN; all essential layout/typography is also provided by the authored CSS so the hall remains usable if the CDN fails. No hosting or API subscription was added.

## Content

- `canon.json`: exactly 100 distinct ranked books. The index order and rank must remain 1–100. Category filtering/search preserve rank. The founding order is an editorial reading argument, not a survey or objective world ranking.
- `discoveries.json`: independent/rising and selected recent books. Independent and recent shelves are separate from the fixed canon. Refresh independent selections annually and recent picks periodically through editorial changes, not an unverified automated ranking.
- `opening-essay.json`: Wayne Williams's introductory editorial with linked historical evidence. Does not invent autobiographical incidents. Restrictions on literacy differed by place and time; dignity is not determined by reading ability.
- `deep-notes.json`: expanded, original critical essays for the first five selections. Other entries have structured thematic reading guides. This is not a set of 100 completed 2,000-word reports; those can be deepened editorially. No book text or comprehensive scene-by-scene substitute is reproduced.
- `sample-data.js`: five canon entries and three independent entries show the schema in JavaScript-array form.

72 covers/catalog records were matched on original year from a 100-title Open Library lookup. Inconsistent catalog dates were rejected rather than adopted (some imported dates were manifestly impossible). Missing covers use original DSB shelf artwork. Original-publication dates and translated/later editions are distinct. Fences uses the verified 1986 book date rather than its 1985 first-production date. All selected authors are Black; draft nonqualifying candidates were removed before publication. DSB order, criticism and reflection prompts are original editorial judgments, not externally validated scores.

## Interactions

Live search in the active shelf; category menu; short reading compass; native dialog preview; full linked guide; keyboard-accessible tabs; text sizing; Focus; reading-progress line; in-page outline; previous/next canon guide; context/source links; private Want to Read/Reading/Finished, favorites, notes and ratings; JSON export; printable notes; one comprehension question in the opening essay and reflective lens activities in book guides.

A disabled reading-journal promotional card is inserted at the first paragraph boundary after one-third of a guide's commentary. No purchase/download is presented as active. The original document structure is ready for the later reader/comfort bar: guide renders dispatch `dsb:reading-page` with `detail.root` and `detail.bookId`.

Local state is `dsb-book-club-v1`. No visible account signup. The app labels notes, stars and responses as private/on-device. No public counters, visitors, testimonials or reviews are fabricated. Removing a book & notes removes its local record; export is provided before visitors clear storage or change devices.

## Future moderated community API

`review-api.js` is disabled and unconfigured. It is an explicit frontend bridge for a separately hosted service, including a future Supabase Edge Function. It does not claim a DSB project or database is connected. No secrets or database keys are shipped.

Expected HTTPS contract:
- GET `?book_id=<id>` → approved review/aggregate response.
- POST `{book_id,rating,nickname,comment,reaction}` → moderation receipt, not immediate publication.

Before enabling, implement server-side validation, spam/rate limits, moderation, appropriate database access controls and aggregate-only public exposure. Do not expose service-role keys or enable unrestricted writes from this public page. The browser limits are convenience checks, not security. Shared reactions also need a server-side implementation; local responses must not be represented as global counts. Until then the indie form saves private drafts and reviews only.

New & Noteworthy has an optional user-triggered recent catalog lookup for three named, already selected Black authors. It fetches limited bibliographic fields, uses a session cache and spaces requests. It does not infer race, claim completeness, replace editorial reviews or modify the DSB 100. Network/CORS/service failures leave the static shelf intact.

## Verification

Passed module/classic/inline syntax checks; executable DOM tests for all 100 initial ranks, active-tab search, category filtering, full guide, modal, disabled journal card, private shelf/notes/reactions, indie rating review validation, recent tab, opening essay question; model tests for all 106 guide placements and accent-insensitive search. Browser visual QA was unavailable because the permitted browser-control skill was unavailable; actual phone appearance, external cover availability and live catalog CORS have not been claimed as visually verified.
