/* Future external review bridge (for example a moderated Supabase Edge Function).
   No database credentials, fake reviews or fabricated public counters are shipped.
   Supply only an HTTPS public endpoint. The server must validate, rate-limit and
   moderate anonymous submissions and expose only approved reviews/aggregate totals. */
window.DSB_BOOK_REVIEW_CONFIG=Object.freeze({enabled:false,endpoint:''});
window.DSBBookReviews={
 get enabled(){const c=window.DSB_BOOK_REVIEW_CONFIG;return c?.enabled===true&&/^https:\/\//.test(c.endpoint||'')},
 async summaries(bookId){if(!this.enabled)return null;const url=new URL(window.DSB_BOOK_REVIEW_CONFIG.endpoint);url.searchParams.set('book_id',bookId);const r=await fetch(url,{headers:{Accept:'application/json'},signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('Reader responses are unavailable.');return r.json()},
 async submit(review){if(!this.enabled)throw Error('Community posting is not open yet.');const payload={book_id:String(review.book_id).slice(0,150),rating:Number(review.rating),nickname:String(review.nickname||'Reader').slice(0,40),comment:String(review.comment||'').slice(0,1500),reaction:String(review.reaction||'').slice(0,20)};if(!Number.isInteger(payload.rating)||payload.rating<1||payload.rating>5||!payload.comment.trim())throw Error('Choose a rating and write a short review.');const r=await fetch(window.DSB_BOOK_REVIEW_CONFIG.endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('The review could not be sent. Your private draft is still saved.');return r.json()}
};
