export const normalize=value=>String(value??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
export function filterBooks(books,{query='',category='',shelfOnly=false,saved={}}={}){
 const terms=normalize(query).trim().split(/\s+/).filter(Boolean);
 return books.filter(b=>(!category||b.category===category)&&(!shelfOnly||saved[b.id]?.status||saved[b.id]?.favorite||saved[b.id]?.notes?.idea)&&terms.every(t=>normalize([b.title,b.author,b.year,b.category,b.region,b.lens,b.premise].join(' ')).includes(t))).slice().sort((a,b)=>(a.rank??Infinity)-(b.rank??Infinity));
}
export function validateCanon(books){if(books.length!==100)throw Error('The canon must have exactly 100 books.');const ids=new Set();books.forEach((b,i)=>{if(b.rank!==i+1||ids.has(b.id)||!b.title||!b.author||!Number.isInteger(b.year)||!b.take||!b.premise||!b.question)throw Error('Invalid canon entry '+(i+1));ids.add(b.id)});return true;}
export function journalInsertionPoint(sections){
 const total=sections.reduce((sum,s)=>sum+s.paragraphs.reduce((n,p)=>n+p.trim().split(/\s+/).length,0),0);let cumulative=0;
 for(let i=0;i<sections.length;i++)for(let j=0;j<sections[i].paragraphs.length;j++){cumulative+=sections[i].paragraphs[j].trim().split(/\s+/).length;if(cumulative>=total/3)return {sectionIndex:i,paragraphIndex:j};}
 return {sectionIndex:0,paragraphIndex:0};
}
export function journalInsertionIndex(sections){return journalInsertionPoint(sections).sectionIndex;}
export function shelfCounts(saved){const counts={want:0,reading:0,finished:0,total:0};for(const b of Object.values(saved)){if(b.status in counts&&b.status!=='total')counts[b.status]++;if(b.status||b.favorite||Object.values(b.notes||{}).some(Boolean)||b.review)counts.total++;}return counts;}
