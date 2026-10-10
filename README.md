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

## Post-QA customer experience polish

Completed after Build 14:
- Added a celebratory transition and confetti treatment to the $49 Founding Access confirmation page.
- Made the DSB brand on both welcome pages return to the homepage.
- Reworked Sounds of the Black Diaspora with clean era and genre dropdowns instead of horizontal scrolling filters.
- Added the InAct Entertainment Presents treatment to the music panel.
- Added stronger hover, press and focus states across search fields, chips, tabs and action buttons.
- Expanded Black Pulse with additional current October-November 2026 official-source events.
- Upgraded Black Atlas into a two-level search experience: DSB-curated picks plus deep-directory handoff to BuyBlack.org and Support Black Owned.
- Added 100+ city-guide discovery context and interactive city/diaspora hub buttons on the Atlas map.
- Added a Black Diaspora tunnel transition and short synthesized whoosh when opening Black Atlas or Black Pulse.
- Reworked the full Black Atlas route with search, saving and deep-directory pathways.
- Reworked the full Black Pulse route to include official-source links.
- Removed remaining customer-visible internal roadmap language such as Build 12, live-data-phase language, infrastructure-phase language and future-build wording.
- Rewrote visible copy for clearer grammar, punctuation, directives and customer-facing tone.
- Revalidated JavaScript and document structure on the homepage and both welcome pages; no Stripe test links remain.

## DSB Select curation build

Completed:
- Reframed the platform explicitly as Black America first, with strong connections to Africa, the Caribbean and the wider Black diaspora.
- Added DSB Select inside Black Atlas as an editorially curated layer rather than an open listing dump.
- Added public selection standards: 4.0+ rating baseline, meaningful review history, supportable Black ownership, current/active operations, and quality/reputation review.
- Added 12 opening DSB Select businesses across Washington, Atlanta, Chicago, New York, Los Angeles and Houston, each with a public rating/review snapshot, official-site link and a short “Why DSB selected it” note.
- Added category filters for Books, Coffee, Food, Retail and Arts.
- Added Save-to-My-DSB behavior for Select listings.
- Added a Request DSB Review form that opens a prefilled email for owner/customer recommendations; submission does not guarantee inclusion and there is no consideration fee.
- Added customer-facing disclosure that ratings are snapshots and DSB Select is editorial curation, not a transaction guarantee.
- Updated Black Atlas scale references to BuyBlack.org's 2026 figures: 111K+ recognized businesses and 119 city guides.
- Strengthened the DSB Journal homepage from 3 visible stories to 6, added reading-time/founding-issue metadata, hover polish, save controls and a copy-title action inside articles.
- Revalidated JavaScript and document structure after the build; no Stripe test links remain.

## Black Life Essentials expansion

Completed:
- Added Black Life Essentials as a searchable, filterable directory for farms/food systems, health/clinics, Black-founded schools, Black-owned/Black MDI banking institutions, and high-quality Black-owned/Black-founded stays.
- Added 24+ curated essential-resource entries with contact details, addresses/coverage areas, official or authoritative source links, and transparent quality/verification notes.
- Added regional farm examples including Deep Roots Farm, Asawana Farms, 804 Cattle Company, aGROWKulture, Backyard Basecamp/BLISS Meadows and Orun Field & Family Farm.
- Added Black-owned medical/health examples including Concordis Medical, U-First Health and Wellness, Restore Wellness and MedSpa, and Emmaus Healthcare.
- Added Black-founded school examples and a direct gateway to the Black Minds Matter national Black-Founded Schools Directory.
- Added key African American-owned/Black MDI banking institutions including City First Bank, Citizens Trust Bank, GN Bank, Carver Federal Savings Bank, Industrial Bank and Commonwealth National Bank, plus direct links to BankBlackUSA and federal MDI verification resources.
- Added high-quality lodging examples including Wellspring Manor & Spa, Salamander Middleburg, Urban Cowboy Denver and Acadia Wilderness Lodge.
- Added Brown Passport: Unexpected America with six under-the-radar U.S. routes anchored by Black-owned, Black-founded or Black-investment-connected hospitality.
- Reframed Brown Passport so it starts with U.S. Black travel and then extends to Africa, the Caribbean and the wider diaspora.
- Expanded universal search to discover farms, clinics, banks, Black-founded schools, Black-owned stays and Unexpected America.
- Ratings are shown only as current public snapshots where available; regulated/educational institutions are verified through official or authoritative sources rather than consumer star ratings alone.
- Revalidated JavaScript and HTML structure; no Stripe test links remain.
