# DSB menu, membership and emoji correction

Targeted follow-up to the supplied October 11 screenshots.

## Changes

Removed Membership from the jukebox. Main navigation now ends with a single sharp rectangular script Membership button, no arrow or explanatory copy, in the DSB gold palette with diagonal shimmer. Added a decorative skin-tone chooser at the top of the menu, preserving the existing locally saved preference.

Pricing controls now have consistent card footers, readable wrapping labels and gold shimmering buttons with a restrained hover lift. Free Explore is beige; Belong is warmer brown; Build and the forthcoming art panel remain dark. Checkout URLs, prices, entitlements and existing benefits were preserved.

Added trial emoji reactions only to The DSB Promise and Four Rooms. One choice per section; clear/toggle supported; skin tone updates supported gestures. Reactions live only in memory and reset on refresh. No account, payment, shared response or paid-saving feature is simulated. Durable member saving remains to be implemented after secure membership integration.

## Static checks

New JavaScript parsed successfully. All existing Stripe URLs matched the baseline. Five shade choices found; no neutral/yellow option. Main menu Membership has one word only; no Membership link remains in the jukebox HTML.

## Changed files

- index.html
- assets/dsb-menu-refinements.css
- assets/dsb-menu-refinements.js
- assets/dsb-navigation.js
- assets/dsb-passport-art.webp
- qa/viewport.html
- docs/DSB_PROJECT_DECISIONS.md
- docs/DSB_MENU_CORRECTIONS_QA.md

## Added Passport repair

Replaced only the Go Farther photographic background with the supplied abstract artwork. The main homepage artwork remains unchanged. Passport overlapping text came from an accordion grid with two direct children but one animated row, plus overly broad nested div styling. A single content wrapper now keeps both introductions in normal flow, with explicit readable line heights and separate destination cards. Closed Passport content is inert and labeled hidden; opening it restores its controls.

The five shades are Light, Medium light, Medium, Medium dark and Dark. Old neutral/invalid preferences fall back to Medium. All trial gestures inherit a valid modifier; Love this uses a brown heart.

## Live verification

Verified the deployed site in the cloud browser, with a desktop viewport and responsive 360 px / 390 px phone frames. These are browser viewport checks, not physical-device tests. GitHub Pages deployment for application commit e53748c3fab61970a85a1a89125924e1fdd38b7d completed successfully.

- Exercised all five shade buttons: the hand preview matched each modifier. No neutral choice remains.
- The bottom menu Membership button navigates to the membership page. Its label is only Membership; computed gold styling and script font were confirmed.
- Three desktop membership actions have matching top positions and 64 px heights. Gold labels and warm card progression were visually checked. The lifetime button is readable at 360 px; the four action controls were checked at 390 px. No horizontal document overflow was found.
- Verified cream text on the dark Build/art cards in light mode.
- Brown-heart reaction selection worked. Refresh cleared the trial reaction and retained the selected Dark shade.
- Passport introductions have normal flow: 22 px between the introductory blocks and 18 px before the destination grid on the phone frame.
- Confirmed the Go Farther background uses dsb-passport-art.webp.
- A Ghana Travel Experiences button opened the Accra selection. Closing the player returned to the still-open Passport panel.
- Existing checkout links and prices were preserved; no purchase or paid-entitlement test was performed in this visual correction. Durable member reaction saving is not implemented.

Screenshots: dsb-menu-corrected-20261011.jpg and dsb-pricing-corrected-20261011.jpg.

## Superseding price clarification

The separate art panel was an incorrect interpretation of $399 and is now removed. There is no $3.99 membership. Curated art is listed within the $399 Build benefit summaries; monthly packages and the art magazine are labeled in development. Prices remain $0, $49 one-time and $399 lifetime. The old reaction trial panels and emoji promotion were removed. The menu now has only a compact five-shade row. Live browser verification found zero art-offer panels, zero reaction panels, the three correct prices, and curated art in Build. The desktop shade row is 54 px high, and selecting Medium announces Medium selected. Screenshot: dsb-compact-menu-20261011.jpg.
