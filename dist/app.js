const products = [
  { id: 'little-luxuries', name: 'Little Luxuries Box', category: 'Hampers', price: 85000, note: 'Candle, artisan chocolate, tea and a handwritten card.', tag: 'Bestseller', pos: '62%' },
  { id: 'bloom-bright', name: 'Bloom Bright', category: 'Flowers', price: 65000, note: 'A joyful seasonal bouquet, wrapped and ribboned by hand.', tag: 'Fresh today', pos: '38%' },
  { id: 'soft-landing', name: 'Soft Landing', category: 'Self-care', price: 110000, note: 'Body oil, candle, bath salts, tea and a soft eye mask.', tag: 'New', pos: '72%' },
  { id: 'well-deserved', name: 'Well Deserved', category: 'For him', price: 125000, note: 'Coffee, leather card holder, chocolate and a polished note.', tag: '', pos: '88%' },
  { id: 'birthday-main', name: 'Birthday Main Character', category: 'Celebrations', price: 145000, note: 'Flowers, cake bites, bubbles and a full-size celebration box.', tag: 'Party pick', pos: '54%' },
  { id: 'home-heart', name: 'Home & Heart', category: 'Hampers', price: 185000, note: 'A woven keepsake basket filled with comfort and flavour.', tag: 'Generous', pos: '95%' },
  { id: 'bright-note', name: 'A Bright Note', category: 'Celebrations', price: 45000, note: 'Mini flowers, chocolate and your message on a keepsake card.', tag: 'Under 50K', pos: '44%' },
  { id: 'team-thanks', name: 'Team Thank-you', category: 'Corporate', price: 95000, note: 'A polished client or team gift with custom message card.', tag: 'Customisable', pos: '68%' }
];

const deliveryFees = { 'Central Kampala': 8000, 'Greater Kampala': 12000, 'Wakiso': 20000, 'Entebbe': 25000, 'Other area': 0 };
const state = { filter: 'All gifts', activeProduct: null, bag: JSON.parse(localStorage.getItem('kin-kind-bag') || '[]') };
const format = value => `UGX ${Number(value).toLocaleString('en-UG')}`;
const byId = id => document.getElementById(id);

const categories = ['All gifts', ...new Set(products.map(product => product.category))];
byId('filters').innerHTML = categories.map((category, i) => `<button class="filter${i === 0 ? ' active' : ''}" type="button" data-filter="${category}">${category}</button>`).join('');

