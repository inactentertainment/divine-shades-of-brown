# Approved Reading & Comfort Bar — portable source

Use ONLY on individual articles, lessons, guides and pages with substantial reading. Keep the same thin bottom bar, SVG symbols, order, popup layouts and features, adapted to the host site's brand. Do not add to homepages, short landing pages, product grids, or ordinary forms by default.

Reference: https://ieplr.com/articles/a-better-ai-brief.html

## Integration

1. Copy the assets into your site's assets folder.
2. Add data-reader="true" to the body of eligible reading pages. Use data-reader="false" elsewhere.
3. Include reader-comfort.css, read-aloud.css and page-tools.css, followed by your brand-adapter.css.
4. Include deferred scripts in this order: reader-bar-init.js, read-aloud.js, reader-comfort.js.
5. The page needs a main element. Use a real footer so the bar can stop above it.
6. Adapt colors/fonts/finishes in your brand stylesheet. Preserve symbols, popup structure and functional behavior. Provide contrast for every theme.
7. Verify on phones and desktops, including every popup, footer position, keyboard focus, saved notes, downloads, and speech fallback.

## Preserve all controls

Comfort (bulb): lights off/on, warm paper, soft gray, reduced motion, quiet everything.
Text (Aa): size, line spacing, reading width, font, reset.
Focus: paragraph highlighting and previous/next paragraph.
Take a Break (chair): breathing, eye rest, gentle movement and guided breaks; pause/continue, skip, return, optional spoken instructions.
Journal (book): notes saved per page in this browser, quotations, save/return to reading place, back to top and text download.
Listen (speaker): read/pause/resume/stop, read from here, voice selection/preview, rate and follow reading.
Back to Top (arrow).

No autoplay. Notes and preferences are browser-local, not cloud-synced. Speech and storage depend on the browser. Keep fallbacks and reduced-motion behavior. Closing a break cleans up its timer. Do not copy unrelated i.e. navigation.

The initializer was extracted from the working site's page-tools setup. The three original behavior/style pairs are included unchanged. demo.html provides the required integration skeleton; brand-adapter.css demonstrates where to apply the host brand.

## DSB integration
The three source styles and two behavior files are adapted from the exact approved ZIP. DSBReaderBarInit, DSBReadAloudInit and DSBComfortInit expose mount/cleanup hooks for hash-routed articles and book guides. dsb-comfort-lifecycle.js prevents duplicate bars and clears speech, timers, listeners and observers between pages. Storage keys include the article/book identity. dsb-comfort-brand.css supplies the bronze finish, centered mobile-safe panels and visible reading surfaces. No narration starts on mount.
