# DSB Motivation — 12 Voices of Greatness

Published application commit: 97b12620b837c80c9ac56fca8aa64a71a5d5d9a6. Checked 2026-10-11 UTC.

## Scope
Replaced the Motivation catalog and added its searchable, paginated card renderer. Added the requested jukebox tagline and supporting line. Music & History and Meditation data and the shared player implementation are byte-for-byte unchanged from the prior deployed build. Navigation, memberships and backends were not modified.

## Source verification
All 12 exact watch pages returned public video metadata with playabilityStatus OK and playableInEmbed true. YouTube oEmbed returned 200 with matching exact titles/creators and iframe markup for all 12. All 12 official thumbnail URLs returned image/jpeg; all 12 displayed in the live browser. No video stream was downloaded or rehosted.

Source identity was checked through original speaker channels or original publishers (Rich Roll, Penn and Stanford). Underlying copyright ownership has not been independently audited and remains marked unverified for every record. Embedding uses only YouTube’s normal player.

Most-viewed ranking is not certified across all YouTube uploads. Popular-sort original-channel candidates were compared for Les Brown, Eric Thomas, Inky Johnson, Lisa Nichols, Trent Shelton, Simon T. Bailey, Sarah Jakes Roberts and Stormy Wellington. Suitability and original source preference took priority over relationship/therapy content, music videos, lifestyle vlogs and sales pitches. Steve Harvey’s Jump, the original Penn/Stanford addresses and the original Rich Roll Goggins interview were verified suitable source candidates; they are not claimed as those speakers’ absolute highest-viewed videos. Lisa Nichols’ rescue talk was selected for the requested theme; higher-count relationship/self-love videos were excluded. View counts below are snapshots from public watch-page metadata, not live counters.

## Final records
| Speaker | Exact title / watch URL | Creator | Duration | Views at check | Embedding |
|---|---|---|---:|---:|---|
| Les Brown | [IT'S POSSIBLE (Les Brown's Greatest Hits)](https://www.youtube.com/watch?v=gXuSMjrx_e8) | Les Brown | 58:48 | 8,574,430 | Permitted; player initialized |
| Eric Thomas | [YOU OWE YOU \| ERIC THOMAS (POWERFUL MOTIVATION)](https://www.youtube.com/watch?v=7Oxz060iedY) | etthehiphoppreacher | 7:40 | 11,450,160 | Permitted; player initialized |
| Inky Johnson | [INKY JOHNSON'S INKSPIRATIONS -  Aflac in Dallas, Texas](https://www.youtube.com/watch?v=jCA2AUNwRdI) | Inky Johnson | 29:40 | 960,048 | Permitted; player initialized |
| Lisa Nichols | [How To Be Your Own Rescue - Lisa Nichols](https://www.youtube.com/watch?v=dkrH7MkFcMk) | Lisa Nichols | 14:43 | 157,979 | Permitted; player initialized |
| David Goggins | [David Goggins Will Change Your Life \| Rich Roll Podcast](https://www.youtube.com/watch?v=azROJC2YJ4g) | Rich Roll | 131:01 | 5,339,338 | Permitted; player initialized |
| Steve Harvey | [Jump](https://www.youtube.com/watch?v=y-952IaLtKM) | The Official Steve Harvey | 6:00 | 644,455 | Permitted; player initialized |
| Denzel Washington | [Penn's 2011 Commencement Address by Denzel Washington](https://www.youtube.com/watch?v=vpW2sGlCtaE) | University of Pennsylvania | 22:35 | 1,338,765 | Permitted; player initialized |
| Oprah Winfrey | [Oprah Winfrey's 2008 Stanford Commencement Address](https://www.youtube.com/watch?v=Bpd3raj8xww) | Stanford | 29:54 | 1,792,598 | Permitted; player initialized |
| Trent Shelton | [Rise Above \|\| Spoken Word](https://www.youtube.com/watch?v=vmWKXYP2tSI) | TrentShelton | 3:29 | 1,493,226 | Permitted; player initialized |
| Simon T. Bailey | [How to Embrace Operational Excellence \| Lead High-Impact Teams & Drive Success](https://www.youtube.com/watch?v=AArAboZ_Oj8) | Simon T. Bailey | 5:37 | 2,364 | Permitted; player initialized |
| Sarah Jakes Roberts | [Girl, Get Up x Sarah Jakes Roberts](https://www.youtube.com/watch?v=k3k8VEN13a0) | Sarah Jakes Roberts | 45:47 | 6,464,317 | Permitted; player initialized |
| Stormy Wellington | [THESE ARE THE 5 THINGS THAT HELPED ME BECOME A MILLIONAIRE!](https://www.youtube.com/watch?v=PYBqNOFmURU) | Stormy Wellington | 34:47 | 128,524 | Permitted; player initialized |

Exact video IDs, channel IDs, source status, timestamp, topic tags and metadata evidence are in `assets/dsb-motivation.json`. Automated source checks are in `docs/dsb-motivation-source-checks.json`.

## Live interface QA
- All 12 selections were activated on the live website. Every selected name and iframe video ID matched the catalog. One iframe remained after each switch; no embedding error was reported during initialization.
- Queue Next changed Les Brown to Eric Thomas. Previous returned to Les Brown. Stop and the mini-player X each removed the iframe completely.
- Minimize preserved the same player; Restore reopened the jukebox.
- Search for Lisa returned one record. Clearing search restored 12. Pagination is data-driven and has no fixed catalog maximum; only 12 cards render per page. Future additions require curated records, not a new interface.
- Light and dark themes were inspected. Two columns on desktop/tablet, one column at phone widths. No card or panel horizontal overflow at 360, 390 and 768 px iframe viewports. These are responsive viewport tests, not physical-phone or Safari tests.
- Music genre and History navigation remained intact. All four history chapters appeared. Meditation retained the two existing selections and year/era control.
- Main menu Black Atlas opened `#/atlas` and closed the menu. Existing entertainment and personal playlist links/controls were preserved.

## Limits — do not overstate completion
Embed permission and initialization are verified for all 12. Full audiovisual playback is NOT verified: the cloud browser initialized YouTube players and loaded durations but the tested stream remained at 0:00 with readyState 0, even after Play. No embedding restriction was bypassed. Pause/resume, seeking and audible/video advancement cannot be certified from that environment. Every card has an exact Watch on YouTube fallback. None is external-only based on the current verified permission checks.

Copyright ownership remains unverified independently of publisher identity. Most-viewed status remains unverified globally. Durations may differ by a second between watch metadata and player display. The original long interview and sermons were not watched end-to-end; topic curation uses the publishers’ titles, descriptions and context.

## Files changed
- `assets/dsb-motivation.json` — expandable catalog and audit fields.
- `assets/dsb-motivation.js` — browser catalog loaded before the jukebox.
- `assets/dsb-jukebox.js` — Motivation-only renderer and routing.
- `assets/dsb-jukebox.css` — scoped cards/search/tagline styles.
- `index.html` — catalog script, asset version and requested tagline.
- `qa/viewport.html` — refreshed test fixture build URL.
- `docs/dsb-motivation-source-checks.json` and this report — verification evidence.

## Links
- Live: https://divineshadesofbrown.com/?build=97b12620
- Repository: https://github.com/inactentertainment/divine-shades-of-brown
- Application commit: https://github.com/inactentertainment/divine-shades-of-brown/commit/97b12620b837c80c9ac56fca8aa64a71a5d5d9a6
