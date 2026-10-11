# DSB reading pages and blog build — October 11, 2026

## Delivered

The 29-article collection includes 20 Our Next Chapter articles. Articles use full content pages with stable hash addresses, the actual shared site header/footer, Home and All articles links, save and link-copy controls. Main section destinations also use normal document flow instead of the large route overlay. Policies are full reading pages. Functional tool/form/media dialogs remain; timed/exit membership popups are disabled in favor of an inline membership invitation.

A slim branded reader appears on articles, the distinct magazine page, policies and selected reading-heavy resource/history pages. It includes theme, three text sizes, top, read aloud, pause/resume, stop, voice/rate/follow controls and paragraph highlighting. It hides on incompatible tool dialogs and moves above the footer. The old dialog reading bar is removed. The digital magazine collection remains in development; no published magazine issue or paid delivery is invented.

Private comment drafts, skin-tone reactions and original animated text stickers work locally and are clearly labeled not posted or shared. Shared email comments, replies, moderation, reports and reactions are prepared behind a disabled configuration. Existing Supabase projects were not changed. See DSB_COMMUNITY_ACTIVATION.md for the required project, email-delivery and RLS checks.

## Live verification

- Full article page displayed, old modal closed and exactly one reader present.
- Small/medium/large reading text measured 18/21/24 px. Light mode showed readable brown text on the cream page; dark mode used cream text on the dark page. Settings offered browser voice, five rates and follow-reading.
- This cloud browser reported Voice unavailable in this browser. Error state cleared highlighting and disabled pause. Audible speech, pause/resume and actual spoken-paragraph timing could not be verified here. Their browser speech handlers are implemented.
- Private draft saved, survived refresh at the same article address, and was cleared. Brown-tone reaction appeared in its private preview.
- Reader bottom and footer top both measured 870.203125 px during the collision check, so the footer was not covered.
- Blog return showed 29 articles, 20 in Our Next Chapter, and no reader on the article list.
- Magazine and Privacy Policy opened full pages with a reader; the old modal remained closed.
- Black Atlas still displayed its one map; no reader appeared there. Closing the navigation menu left page scrolling enabled.
- 360 px phone frame: 345 px document/reader width including the desktop-style scrollbar; reader scroll width also 345 px, with settings control inside the viewport. Settings sizing was corrected to use the actual dock width rather than 100vw. Tests use browser viewports, not physical phones.
- New/modified JavaScript and all inline scripts parsed successfully.

## Not activated or tested

No public comments, verified-email signup, shared replies, database changes, database RLS tests, moderation approvals, payments or external GIF provider were activated. No service-role or payment secret was added. Core membership prices and checkout links are unchanged. Existing article text was preserved; a full editorial/citation review remains separate.

Final application deployment 7480ca8a33c188b918410df319ab6e5b8380787b completed successfully. Live screenshot: dsb-reading-page-20261011.jpg.
