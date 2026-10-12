# Book purchase and free-read links

Edit `books/book-links.json`. Every canonical, independent and recent book has a slot under `books`, identified by its existing stable book ID.

1. Replace a book’s `amazonUrl: null` with its full HTTPS Amazon.com product-detail URL for the correct book/edition. With no URL, See details on Amazon stays visibly disabled. Do not insert a fake URL, price or ASIN. Short links and other hosts are not accepted by this adapter.
2. After DSB is enrolled and approved for the appropriate site/links, add the real tagged links supplied by Amazon and set `amazon.affiliateEnabled` to true. Confirm current program requirements at activation. The rendering adds `Paid link. As an Amazon Associate I earn from qualifying purchases.` near each active Amazon link and `rel=sponsored`. When affiliate mode is off, tag parameters are removed from rendered links and no membership claim is shown.
3. `freeRead` fields identify verified provider URLs and edition-specific rights notes. Read for free appears first, then the Amazon button. Keep links to authorized full books, not pirated PDFs or unrelated collections/excerpts. Public-domain rights vary by country; the current editions state their U.S. status.
4. Both active link types open new tabs with noopener/noreferrer. Book status controls, notes, DSB guides and ranking remain independent of purchases. No affiliate links are inserted into the comfort toolbar or preview popups.

Checked October 12, 2026 against official Amazon guidance:
- https://affiliate-program.amazon.com/help/operating/agreement/ — section 5, required Associate identification.
- https://affiliate-program.amazon.com/help/node/topic/GHQNZAU6669EZS98 — conspicuous paid-link disclosure near links.
- https://affiliate-program.amazon.com/help/operating/policies/ — make the Amazon destination clear.
- https://affiliate-program.amazon.com/help/operating/participation/ — trademarks/content and linking restrictions.

This prepares the frontend; program eligibility, approved enrollment and real affiliate URLs must still be supplied before monetized links are activated.
