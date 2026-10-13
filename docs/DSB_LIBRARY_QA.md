# DSB Library build — 12 October 2026

## Checked
- 100 sequential ranks per collection; 400 distinct essential titles; six adult discovery entries remain separate.
- 960 profile combinations (5 age bands × 4 methods × 6 comfort choices × 8 interests): every result contains 100 unique books, excludes teen shelf below 13, and survives snapshot/restore with the exact answers and order.
- Full-app DOM integration: three entrance doors, adult 100, age/grade flow, independently reading + nearby-age + science path, read-aloud question skip and Back, 24-card pagination, child preview/full guide, correct collection rank, parent questions/activity, Amazon action, plan save/restore and persistent subject filter, global Library search, archive grid, MLK twenty-file list and source new-tab behavior.
- Reading-bar lifecycle mount confirmed on child guide and archival briefing; ordinary Library routes unmount it. Existing reader implementation unchanged.
- Actual jsPDF output: eight pages, 13,731 bytes for tested plan; text extraction confirms entries 1–100, recorded answers and page footers. Local vendor is loaded only on PDF request; no remote paid API.
- JavaScript parses; JSON data validates. Source links use HTTPS. Rendering uses escaping for imported/metadata text. Portable imports require exactly 100 unique current book IDs and version 1; file size capped at 300 KB.

## Limits
- Browser rendering/visual desktop/mobile QA unavailable in this environment; no screenshot or tested visual-layout claim. CSS provides responsive one-column choices/archives and inherited responsive book grids, reduced-motion behavior and existing footer-aware comfort bar.
- 135 new ISBNs verified. Open Library cover availability can vary; images fail gracefully to original DSB shelf artwork. No claim that all 400 have published cover images.
- Collection ranks and approximate age ranges are DSB editorial decisions, not universal rankings, Lexile/grade measurements or a diagnosis. Concise caregiver guides can be expanded after editorial review.
- Some Black-led nonfiction collaborations credit other coauthors/illustrators transparently. Book-specific authorship notes and original source URLs are retained.
- Amazon URLs are ordinary searches, not affiliate/product-edition links. No price, inventory or image scraped from Amazon. Seven pre-existing free editions remain linked.
- Records link to external primary-source sites explicitly in new tabs. The library does not replicate the full archives. Historical documents can include discriminatory language; archival briefings provide context and caution.
- Browser-local storage can be cleared or blocked; PDF/JSON downloads give readers a copy. No server-side identity, synced account or cross-reader counts.

## Research audit
See CHILDREN_EARLY_SOURCES.md, CHILDREN_MIDDLE_SOURCES.md and CHILDREN_TEEN_SOURCES.md. Archive metadata retains publisher, source URL, status and checked date in books/archive-records.json. General foundational literacy guidance: https://ies.ed.gov/ncee/WWC/PracticeGuide/21 .