function renderProducts() {
  const filtered = state.filter === 'All gifts' ? products : products.filter(product => product.category === state.filter);
  byId('productGrid').innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image" data-product="${product.id}" style="background-position:${product.pos} center" tabindex="0" role="button" aria-label="View ${product.name}">
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ''}
        <button class="quick-add" data-product="${product.id}" type="button" aria-label="Choose options for ${product.name}">+</button>
      </div>
      <div class="product-info"><h3>${product.name}</h3><strong>${format(product.price)}</strong><p>${product.note}</p></div>
    </article>`).join('');
  byId('emptyState').hidden = filtered.length > 0;
}

function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  state.activeProduct = product;
  byId('productName').textContent = product.name;
  byId('productCategory').textContent = product.category;
  byId('productPrice').textContent = format(product.price);
  byId('productSubmitPrice').textContent = format(product.price);
  byId('productDescription').textContent = product.note;
  byId('productMedia').style.backgroundPosition = `${product.pos} center`;
  byId('wrapOption').value = 'Signature wrap';
  byId('giftMessage').value = '';
  showPanel('productDrawer');
}

function showPanel(id) {
  byId('overlay').hidden = false;
  byId(id).hidden = false;
  document.body.classList.add('drawer-open');
  if (id === 'bagDrawer') byId('openBag').setAttribute('aria-expanded', 'true');
  const focusable = byId(id).querySelector('button, input, select, textarea, a');
  if (focusable) setTimeout(() => focusable.focus(), 20);
}

function closePanels() {
  byId('overlay').hidden = true;
  byId('productDrawer').hidden = true;
  byId('bagDrawer').hidden = true;
  document.body.classList.remove('drawer-open');
  byId('openBag').setAttribute('aria-expanded', 'false');
}

function saveBag() {
  localStorage.setItem('kin-kind-bag', JSON.stringify(state.bag));
  renderBag();
}

function renderBag() {
  const totalQty = state.bag.reduce((sum, item) => sum + item.quantity, 0);
  byId('bagCount').textContent = totalQty;
  byId('bagEmpty').hidden = state.bag.length > 0;
  byId('bagCheckout').hidden = state.bag.length === 0;
  byId('bagItems').innerHTML = state.bag.map((item, index) => `
    <div class="bag-item">
      <div class="bag-thumb" style="background-position:${item.pos} center"></div>
      <div><h3>${item.name}</h3><p class="bag-meta">${item.wrap}${item.message ? ` · “${item.message}”` : ''}</p>
        <div class="qty"><button type="button" data-qty="${index}" data-delta="-1" aria-label="Reduce quantity">−</button><span>${item.quantity}</span><button type="button" data-qty="${index}" data-delta="1" aria-label="Increase quantity">+</button></div>
      </div>
      <div><strong>${format(item.unitPrice * item.quantity)}</strong><br><button class="remove" type="button" data-remove="${index}">Remove</button></div>
    </div>`).join('');
  updateTotals();
}

function updateTotals() {
  const subtotal = state.bag.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const zone = byId('deliveryZone').value;
  const fee = deliveryFees[zone] || 0;
  byId('subtotal').textContent = format(subtotal);
  byId('deliveryFee').textContent = zone ? (zone === 'Other area' ? 'To be confirmed' : format(fee)) : 'Choose area';
  byId('total').textContent = zone === 'Other area' ? `${format(subtotal)} + delivery` : format(subtotal + fee);
}

function toast(message) {
  byId('toast').textContent = message;
  byId('toast').classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => byId('toast').classList.remove('show'), 2200);
}

byId('filters').addEventListener('click', event => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  state.filter = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => item.classList.toggle('active', item === button));
  renderProducts();
});

byId('productGrid').addEventListener('click', event => {
  const target = event.target.closest('[data-product]');
  if (target) openProduct(target.dataset.product);
});

byId('productGrid').addEventListener('keydown', event => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-product]')) {
    event.preventDefault(); openProduct(event.target.dataset.product);
  }
});

byId('wrapOption').addEventListener('change', event => {
  const extra = event.target.value === 'Keepsake box' ? 12000 : 0;
  byId('productSubmitPrice').textContent = format(state.activeProduct.price + extra);
});

byId('productForm').addEventListener('submit', event => {
  event.preventDefault();
  const product = state.activeProduct;
  const wrap = byId('wrapOption').value;
  const unitPrice = product.price + (wrap === 'Keepsake box' ? 12000 : 0);
  const newItem = { ...product, wrap, message: byId('giftMessage').value.trim(), unitPrice, quantity: 1 };
  const existing = state.bag.find(item => item.id === newItem.id && item.wrap === newItem.wrap && item.message === newItem.message);
  existing ? existing.quantity++ : state.bag.push(newItem);
  saveBag(); closePanels(); toast(`${product.name} added to your bag`);
});

byId('openBag').addEventListener('click', () => showPanel('bagDrawer'));
byId('overlay').addEventListener('click', closePanels);
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', closePanels));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closePanels(); });

byId('bagItems').addEventListener('click', event => {
  const qty = event.target.closest('[data-qty]');
  const remove = event.target.closest('[data-remove]');
  if (qty) {
    const item = state.bag[Number(qty.dataset.qty)];
    item.quantity += Number(qty.dataset.delta);
    if (item.quantity <= 0) state.bag.splice(Number(qty.dataset.qty), 1);
    saveBag();
  }
  if (remove) { state.bag.splice(Number(remove.dataset.remove), 1); saveBag(); }
});

byId('deliveryZone').addEventListener('change', updateTotals);
byId('checkoutForm').addEventListener('submit', event => {
  event.preventDefault();
  if (!state.bag.length) return;
  const data = new FormData(event.currentTarget);
  const zone = data.get('zone');
  const subtotal = state.bag.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const fee = deliveryFees[zone] || 0;
  const lines = state.bag.map((item, index) => `${index + 1}. ${item.name} × ${item.quantity} — ${format(item.unitPrice * item.quantity)}\n   ${item.wrap}${item.message ? ` | Card: “${item.message}”` : ''}`);
  const total = zone === 'Other area' ? `${format(subtotal)} + delivery quote` : format(subtotal + fee);
  const message = `Hello Kin & Kind! I’d like to place this order:\n\n${lines.join('\n')}\n\nGifts: ${format(subtotal)}\nDelivery: ${zone === 'Other area' ? 'Quote needed' : format(fee)}\nTOTAL: ${total}\n\nFROM\n${data.get('customerName')} · ${data.get('customerPhone')}\n\nDELIVER TO\n${data.get('recipientName')} · ${data.get('recipientPhone')}\n${data.get('address')}, ${zone}\nDate: ${data.get('date')}\n${data.get('surprise') ? 'Please keep this a surprise and contact me first.' : 'You may contact the recipient for delivery.'}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
