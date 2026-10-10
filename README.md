# Divine Shades of Brown

Divine Shades of Brown is an InAct Entertainment LLC platform connecting Black life, culture, history, business, travel, opportunity, resources, wellness and community.

## Live payment links

- Founding Access — $49 one-time: https://buy.stripe.com/14A6oI2bU3Tt11z1Gf7Re07
- Lifetime All-Access — $399 one-time: https://buy.stripe.com/eVqeVeaIq4XxcKhet17Re06

No recurring DSB membership fee.

## Brown Circle

- Private family / friends / partners access uses a Stripe promotion code on the $399 Lifetime checkout.
- Discount: 100%
- Maximum redemptions: 20
- Duration: once
- The private promotion code itself must not be stored in public GitHub source.

## Access model

### Public DSB — $0
Core public tools, history, journal, opportunities, help and discovery.

### Founding Access — $49 one-time
Premium starter library, magazine/archive sampler, Resource Vault starter collection, Brown Passport starter pack, expanded music/history sampler, premium field guides and downloads.

### Lifetime All-Access — $399 one-time
Everything in Founding Access plus The Divine LifeBook, complete premium Resource Vault, full Brown Passport and Music of the Diaspora premium collections, full digital magazine archive, future standard digital releases while DSB operates, and founding lifetime recognition.

## Build sequence

- Build 9 — Payment + Access Completion
- Build 10 — Member Experience + Divine LifeBook
- Build 11 — Black Atlas 3.0
- Build 12 — Content + Utility Expansion
- Build 13 — Commerce + Affiliates
- Build 14 — Master QA + Launch Readiness

## Build 9 status

Completed:
- Live $49 and $399 Stripe links connected throughout the site.
- Test Stripe links and test checkout wording removed.
- Brown Circle entry sends invitees to the live $399 Lifetime checkout.
- Public site does not expose the private Brown Circle promotion code.
- Brown Circle messaging reflects the 20-redemption Stripe limit.
- Site-side Stripe return handling prepared for future success redirects.
- Membership copy now clearly distinguishes Public, Founding Access and Lifetime All-Access.

Still requires owner-side setup before launch:
- Confirm the public GitHub Pages URL.
- Configure Stripe after-payment redirects once the final public URL is working.
- Verify the private Brown Circle code at live checkout.
- Run end-to-end live checkout QA before public promotion.

## Security

Never store Stripe secret keys, passwords, private API keys or private access codes in this repository.

## Build 10 status

Completed:
- Upgraded the Lifetime member hub with clearer one-time access, billing and flagship LifeBook status.
- Upgraded The Divine LifeBook to LifeBook 2.0.
- Added a completion meter and life-stage prompts.
- Added Life Plan goals with target dates, reasons and next actions.
- Added Wellness check-ins for energy, stress, rest and reflections.
- Added Money + Career tracking for savings, debt, investments, career moves, business goals, credentials and major purchases.
- Preserved existing local LifeBook data with migration-safe defaults.
- Kept browser-local storage and export/import backup behavior for the no-cost infrastructure phase.
- Revalidated JavaScript syntax and confirmed no Stripe test links remain.

## Build 11 status

Completed:
- Upgraded Black Atlas to 3.0.
- Added an interactive Economic Self-Sufficiency Matrix across 10 essential sectors.
- Added filters for Essentials, Infrastructure, Capital, Future, Production and Knowledge.
- Added sector-by-sector views for existing Black ownership pathways, weak/underdeveloped links, Black/African supplier routes, startup entry points, skills/certifications, and potential partners/capital paths.
- Added directional capital-intensity labels to help distinguish easier entry points from infrastructure-heavy sectors.
- Preserved Black business network and Africa/wholesale sourcing research from Black Atlas 2.0.
- Added verification cautions so the matrix does not overstate ownership gaps or present regulatory/supplier claims as settled facts.
- Cleaned duplicate trailing markup found during validation.
- Revalidated JavaScript syntax and confirmed no Stripe test links remain.

## Build 12 status

Completed:
- Expanded DSB Opportunities to 12 official-source entries, adding MBDA, CareerOneStop, Federal Student Aid and the CDFI Fund.
- Refreshed Black Pulse with current/upcoming official-source events from NMAAHC and Black Enterprise and removed the stale Oct. 8 event set.
- Expanded the DSB Journal from five to nine founding articles, adding Technology, Family, Money and Global Africa lanes.
- Expanded Music of the Diaspora to 18 entries, adding Jazz, Funk, Reggae, House, Disco/Dance, Alternative/Rock and Caribbean lanes.
- Upgraded Today in Black with dynamic current-date display and direct primary-source/archival pathways.
- Expanded Find Help to 14 categories with Healthcare and Disability + Caregiving resources.
- Expanded Brown Passport from a single Accra preview to a four-destination starter collection: Accra, Dakar, Kingston and Salvador.
- Added a Resource Vault utility shelf with nine downloadable starter worksheets.
- Added dedicated Divine Youth downloads for young girls, young boys and young adults.
- Added family-history, Black Receipt, opportunity, travel, music-memory and legacy starter worksheets.
- Expanded universal search to surface the new help and resource utilities.
- Updated founding-list language to reflect the live $49 and $399 one-time pricing model.
- Revalidated JavaScript and HTML structure; confirmed no Stripe test links remain.

## Build 13 status

Completed:
- Replaced the old shop preview with The DSB Curated Collection.
- Added commerce categories: Wear, Live, Travel, Read, Give and Build.
- Added DSB-owned offers for Founding Access, Lifetime All-Access, Resource Vault, Brown Passport and Black Receipt.
- Added curated standard-link discovery cards for MahoganyBooks, Calabash Tea, BuyBlack.org, Official Black Wall Street, Support Black Owned, SHOPPE BLACK and Faire's Black-owned wholesale filter.
- Standard third-party links are explicitly not represented as affiliate relationships.
- Added a public affiliate/partner status framework so cards can later be upgraded to AFFILIATE / PARTNER only after approval and verification.
- Added a partnership pipeline: Discover → Verify → Apply/Partner → Activate.
- Strengthened the Affiliate Disclosure language to distinguish standard discovery links, affiliate links, sponsored placements and verified ownership labels.
- Added Shop to navigation and universal search.
- Added lightweight browser-local click counting for commerce links without adding paid analytics infrastructure.
- Removed the old marketplace placeholder behavior.
- Revalidated JavaScript/HTML structure and confirmed no Stripe test links remain.

## Build 14 status

Completed:
- Ran master structural and JavaScript QA on the single-file site.
- Added focus-visible and reduced-motion accessibility support.
- Replaced stale Build 3 / Supabase / “payments not live” customer-facing language.
- Changed the top banner from Founding Preview to Founding Edition.
- Updated founding pricing language to the live $49 and $399 one-time model.
- Made Black Pulse submissions functional without a paid backend by opening a prefilled moderation email instead of pretending the site had a live submission database.
- Made founding-list forms truthful: they now open a prefilled email request instead of claiming automatic server enrollment.
- Added launch metadata for search/social sharing.
- Updated legal and downloadable-resource labels from Founding Preview to Founding Edition and refreshed legal effective date to October 10, 2026.
- Added docs/QA.md with the master QA results, owner-side launch blockers, Stripe return patterns, live-payment test checklist and device/browser QA list.
- Confirmed no Stripe test links remain.

Remaining launch blockers are external configuration / owner verification: GitHub Pages public deployment, Stripe success redirects, live checkout QA including Brown Circle, and real-device/browser testing.
