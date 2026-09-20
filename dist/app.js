const IMG = 'assets/catalog/';
const products = [
  {id:'birthday-bliss',name:'Birthday Bliss',category:'Occasion Gifts',occasion:'Birthday',price:85000,image:IMG+'birthday-cake.jpg',tag:'Bestseller',desc:'A mini celebration cake, seasonal blooms and a personal card.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet','Lemon']},
  {id:'birthday-main',name:'Main Character Birthday',category:'Occasion Gifts',occasion:'Birthday',price:145000,image:IMG+'cake-flowers.jpg',tag:'Party pick',desc:'A full cake, bright bouquet and celebration treats.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet']},
  {id:'graduate-glow',name:'Graduate Glow',category:'Occasion Gifts',occasion:'Graduation',price:110000,image:IMG+'graduation.jpg',tag:'Proud moment',desc:'Flowers, sparkling juice and a keepsake congratulations card.',choice:'Colour mood',options:['Classic red','Bright mixed','White & green']},
  {id:'next-chapter',name:'The Next Chapter',category:'Occasion Gifts',occasion:'Graduation',price:155000,image:IMG+'luxe-hamper.jpg',tag:'Grand gesture',desc:'A generous success hamper with flowers, treats and a keepsake.',choice:'Colour mood',options:['Bold & bright','Warm neutrals','Green & gold']},
  {id:'welcome-little-one',name:'Welcome, Little One',category:'Occasion Gifts',occasion:'Child birth',price:130000,image:IMG+'newborn.jpg',tag:'New arrival',desc:'A soft baby blanket, comfort toy, flowers and a note for the parents.',choice:'Colour mood',options:['Soft neutral','Blush','Sky']},
  {id:'family-soft-start',name:'A Soft Start',category:'Occasion Gifts',occasion:'Child birth',price:185000,image:IMG+'newborn.jpg',tag:'Family gift',desc:'Baby essentials plus tea, treats and flowers for the new parents.',choice:'Colour mood',options:['Soft neutral','Blush','Sky']},
  {id:'peace-offering',name:'Peace Offering',category:'Occasion Gifts',occasion:'Apology',price:75000,image:IMG+'roses.jpg',tag:'Say it sincerely',desc:'A considered bouquet with chocolate and your honest message.',choice:'Flower mood',options:['Red roses','Soft blush','White & green']},
  {id:'sincere-sorry',name:'Truly Sorry',category:'Occasion Gifts',occasion:'Apology',price:125000,image:IMG+'roses.jpg',tag:'Thoughtful',desc:'A fuller flower arrangement, cake bites and a handwritten card.',choice:'Flower mood',options:['Red roses','Soft blush','White & green']},
  {id:'christmas-table',name:'Christmas Table Hamper',category:'Occasion Gifts',occasion:'Christmas',price:160000,image:IMG+'christmas.jpg',tag:'Festive',desc:'Seasonal treats, sparkling juice, candle and festive wrap.',choice:'Style',options:['Classic red & green','Modern gold','Family fun']},
  {id:'festive-grand',name:'Grand Christmas Basket',category:'Occasion Gifts',occasion:'Christmas',price:240000,image:IMG+'luxe-hamper.jpg',tag:'Shareable',desc:'A generous festive hamper made for families, hosts or teams.',choice:'Style',options:['Classic red & green','Modern gold','Family fun']},
  {id:'year-well-spent',name:'A Year Well Spent',category:'Occasion Gifts',occasion:'End of year',price:135000,image:IMG+'luxe-hamper.jpg',tag:'Year end',desc:'Coffee, chocolate, candle and celebration treats in a keepsake basket.',choice:'Style',options:['Warm & classic','Green & gold','Bright celebration']},
  {id:'team-thanks',name:'Team Thank-you',category:'Occasion Gifts',occasion:'End of year',price:95000,image:IMG+'luxe-hamper.jpg',tag:'Corporate',desc:'A polished individual gift for clients, partners and team members.',choice:'Style',options:['Classic','Festive','Corporate branded']},
  {id:'always-you',name:'Always You',category:'Occasion Gifts',occasion:'Anniversary',price:145000,image:IMG+'roses.jpg',tag:'Romantic',desc:'Statement roses, a petite cake and a personal love note.',choice:'Flower mood',options:['Deep red','Soft blush','White romance']},
  {id:'warm-thanks',name:'Warmest Thanks',category:'Occasion Gifts',occasion:'Thank you',price:65000,image:IMG+'kin-kind-still-life.png'.replace('assets/catalog/','assets/'),tag:'Under 70K',desc:'Flowers, chocolate and a thoughtful thank-you card.',choice:'Colour mood',options:['Bright mixed','Soft blush','White & green']},
  {id:'bright-bouquet',name:'The Bright Bouquet',category:'Flowers',occasion:'Birthday',price:55000,image:IMG+'roses.jpg',tag:'Fresh today',desc:'A joyful hand-tied arrangement of bright seasonal flowers.',choice:'Colour mood',options:['Bright mixed','Coral & pink','Yellow sunshine']},
  {id:'classic-roses',name:'Classic Roses',category:'Flowers',occasion:'Anniversary',price:70000,image:IMG+'roses.jpg',tag:'Classic',desc:'Elegant roses with foliage, ribbon and your personal message.',choice:'Colour mood',options:['Deep red','Soft blush','Pure white']},
  {id:'gentle-blooms',name:'Gentle Blooms',category:'Flowers',occasion:'Thank you',price:60000,image:IMG+'cake-flowers.jpg',tag:'Soft & lovely',desc:'A delicate seasonal bouquet in a calm, elegant palette.',choice:'Colour mood',options:['Soft blush','White & green','Lilac mood']},
  {id:'grand-arrangement',name:'The Grand Arrangement',category:'Flowers',occasion:'Celebration',price:125000,image:IMG+'roses.jpg',tag:'Showstopper',desc:'A statement arrangement designed for milestones and entrances.',choice:'Colour mood',options:['Bold romance','Modern white','Bright celebration']},
  {id:'mini-party-cake',name:'Mini Party Cake',category:'Cakes',occasion:'Birthday',price:45000,image:IMG+'birthday-cake.jpg',tag:'Same-day',desc:'A petite celebration cake for four to six people.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet','Lemon']},
  {id:'signature-cake',name:'Signature Celebration Cake',category:'Cakes',occasion:'Celebration',price:75000,image:IMG+'cake-flowers.jpg',tag:'Most chosen',desc:'A beautifully finished cake for eight to twelve people.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet','Lemon']},
  {id:'flower-crown-cake',name:'Flower Crown Cake',category:'Cakes',occasion:'Anniversary',price:95000,image:IMG+'cake-flowers.jpg',tag:'Floral finish',desc:'An elegant celebration cake finished with seasonal flowers.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet']},
  {id:'grand-party-cake',name:'Grand Party Cake',category:'Cakes',occasion:'Celebration',price:145000,image:IMG+'cake-flowers.jpg',tag:'Feeds 20+',desc:'A generous custom cake for graduations, birthdays and gatherings.',choice:'Cake flavour',options:['Chocolate','Vanilla','Red velvet','Lemon']}
];

