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
- docs/DSB_PROJECT_DECISIONS.md
- docs/DSB_MENU_CORRECTIONS_QA.md

## Added Passport repair

Replaced only the Go Farther photographic background with the supplied abstract artwork. The main homepage artwork remains unchanged. Passport overlapping text came from an accordion grid with two direct children but one animated row, plus overly broad nested div styling. A single content wrapper now keeps both introductions in normal flow, with explicit readable line heights and separate destination cards. Closed Passport content is inert and labeled hidden; opening it restores its controls.

The five shades are Light, Medium light, Medium, Medium dark and Dark. Old neutral/invalid preferences fall back to Medium. All trial gestures inherit a valid modifier; Love this uses a brown heart.
