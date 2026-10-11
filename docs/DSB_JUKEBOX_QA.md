# DSB Jukebox verification

Verified on the deployed site, 11 October 2026.

## Changes

- `index.html`: DSB-branded three-button landing, personal playlist disclosure, entertainment link and inconspicuous InAct rights credit; retained existing music catalog.
- `assets/dsb-jukebox.js`: nested history and genre navigation, year filtering, single player, transport controls, persistent browser YouTube playlist and session-only local audio.
- `assets/dsb-jukebox.css`: square brown buttons, coordinated light/dark player and menu, readable copy on unchanged dark imagery/cards and responsive compact video wrapper.
- `entertainment.html`: starter discovery and professional connection hub with public official resources. Individual artist/actor profiles still need curation.

## Live checks

| Check | Result |
| --- | --- |
| Three landing choices, Music grid, History chapters, ancestral recordings, nested Back | Passed |
| Back and main X retain the same YouTube iframe | Passed |
| Mini X removes the iframe and closes the player | Passed |
| Compact video dimensions | Passed: frame 280 x 157.5 pixels inside 300-pixel panel |
| Switching recordings leaves one video iframe | Passed |
| YouTube title, duration and source link | Passed for selected ancestral recordings |
| Complete YouTube streaming | Unverified: browser remained buffering at 0:00 |
| Local audio select, play, pause, resume | Passed using disposable 30-second generated audio |
| Local audio continues after main X | Passed: audio remained playing and time advanced |
| Saved YouTube playlist persists after reload | Passed; QA entry removed |
| Invalid non-YouTube URL | Rejected with a visible error |
| Repeat toggle | Passed |
| Light player/menu and hero photo copy | Passed |
| Header account/menu contrast | Passed |
| Entertainment hub | Live page rendered |
| JS syntax and duplicate HTML IDs | Passed |
| Physical phone/tablet playback and layout | Not tested in this environment |
| Every catalog video, shuffle order, seeking and repeat at track end | Not exhaustively tested |

This frontend work adds no paid hosting services and does not change Stripe or Supabase. It does not establish payment or membership readiness.
