# Painted Black Atlas — October 11, 2026

Replaced the Atlas SVG with the supplied painting, converted to WebP without redrawing or changing the composition. Added 78 approximate image-space city positions across the Americas, Europe, Africa, Asia and Oceania. Cities live in a reusable catalog. Eight labels appear at world view; additional tiers appear with zoom, subject to overlap prevention and the visible region. Transparent rectangular targets remain at least 44 px high.

## Behavior

Drag pans the image; pinch handlers support two pointers. Controls provide zoom, world reset, city selection and expanded view. Keyboard arrows pan; plus/minus zoom; zero resets. Escape exits an expanded map while keeping Atlas open. The same map is moved into the full Atlas route and restored to the homepage when the route closes. Existing search, official-site and save controls are preserved.

City selection searches the existing directory and opens previously recorded DSB Select candidates when present. Ratings are explicitly labeled current rating unverified. All copied candidate ratings are at least 4.0, but these historical records are not a new worldwide ratings audit. Cities without a reviewed shortlist show an honest discovery fallback; no businesses or ratings were invented. Further curation is needed to populate all cities.

The Deep Directory Search heading now remains cream, rgb(245, 223, 197), on its dark panel in both light and dark modes.

## Checks performed

- All inline scripts and new/modified JavaScript parsed successfully.
- GitHub Pages application deployment ebce002ee4407bf624f99d9a708dbe0e9d271904 completed successfully.
- Desktop map: 78 city records; eight visible labels at 100%; zoom controls reached 150%, 225% and 300%. Native drag changed the transform by the expected 200 px horizontal and 100 px vertical movement.
- Chicago selection showed Call & Response Books and The SoulFood Lounge with their explicitly historical ratings.
- Tokyo selection updated the full Atlas search and showed no reviewed shortlist instead of fabricated results.
- 360 px phone frame: expanded map width and scroll width both 352 px within a 360 px viewport; controls and Accra selection fit. At 300%, eleven labels appeared in the visible region. Escape closed the map and left the Atlas route open.
- Heading color checked in both themes.
- Core membership prices and Stripe URLs were not modified.

Phone tests used a browser viewport, not physical touch hardware. Pinch support is implemented but physical two-finger operation was not tested in this session. Positions are approximate on stylized art, not navigation-grade geographic coordinates.

Changed: index.html, assets/dsb-atlas-world.webp, assets/dsb-atlas-art.css, assets/dsb-atlas-art.js, assets/dsb-navigation.js, qa/viewport.html and project/QA notes. Screenshot: dsb-painted-atlas-20261011.jpg.