const occasionCopy = {
  'Birthday':'Joyful cakes, bright flowers and a little extra sparkle.',
  'Graduation':'Mark the hard work with a proud, polished gift.',
  'Child birth':'Gentle gifts for the baby and a little care for the parents.',
  'Apology':'When the words matter, send them with sincerity.',
  'Christmas':'Festive baskets and thoughtful gifts made for sharing.',
  'End of year':'Thank clients, teams and loved ones for a year well spent.',
  'Anniversary':'Romantic flowers and sweet details for your person.',
  'Thank you':'Warm, easy gifts that say you noticed and you appreciate it.'
};
const deliveryFees = {'Central Kampala':8000,'Greater Kampala':12000,'Wakiso':20000,'Entebbe':25000,'Other area':0};
const packageExtras = {'Simple':0,'Signature':35000,'Grand':80000};
const state = {active:null,filter:'All',search:'',bag:JSON.parse(localStorage.getItem('kin-kind-bag-v2') || '[]')};
const page = document.body.dataset.page;
const money = value => `UGX ${Number(value).toLocaleString('en-UG')}`;
const esc = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const byId = id => document.getElementById(id);

function header() {
  const nav = [['home','index.html','Home'],['shop','shop.html','Shop'],['occasions','occasions.html','Occasions'],['flowers','flowers.html','Flowers'],['cakes','cakes.html','Cakes'],['about','about.html','Our story'],['contact','contact.html','Contact']];
  byId('siteHeader').innerHTML = `<div class="utility-bar"><div class="utility-inner shell"><span><b>✦</b> Same-day Kampala delivery on selected gifts</span><span><b>◉</b> Order support on WhatsApp</span></div></div><header class="main-header"><div class="header-inner shell"><a class="brand" href="index.html"><span class="brand-mark">K&amp;K</span><span class="brand-copy"><strong>Kin &amp; Kind</strong><small>Gifts for every feeling</small></span></a><nav class="nav" aria-label="Main navigation">${nav.map(([key,url,label])=>`<a class="${page===key?'active':''}" href="${url}">${label}</a>`).join('')}</nav><div class="header-actions"><button class="icon-btn" id="themeToggle" type="button" aria-label="Switch colour theme">◐</button><button class="bag-btn" id="openBag" type="button">Bag <span id="bagCount">0</span></button></div></div></header>`;
}

