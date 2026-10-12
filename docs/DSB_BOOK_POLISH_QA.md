# Book and reader polish QA — October 12, 2026

Verified with executable DOM/module tests and syntax checks:
- 100 consecutive original ranks and one branded stamp per book; full-cover wrappers on grid, modal and guides.
- 106 structured book-link slots; seven verified legal free editions; three existing status controls and free-before-Amazon order; new-tab safety attributes; inactive placeholders; future disclosure/tag behavior and unsafe-URL rejection.
- Browser voice matrix: Nigerian/Kenyan/Caribbean locale priority, conditional regional default, remembered existing voice and explicit Browser default preserved, no regional availability fallback unchanged, unsupported speech disabled, no autoplay and listener cleanup.
- CSS inspection: object-fit containment, stamp clear of cover, no clipped sticky action column, 14px action spacing, 18px reaction spacing, subtle 3px hover movement, reduced-motion support, bare light/dark reader icons and thinner 38px bar.
- Cache versions changed for shared reader assets in all three halls and for Books CSS/JS. Existing article/journal/toolbar controls were retained.

Sources: official Amazon policies/help, MDN SpeechSynthesis.getVoices, Project Gutenberg and Standard Ebooks. See DSB_BOOK_LINK_SETUP.md and DSB_FREE_READS_SOURCES.md.

Limit: no supported browser-control capability was available for screenshots or a real desktop/mobile visual inspection. CSS and DOM verification does not establish the voices installed on any particular visitor’s device. Actual device voices are detected at runtime, with free browser fallback.