byId('deliveryDate').min = new Date().toISOString().slice(0, 10);
byId('deliveryDate').value = tomorrow.toISOString().slice(0, 10);
byId('year').textContent = new Date().getFullYear();
renderProducts(); renderBag();

function registerShopTools() {
  const context = document.modelContext;
  if (!context?.registerTool) return;
  const lifecycle = new AbortController();
  const register = tool => Promise.resolve(context.registerTool(tool, { signal: lifecycle.signal })).catch(() => {});

  register({
    name: 'list_gifts',
    title: 'List available gifts',
    description: 'List Kin & Kind gifts, optionally filtered by category, with current UGX prices.',
    inputSchema: {
      type: 'object',
      properties: { category: { type: 'string', enum: categories.slice(1) } },
      additionalProperties: false
    },
    annotations: { readOnlyHint: true, untrustedContentHint: false },
    execute(input = {}) {
      const matches = input.category ? products.filter(product => product.category === input.category) : products;
      return { gifts: matches.map(({ id, name, category, price, note }) => ({ id, name, category, price_ugx: price, description: note })) };
    }
  });

  register({
    name: 'add_gift_to_bag',
    title: 'Add a gift to the bag',
    description: 'Add a Kin & Kind product to the visible shopping bag with presentation, quantity and optional card message.',
    inputSchema: {
      type: 'object',
      properties: {
        product_id: { type: 'string', enum: products.map(product => product.id) },
        quantity: { type: 'integer', minimum: 1, maximum: 10 },
        presentation: { type: 'string', enum: ['Signature wrap', 'Keepsake box'] },
        message: { type: 'string', maxLength: 140 }
      },
      required: ['product_id'],
      additionalProperties: false
    },
    annotations: { readOnlyHint: false, untrustedContentHint: false },
    execute(input) {
      const product = products.find(item => item.id === input.product_id);
      if (!product) throw new Error('Gift not found.');
      const quantity = Number.isInteger(input.quantity) ? input.quantity : 1;
      if (quantity < 1 || quantity > 10) throw new Error('Quantity must be between 1 and 10.');
      const wrap = input.presentation || 'Signature wrap';
      const message = String(input.message || '').trim();
      const unitPrice = product.price + (wrap === 'Keepsake box' ? 12000 : 0);
      const existing = state.bag.find(item => item.id === product.id && item.wrap === wrap && item.message === message);
      existing ? existing.quantity += quantity : state.bag.push({ ...product, wrap, message, unitPrice, quantity });
      saveBag();
      return { added: true, product_id: product.id, quantity, bag_count: state.bag.reduce((sum, item) => sum + item.quantity, 0) };
    }
  });
}

registerShopTools();