function footer() {
  byId('siteFooter').innerHTML = `<section class="newsletter"><div class="newsletter-inner shell"><div><h2>Need help choosing?</h2><p>Tell us the person, the occasion and your budget—we’ll suggest the right gift.</p></div><a class="btn" data-whatsapp="help" href="#">Ask on WhatsApp</a></div></section><footer class="site-footer"><div class="footer-grid shell"><div class="footer-intro"><a class="brand" href="index.html"><span class="brand-mark">K&amp;K</span><span class="brand-copy"><strong>Kin &amp; Kind</strong><small style="color:rgba(255,255,255,.55)">Gifts for every feeling</small></span></a><p>Flowers, cakes and occasion gifts, thoughtfully prepared in Kampala.</p></div><div class="footer-column"><strong>Shop</strong><a href="shop.html">All gifts</a><a href="flowers.html">Flowers</a><a href="cakes.html">Cakes</a><a href="occasions.html">By occasion</a></div><div class="footer-column"><strong>Help</strong><a href="contact.html">Delivery guide</a><a href="contact.html">FAQs</a><a href="contact.html">Contact us</a><a href="about.html">Our story</a></div><div class="footer-column"><strong>Delivery</strong><p>Kampala · Wakiso · Entebbe</p><p>Monday–Saturday<br>8:00 AM–7:00 PM</p></div></div><div class="footer-bottom shell"><span>© ${new Date().getFullYear()} Kin & Kind</span><span class="image-credits">Photography: Unsplash & Pexels contributors</span></div></footer>`;
}

