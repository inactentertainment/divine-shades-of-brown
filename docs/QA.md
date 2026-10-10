# Divine Shades of Brown — Master QA & Launch Readiness

Date: October 10, 2026  
Project: Divine Shades of Brown  
Owner: InAct Entertainment LLC  
Repository: inactentertainment/divine-shades-of-brown

## Current launch status

**Codebase status: READY FOR OWNER-SIDE FINAL LAUNCH STEPS**

The current static build passes structural and JavaScript validation and contains the live one-time Stripe checkout links. The remaining launch blockers are external configuration steps that cannot be completed from the public site code alone.

## Passed QA

### Structure
- Single HTML document confirmed.
- Single closing `</body>` and `</html>` confirmed.
- Internal hash navigation targets resolve to existing IDs.
- JavaScript parses successfully.
- No Stripe test checkout URLs remain.
- No stale Supabase dependency language remains in the customer-facing dashboard.
- Duplicate trailing markup found in an earlier build was removed before Build 12.
- Reduced-motion support is present.
- Keyboard focus-visible styling is present.

### Payments
- $49 Founding Access live checkout:
  - https://buy.stripe.com/14A6oI2bU3Tt11z1Gf7Re07
- $399 Lifetime All-Access live checkout:
  - https://buy.stripe.com/eVqeVeaIq4XxcKhet17Re06
- No recurring DSB membership is advertised.
- Brown Circle uses the $399 checkout and relies on Stripe for the private promotion code.
- Brown Circle copy states a 20-redemption limit.
- Private promotion code is not stored in public source.

### Membership / premium experience
- Public, Founding Access and Lifetime All-Access are clearly distinguished.
- Divine LifeBook 2.0 is present as the flagship Lifetime feature.
- LifeBook includes profile, journal, calendar, family, places, Life Plan, wellness, money/career, documents and legacy.
- Browser-local backup/export remains available.
- Local-first limitations are disclosed.

### Core utilities
- Black Atlas 3.0 present.
- Economic Self-Sufficiency Matrix present with 10 sectors.
- Opportunity Finder contains official-source entries.
- Black Pulse contains current/upcoming official-source event cards.
- Today in Black displays the current date dynamically.
- Find Help includes 14 categories.
- Brown Passport starter destinations are present.
- Resource Vault and Divine Youth starter downloads are present.
- Music of the Diaspora expanded archive is present.
- DSB Curated Collection is present.

### Commerce / affiliate integrity
- DSB-owned products are separated from third-party discovery.
- Standard third-party links are not falsely represented as affiliate relationships.
- Affiliate Disclosure explains affiliate, sponsored and standard-link distinctions.
- Partner pipeline requires verification before a monetized badge or tracking link is activated.

### Forms and submissions
- Black Pulse submission no longer pretends to send data to a nonexistent backend.
- Event submission opens a prefilled email to the DSB review inbox for manual moderation.
- Founding-list forms no longer claim automatic server-side enrollment.
- Founding-list request opens a prefilled email so the visitor explicitly sends the request.

## Owner-side launch blockers

### 1. GitHub Pages public deployment
The intended public URL is:

https://inactentertainment.github.io/divine-shades-of-brown/

This URL still needs to be confirmed as successfully deployed and reachable. The repository already contains:
- `.nojekyll`
- `.github/workflows/pages.yml`
- GitHub Pages deployment workflow configuration

If the URL is still unavailable, open:
**GitHub repository → Settings → Pages**

Confirm GitHub Pages is enabled for this repository and that the deployment source/settings permit the Pages workflow.

### 2. Stripe success redirects
Once the final public site URL works, configure the live Stripe payment links to return successful buyers to DSB.

Recommended return patterns:
- Founding Access:
  `?dsb_access=founding&checkout=success`
- Lifetime All-Access:
  `?dsb_access=lifetime&checkout=success`

The site already contains the client-side welcome handling for those return parameters.

### 3. Live payment QA
Before public promotion:
- Complete one real $49 checkout or low-risk controlled live test.
- Complete one real/controlled $399 checkout or verify Stripe's live checkout behavior.
- Test Brown Circle promotion code on the $399 checkout.
- Confirm 100% discount produces the expected $0 result.
- Confirm redemption count increments and caps at 20.
- Confirm Stripe receipts/emails are correct.
- Confirm successful payment returns to the correct DSB URL after redirect configuration.

### 4. Device/browser QA
Test the public site manually on:
- Chrome desktop
- Edge desktop
- Safari/iPhone if available
- Chrome/Android if available
- One tablet-width viewport

Check:
- sticky header
- mobile menu
- no horizontal scrolling
- light/dark mode
- music drawer
- modals and close buttons
- LifeBook save/export/import
- Resource Vault downloads
- Black Atlas tabs and matrix filters
- Opportunity filters
- Black Pulse cards
- Shop/commerce tabs
- Stripe buttons
- Brown Circle entry
- legal overlays

## Post-launch items that are not blockers

These can wait until revenue or usage justifies additional infrastructure:
- secure user accounts
- cloud sync
- automatic email-list capture
- server-side payment entitlements
- automated Black Pulse moderation
- cross-device LifeBook storage
- analytics beyond local click counting
- larger verified business database
- automated event/opportunity ingestion
- advanced universal search

## Release recommendation

Do not add another large feature build before the public deployment and payment journey are verified. The next work should be launch verification, bug fixes discovered during real-device QA, then incremental content updates.
