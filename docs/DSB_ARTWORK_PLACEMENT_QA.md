# Approved artwork placement — 13 October 2026

All four original approved artwork files are now used in their intended live destinations. No regenerated artwork or replacement images.

- Library: existing assets/artwork/dsb-library-wordmark.webp heading retained, with its carved-book lettering and bookmark.
- Essentials: assets/artwork/dsb-essentials-painting.webp below the heading/intro, before search and filters. The same section moves intact into #/essentials.
- Journal: assets/artwork/dsb-next-chapter-painting.webp below the #/journal hero, before its search/filter controls; also placed in the homepage Journal section.
- Black Atlas: assets/artwork/dsb-atlas-companion-painting.webp below the #/atlas hero, above the interactive map; also placed in the homepage Atlas section. The companion painting does not replace or change the map's interactive geography.

Delivery uses the existing WebP assets. Full composition retained through width:100%, height:auto and object-fit:contain; intrinsic dimensions reserve image space. Meaningful alt text, lazy loading and asynchronous decoding. All titles and navigation remain HTML. No picture text overlays, new animation, paid service or autoplay.

Checks: JavaScript parses; static HTML contains exactly one matching image per homepage section. Actual navigation-controller DOM checks verify Journal image before filter tools, one Atlas image after the heading with the original map moved into the route, and the Essentials image retained when the section moves. Three repeated visits restore original homepage nodes and retain controls. All four image URLs return HTTP 200. Library wordmark references verified in unchanged module.

Limit: rendered desktop/mobile browser QA is unavailable in this environment. Responsive CSS and DOM/model checks do not establish a visual screenshot pass.