function storeUi() {
  byId('storeUi').innerHTML = `<div class="overlay" id="overlay" hidden></div><section class="drawer" id="productDrawer" role="dialog" aria-modal="true" aria-labelledby="detailName" hidden><div class="drawer-head"><span>Choose your gift</span><button class="close-btn" data-close type="button" aria-label="Close">×</button></div><div class="product-detail-media"><img id="detailImage" alt=""></div><div class="product-detail-content"><p class="kicker" id="detailCategory"></p><h2 id="detailName"></h2><p class="detail-price" id="detailPrice"></p><p class="detail-desc" id="detailDesc"></p><form id="productForm"><label>Package size<select id="packageSize"><option value="Simple">Simple — base price</option><option value="Signature">Signature — + UGX 35,000</option><option value="Grand">Grand — + UGX 80,000</option></select></label><label id="choiceLabel"><span id="choiceText">Style</span><select id="productChoice"></select></label><label>Gift message <span>optional</span><textarea id="giftMessage" rows="3" maxlength="160" placeholder="Write a short note for the card"></textarea></label><button class="btn btn-orange full" type="submit">Add to bag · <span id="addPrice"></span></button></form></div></section><aside class="drawer" id="bagDrawer" aria-labelledby="bagTitle" hidden><div class="drawer-head"><h2 id="bagTitle">Your bag</h2><button class="close-btn" data-close type="button" aria-label="Close bag">×</button></div><div class="bag-items" id="bagItems"></div><div class="empty-bag" id="emptyBag"><b>◇</b><h3>Your bag is waiting</h3><p>Choose something thoughtful and it will appear here.</p><a class="btn btn-green" href="shop.html">Browse gifts</a></div><div class="checkout" id="checkout" hidden><form id="checkoutForm"><h3>Delivery details</h3><div class="field-row"><label>Your name<input name="customerName" autocomplete="name" required></label><label>Your phone<input name="customerPhone" inputmode="tel" autocomplete="tel" required></label></div><div class="field-row"><label>Recipient’s name<input name="recipientName" required></label><label>Recipient’s phone<input name="recipientPhone" inputmode="tel" required></label></div><label>Delivery area<select name="zone" id="deliveryZone" required><option value="">Choose an area</option>${Object.entries(deliveryFees).map(([name,fee])=>`<option value="${name}">${name} — ${fee?money(fee):'quote needed'}</option>`).join('')}</select></label><label>Address & landmark<textarea name="address" rows="2" required></textarea></label><label>Delivery date<input name="date" id="deliveryDate" type="date" required></label><label class="check"><input name="surprise" type="checkbox"> Keep it a surprise—contact me first</label><div class="totals"><div><span>Gifts</span><span id="subtotal">UGX 0</span></div><div><span>Delivery</span><span id="deliveryFee">Choose area</span></div><div class="grand"><strong>Total</strong><strong id="total">UGX 0</strong></div></div><button class="btn btn-green full" type="submit">Send order on WhatsApp</button><p class="fine-print">We’ll confirm availability, final delivery details and payment before preparing your order.</p></form></div></aside><div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

function productCard(product) {
  return `<article class="product-card"><div class="product-media" data-product="${product.id}" tabindex="0" role="button" aria-label="Choose ${esc(product.name)}"><img src="${product.image}" alt="${esc(product.name)}" loading="lazy">${product.tag?`<span class="pill">${esc(product.tag)}</span>`:''}<button class="quick-btn" type="button" data-product="${product.id}" aria-label="Add ${esc(product.name)}">+</button></div><div class="product-body"><span class="product-category">${esc(product.occasion)}</span><h3>${esc(product.name)}</h3><p>${esc(product.desc)}</p><div class="product-bottom"><strong>From ${money(product.price)}</strong><button type="button" data-product="${product.id}">Choose</button></div></div></article>`;
}

function renderLists() {
  document.querySelectorAll('[data-product-list]').forEach(list => {
    const type = list.dataset.productList;
    let matches = type === 'all' ? products : type === 'featured' ? products.filter(p=>['birthday-bliss','graduate-glow','welcome-little-one','peace-offering','christmas-table','year-well-spent','bright-bouquet','signature-cake'].includes(p.id)) : products.filter(p=>p.category===type);
    if (type === 'all') matches = matches.filter(p => (state.filter==='All'||p.category===state.filter) && `${p.name} ${p.occasion} ${p.desc}`.toLowerCase().includes(state.search.toLowerCase()));
    list.innerHTML = matches.map(productCard).join('') || '<p>No gifts match your search.</p>';
  });
}

function renderOccasions() {
  const root = byId('occasionSections');
  if (!root) return;
  const slug = name => name.toLowerCase().replace(/\s+/g,'-');
  root.innerHTML = Object.entries(occasionCopy).map(([name,copy]) => `<section class="occasion-group" id="${slug(name)}"><div class="occasion-group-head"><div><p class="kicker">${esc(name)} gifts</p><h2>${esc(name)}</h2></div><p>${esc(copy)}</p></div><div class="product-grid light-grid">${products.filter(p=>p.occasion===name).slice(0,4).map(productCard).join('')}</div></section>`).join('');
}

function setupShopFilters() {
  const root = byId('productFilters'); if (!root) return;
  const cats = ['All','Occasion Gifts','Flowers','Cakes'];
  root.innerHTML = cats.map(c=>`<button class="chip ${c==='All'?'active':''}" data-filter="${c}" type="button">${c}</button>`).join('');
  root.addEventListener('click', e => { const b=e.target.closest('[data-filter]'); if(!b)return; state.filter=b.dataset.filter; root.querySelectorAll('.chip').forEach(x=>x.classList.toggle('active',x===b)); renderLists(); });
  byId('productSearch').addEventListener('input', e => { state.search=e.target.value; renderLists(); });
}

function show(id) { byId('overlay').hidden=false; byId(id).hidden=false; document.body.classList.add('drawer-open'); const f=byId(id).querySelector('button,input,select,textarea,a'); if(f)setTimeout(()=>f.focus(),20); }
function closeAll() { byId('overlay').hidden=true; byId('productDrawer').hidden=true; byId('bagDrawer').hidden=true; document.body.classList.remove('drawer-open'); }
function openProduct(id) {
  const p=products.find(x=>x.id===id); if(!p)return; state.active=p;
  byId('detailImage').src=p.image; byId('detailImage').alt=p.name; byId('detailCategory').textContent=`${p.occasion} · ${p.category}`; byId('detailName').textContent=p.name; byId('detailDesc').textContent=p.desc; byId('detailPrice').textContent=`From ${money(p.price)}`; byId('choiceText').textContent=p.choice; byId('productChoice').innerHTML=p.options.map(o=>`<option>${esc(o)}</option>`).join(''); byId('packageSize').value='Simple'; byId('giftMessage').value=''; updateAddPrice(); show('productDrawer');
}
function updateAddPrice() { if(state.active) byId('addPrice').textContent=money(state.active.price+packageExtras[byId('packageSize').value]); }
function saveBag() { localStorage.setItem('kin-kind-bag-v2',JSON.stringify(state.bag)); renderBag(); }
function renderBag() {
  const count=state.bag.reduce((s,i)=>s+i.quantity,0); byId('bagCount').textContent=count; byId('emptyBag').hidden=state.bag.length>0; byId('checkout').hidden=!state.bag.length;
  byId('bagItems').innerHTML=state.bag.map((item,i)=>`<div class="bag-item"><img src="${item.image}" alt=""><div><h3>${esc(item.name)}</h3><p>${esc(item.package)} · ${esc(item.choice)}${item.message?` · “${esc(item.message)}”`:''}</p><div class="qty"><button type="button" data-qty="${i}" data-delta="-1">−</button><span>${item.quantity}</span><button type="button" data-qty="${i}" data-delta="1">+</button></div></div><div><strong>${money(item.unitPrice*item.quantity)}</strong><br><button class="remove" data-remove="${i}" type="button">Remove</button></div></div>`).join(''); updateTotals();
}
function updateTotals() { const sub=state.bag.reduce((s,i)=>s+i.unitPrice*i.quantity,0); const zone=byId('deliveryZone')?.value||''; const fee=deliveryFees[zone]||0; byId('subtotal').textContent=money(sub); byId('deliveryFee').textContent=!zone?'Choose area':zone==='Other area'?'To be confirmed':money(fee); byId('total').textContent=zone==='Other area'?`${money(sub)} + delivery`:money(sub+fee); }
function notify(message) { const t=byId('toast'); t.textContent=message; t.classList.add('show'); clearTimeout(notify.timer); notify.timer=setTimeout(()=>t.classList.remove('show'),2200); }

function bindStore() {
  document.addEventListener('click', e => {
    const product=e.target.closest('[data-product]'); if(product){openProduct(product.dataset.product);return;}
    if(e.target.closest('[data-close]')||e.target===byId('overlay')) closeAll();
    const wa=e.target.closest('[data-whatsapp]'); if(wa){ e.preventDefault(); window.open(`https://wa.me/?text=${encodeURIComponent("Hello Kin & Kind, I'd like help choosing a gift.")}`,'_blank','noopener'); }
  });
  document.addEventListener('keydown', e => { if(e.key==='Escape')closeAll(); if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-product]')){e.preventDefault();openProduct(e.target.dataset.product);} });
  byId('openBag').addEventListener('click',()=>show('bagDrawer'));
  byId('themeToggle').addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;localStorage.setItem('kin-kind-theme',next);});
  byId('packageSize').addEventListener('change',updateAddPrice);
  byId('productForm').addEventListener('submit',e=>{e.preventDefault();const p=state.active;const pack=byId('packageSize').value;const item={id:p.id,name:p.name,image:p.image,package:pack,choice:byId('productChoice').value,message:byId('giftMessage').value.trim(),unitPrice:p.price+packageExtras[pack],quantity:1};const old=state.bag.find(x=>x.id===item.id&&x.package===item.package&&x.choice===item.choice&&x.message===item.message);old?old.quantity++:state.bag.push(item);saveBag();closeAll();notify(`${p.name} added to your bag`);});
  byId('bagItems').addEventListener('click',e=>{const q=e.target.closest('[data-qty]');const r=e.target.closest('[data-remove]');if(q){const i=Number(q.dataset.qty);state.bag[i].quantity+=Number(q.dataset.delta);if(state.bag[i].quantity<1)state.bag.splice(i,1);saveBag();}if(r){state.bag.splice(Number(r.dataset.remove),1);saveBag();}});
  byId('deliveryZone').addEventListener('change',updateTotals);
  byId('checkoutForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget);const zone=d.get('zone');const sub=state.bag.reduce((s,i)=>s+i.unitPrice*i.quantity,0);const fee=deliveryFees[zone]||0;const lines=state.bag.map((i,n)=>`${n+1}. ${i.name} × ${i.quantity} — ${money(i.unitPrice*i.quantity)}\n   ${i.package} · ${i.choice}${i.message?` · Card: “${i.message}”`:''}`);const total=zone==='Other area'?`${money(sub)} + delivery quote`:money(sub+fee);const msg=`Hello Kin & Kind! I'd like to place this order:\n\n${lines.join('\n')}\n\nGifts: ${money(sub)}\nDelivery: ${zone==='Other area'?'Quote needed':money(fee)}\nTOTAL: ${total}\n\nFROM\n${d.get('customerName')} · ${d.get('customerPhone')}\n\nDELIVER TO\n${d.get('recipientName')} · ${d.get('recipientPhone')}\n${d.get('address')}, ${zone}\nDate: ${d.get('date')}\n${d.get('surprise')?'Please keep this a surprise and contact me first.':'You may contact the recipient for delivery.'}`;window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`,'_blank','noopener');});
}

