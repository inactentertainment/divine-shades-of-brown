# DSB artwork reel and map direction — 13 October 2026

Generated with the built-in image-generation tool. Four original PNG masters are retained in the project workspace; optimized WebP delivery copies preserve each full composition without cropping. Only the Library wordmark is installed in a live heading. The three editorial paintings are review assets.

| Artwork | Delivery asset | Intended placement |
|---|---|---|
| Library | assets/artwork/dsb-library-wordmark.webp | Replace the Library heading; carved bookmark at the right |
| Black Life Essentials | assets/artwork/dsb-essentials-painting.webp | Below “Not just where to shop. Where we live.” |
| Our Next Chapter | assets/artwork/dsb-next-chapter-painting.webp | Wide Journal hero beneath the headline |
| Black Atlas | assets/artwork/dsb-atlas-companion-painting.webp | Companion artwork above the actual interactive map, not a navigational map |

## What changed now

- Library artwork is fully contained, with accessible image text and no rectangular focus outline on the programmatically focused heading. Keyboard focus remains visible on real controls.
- Painted Atlas expands from 78 to 90 city choices. Added Kumasi, Gaborone, Lusaka, Harare, Maputo, Windhoek, Port Louis, Freetown, Charleston, Waldorf, Nassau and Port-au-Prince. These are city destinations, not new verified/rated business listings. Image-space positions remain editorial approximations.
- Zoom slider (100–900%), center-selected-city button, range readout, resize guards and zoom preservation on resize. Expanded map locks background scroll; Escape closes only the map and restores scrolling. Map overlay keyboard access retained.
- City panels provide explicit OpenStreetMap city searches in new tabs. African city panels optionally link to the official Explore African Wildlife camera collection, explicitly identifying the cameras as other locations and potentially live/replay/offline. No video auto-load or autoplay.
- Current artwork does not gain photographic street detail when enlarged. The UI states this clearly. Existing source artwork/interactive geography retained.

## Recommended next map: two connected views

Keep the painted DSB view as the entrance. Add an optional Detailed Map tab powered by MapLibre GL JS and OpenFreeMap. Clicking a city should synchronize both views using real longitude/latitude, with DSB places and editorial popups above a detailed basemap. Load the detailed engine only when requested, retain the painting if network/WebGL fails, and provide a return to Painted View.

OpenFreeMap's current public service states no registration, API keys, request limits or charge, and permits commercial use. It does not promise an SLA. Keep the required OpenMapTiles/OpenStreetMap attribution and use the provider's supported endpoints. Host a custom style JSON in the DSB repository. Free hosting and no account are consistent with the current project.

Possible DSB styles: **Dark Bronze** (umber land, amber lines, ivory labels); **Warm Paper** (parchment land, brown roads, muted olive parks); **Earth View** (real satellite raster with bronze controls and labels). These are proposals, not new installed map styles.

Source: https://openfreemap.org/ and https://openfreemap.org/quick_start/ (custom styles may be edited with Maputnik and hosted locally). MapLibre sources/raster support: https://maplibre.org/maplibre-style-spec/sources/ . Do not use demo endpoints as the long-term production service or treat OpenStreetMap's volunteer tile server as unlimited hosting: https://operations.osmfoundation.org/policies/tiles/ .

## Satellite and live pictures are different

NASA GIBS offers publicly accessible Earth imagery, including many near-real-time products available within a few hours. These show weather, landscapes and environmental conditions at their own sensor resolution; they are not live cameras or a way to see people and shops. Use a date label and source attribution, and select/verify the exact layer's resolution and current availability before adding it. Source: https://nasa-gibs.github.io/gibs-api-docs/available-visualizations/ .

High-resolution satellite mosaics can be much older than their display date. The MapLibre satellite example uses an EOX Sentinel-2 cloudless 2020 mosaic. This is evidence that raster satellite layers are possible, not blanket permission to use every provider free commercially: https://maplibre.org/maplibre-gl-js/docs/examples/display-a-satellite-map/ .

For actual moving scenes in Africa, use specific public cameras in separate location popups. Explore's African Wildlife collection is a verified starting point: https://explore.org/livecams/african-wildlife . Its terms allow source deep links and enabled Explore-branded embeds while retaining proprietary notices: https://explore.org/terms-of-service . Next pass should verify each exact feed, its location, embed permission and whether the player is live or showing highlights. Respect publisher controls; avoid a blanket “live Africa” claim. The current map provides a source link, not an embedded live feed.

## Checks and limits