function registerTools() {
  const ctx=document.modelContext;if(!ctx?.registerTool)return;const life=new AbortController();const reg=t=>Promise.resolve(ctx.registerTool(t,{signal:life.signal})).catch(()=>{});
  reg({name:'list_gifts',title:'List gifts',description:'List Kin & Kind gifts with category, occasion and UGX prices.',inputSchema:{type:'object',properties:{occasion:{type:'string'},category:{type:'string',enum:['Occasion Gifts','Flowers','Cakes']}},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input={}){return{gifts:products.filter(p=>(!input.occasion||p.occasion===input.occasion)&&(!input.category||p.category===input.category)).map(p=>({id:p.id,name:p.name,occasion:p.occasion,category:p.category,price_ugx:p.price}))}}});
  reg({name:'add_gift_to_bag',title:'Add gift to bag',description:'Add one available gift to the visible Kin & Kind shopping bag.',inputSchema:{type:'object',properties:{product_id:{type:'string'},package:{type:'string',enum:['Simple','Signature','Grand']},quantity:{type:'integer',minimum:1,maximum:10},message:{type:'string',maxLength:160}},required:['product_id'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){const p=products.find(x=>x.id===input.product_id);if(!p)throw new Error('Gift not found.');const pack=input.package||'Simple';const qty=input.quantity||1;state.bag.push({id:p.id,name:p.name,image:p.image,package:pack,choice:p.options[0],message:String(input.message||''),unitPrice:p.price+packageExtras[pack],quantity:qty});saveBag();return{added:true,product_id:p.id,quantity:qty,bag_count:state.bag.reduce((s,i)=>s+i.quantity,0)}}});
}

document.documentElement.dataset.theme=localStorage.getItem('kin-kind-theme')||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
header(); footer(); storeUi(); renderOccasions(); setupShopFilters(); renderLists(); bindStore(); renderBag(); registerTools();
const today=new Date();const tomorrow=new Date(today);tomorrow.setDate(today.getDate()+1);byId('deliveryDate').min=today.toISOString().slice(0,10);byId('deliveryDate').value=tomorrow.toISOString().slice(0,10);