- Full homepage script-order regression: no startup errors; 29 Journal articles, 18 routes and 28 category buttons retained.
- Map model/DOM checked at 1200 and 390 pixel container widths: 90 city options, city selection and centering, finite transforms, 500% slider and 100% reset, expanded Escape/scroll restoration while Atlas stays open.
- Library module route checked: accessible artwork heading and three Library doorways retained.
- Syntax checks passed. Image masters visually inspected. WebP sizes: Library about 142 KB; Essentials 273 KB; Journal 259 KB; Atlas companion 380 KB. Other images are not loaded on ordinary live pages.
- Rendered desktop/mobile browser QA unavailable under the supported environment; no browser screenshot or visual pass claimed. The detailed tile map, satellite layer and embedded cameras are research proposals and have not been installed.

## Final image prompt set

### library

Use case: stylized-concept. Asset type: very long slim website Library masthead, horizontal 4:1 composition, ideally 2048 x 512. Make a premium painterly typographic still life for Divine Shades of Brown. Exact readable text: "DSB Library" — D S B space L i b r a r y, no period and no other writing. Each letter is physically formed from ancient richly worn books and interwoven strips of bookbinding, leather and paper; the whole phrase reads clearly as a continuous sculptural bookshelf, not ordinary text over a picture. At the right end immediately after the y, place one intricate wood-carved African-inspired bookmark, with delicate geometric carving and braided tassel, integrated into the books rather than a punctuation mark. Layered abstract oil painting, mosaic brushwork, deep earthy umber, burnt sienna, bronze, muted ochre and old parchment highlights; warm rich tones with elegant small carved details. Keep readable contrast and letter shapes, no faces. Subject fully inside canvas with generous clear outer padding; soft feathered painterly edges into a near-black espresso background so it blends with a dark website. No rectangular frame, no border, no outline bar, no UI controls, no mockup, no watermark. The lettering is the art. Strong mature culturally rich Black media aesthetic.

### essentials

Use case: stylized-concept. Asset type: wide editorial website painting, 16:9 landscape. Primary request: Black Life Essentials — the visual meaning of "Not just where to shop. Where we live." No words in the painting. A powerful panoramic visual weave connecting Black-owned farms and food systems, homes and neighborhoods, places of learning, care and financial opportunity. Black adults and a family suggested as abstract silhouettes with no detailed faces, collectively cultivating, learning, building and tending life. Architecture, fertile land, books and human gestures interlock as curved geometric panels of one painting, not separate boxes or icons. Contemporary and diasporic, anchored in actual everyday dignity, no invented logos, no stereotyped tribal costumes. Premium abstract oil-painting and textured mosaic style; rich deep umber, burnt sienna, dark olive, bronze, subdued ochre and amber illumination with near-black espresso shadows. Powerful atmosphere; detail expressed with painterly shape and light, rather than portrait realism. Crisp enough to see the story at phone size. Wide scene with subtly dark feathered outer edges, no frame, no UI, no captions, no watermark.

### chapter

Use case: stylized-concept. Asset type: large 16:9 editorial painting for a young-adult Black digital magazine. Primary request: the feeling of "Our lives. Our ideas. Our next chapter." No text or logos. Dynamic Black adults in their 20s and 30s seen as faceless or turned-away abstract silhouettes, collaboratively writing, making art, exchanging ideas and building new futures; a vivid shared studio that flows into a city and diaspora horizon. Energy conveyed by hands, layered pages, motion, creative tools and luminous abstract pathways; modern technology subtle and integrated, not a literal computer advertisement. Avoid detailed faces and photorealism. Beautiful mature geometric abstract oil painting with palpable brush texture, overlapping ribbons, rhythmic organic arcs and mosaic forms. Deep brown, warm bronze, burnt sienna, soft muted olive, ochre and golden-paper light; near-black espresso shadows. Hopeful, strong, sophisticated and engaging rather than childish. Large image composition with the principal figures and activity inside the central safe area for mobile crops, softly darker edges. No typography, borders, watermarks or website mockup.

### atlas

Use case: stylized-concept. Asset type: 16:9 Black Atlas companion painting for the heading "A map of us." No text. An expressive conceptual atlas of Black life connecting Africa, the Americas and the wider diaspora, represented through flowing routes, landscapes, cultural spaces and small silhouetted travelers. The landforms and routes are artistic symbolism, not a precise navigational map or scientific diagram. Africa as a strong central visual anchor, interlocking ocean currents, a luminous African city, cultivated countryside, neighborhood bookshops and subtle coastal architecture; no detailed faces, no stereotypes. Premium deeply textured abstract oil-painting with mosaic brushwork, sweeping geometric bands and layered depth. Dark umber, rich bronze, burnt sienna, amber, old parchment and restrained olive. Evoke an invitation to explore real places; tactile geography and paths suggest many stories woven together. Keep composition clear and rich at mobile size, dark feathered perimeter, no frame, no labels, no logos, no UI, no watermark.

