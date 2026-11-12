import {icon,escapeHTML,money} from "../components/ui.js";

const statusLabel={pending:"Inasubiri",confirmed:"Imethibitishwa",processing:"Inaandaliwa",shipped:"Imetumwa",delivered:"Imefika",completed:"Imekamilika",cancelled:"Imeghairiwa"};
const row=(ico,label,right)=>`<div class="status-row"><span>${icon(ico,16)} ${label}</span>${right}</div>`;
const link=(route,text="Fungua →")=>`<button class="text-link" data-route="${route}">${text}</button>`;
const act=(action,text="Fungua →")=>`<button class="text-link" data-action="${action}">${text}</button>`;

export function accountPage(user,profile,application,extra={}){
  if(!user)return `<main class="page-wrap">${emptyAccount()}</main>`;
  const name=profile?.full_name||user.email||"Mteja";
  const isVendor=profile?.role==="vendor";
  const orders=Array.isArray(extra.orders)?extra.orders:[];
  const recent=orders.slice(0,3);
  const since=profile?.created_at?new Date(profile.created_at).toLocaleDateString("sw-TZ",{year:"numeric",month:"long"}):"";
  const roleBadge=isVendor?'<span class="badge badge-blue">Seller</span>':(profile?.is_verified?'<span class="badge badge-gold">Verified Buyer</span>':"");
  return `<main class="page-wrap"><h1 class="page-title">Akaunti yangu</h1><p class="page-subtitle">Simamia taarifa zako na shughuli zako za ZUNE.</p>
  <section class="card animate-in"><div style="display:flex;align-items:center;gap:14px"><div class="store-avatar" style="width:58px;height:58px;font-size:22px">${escapeHTML(name[0]?.toUpperCase()||"Z")}</div><div style="flex:1;min-width:0"><h2 style="margin:0 0 4px;font:800 19px var(--display)">${escapeHTML(name)} ${roleBadge}</h2><div class="small muted">${escapeHTML(user.email||"")}</div>${profile?.phone_number?`<div class="small muted">${escapeHTML(profile.phone_number)}</div>`:""}<div class="small muted">${escapeHTML(profile?.zune_id||"ZUNE Member")} ${profile?.zune_id?`<button class="copy-chip" data-action="copy-zune-id">Nakili</button>`:""}${since?` · Mwanachama tangu ${escapeHTML(since)}`:""}</div></div><button class="btn btn-outline btn-small" data-route="profile-edit">Badili taarifa</button></div></section>

  <section class="section"><div class="stat-grid">
    <button class="stat-card" data-route="orders"><span>Oda zangu</span><strong>${orders.length}</strong><span>Angalia historia</span></button>
    <button class="stat-card" data-route="cart"><span>Cart</span><strong>${Number(extra.cart)||0}</strong><span>Bidhaa kikapuni</span></button>
    <button class="stat-card" data-route="wishlist"><span>Wishlist</span><strong>${Number(extra.wishlist)||0}</strong><span>Ulizohifadhi</span></button>
    <button class="stat-card" data-route="messages"><span>Messages</span><strong>${Number(extra.conversations)||0}</strong><span>Mazungumzo</span></button>
  </div></section>

  <section class="section"><div class="section-head"><h2>Oda za karibuni</h2>${link("orders","Zote →")}</div>${recent.length?`<div class="card" style="padding:4px 18px">${recent.map(o=>`<div class="status-row"><span><b>Oda #${escapeHTML(String(o.id).slice(0,8))}</b><br><small class="muted">${o.created_at?new Date(o.created_at).toLocaleDateString("sw-TZ"):""}${o.products?.title?" · "+escapeHTML(o.products.title):""}</small></span><span style="text-align:right"><b>${money(o.total_price)}</b><br><small class="muted">${escapeHTML(statusLabel[o.status]||o.status||"pending")}</small></span></div>`).join("")}</div>`:`<p class="muted small">Bado hujaweka oda. Oda zako zitaonekana hapa.</p>`}</section>

  <section class="section"><div class="section-head"><h2>Huduma za akaunti</h2></div><div class="card" style="padding:4px 18px">
    ${row("user-round","Taarifa binafsi",link("profile-edit"))}
    ${row("shield-check","Uthibitisho wa akaunti",link("verification","Angalia →"))}
    ${row("store","Seller Center",link(isVendor?"seller-center":"seller-apply",isVendor?"Fungua →":"Become a Seller →"))}
    ${row("bell","Notifications",link("notifications"))}
    ${row("message-circle","WhatsApp Channel",`<a class="text-link" href="${escapeHTML(window.ZUNE_CONFIG.whatsappChannel)}" target="_blank" rel="noopener">Jiunge →</a>`)}
  </div></section>

  <section class="section"><div class="section-head"><h2>Usalama</h2></div><div class="card" style="padding:4px 18px">
    ${row("key-round","Badilisha password",act("change-password","Badilisha →"))}
    ${row("monitor-smartphone","Toka kwenye vifaa vyote",act("logout-all","Toka →"))}
  </div></section>

  <section class="section"><div class="section-head"><h2>Msaada na zaidi</h2></div><div class="card" style="padding:4px 18px">
    ${row("headset","Msaada",link("help"))}
    ${row("message-circle","Wasiliana na ZUNE (WhatsApp)",act("whatsapp-contact","Wasiliana →"))}
    ${row("share-2","Shiriki ZUNE na marafiki",act("share-app","Shiriki →"))}
    ${row("file-text","Masharti ya matumizi",link("terms","Soma →"))}
    ${row("lock","Sera ya faragha",link("privacy","Soma →"))}
    ${row("user-x","Omba kufuta akaunti",act("delete-account","Omba →"))}
  </div></section>

  ${!isVendor?`<section class="section"><div class="seller-banner"><div><b>${application?.status==="pending"?"Ombi lako la Seller linakaguliwa":"Anza kuuza kupitia ZUNE"}</b><p class="small muted">${application?.status==="pending"?"Subiri timu ya ZUNE ikague maombi yako.":"Tuma ombi la kufungua duka lako."}</p></div><button class="btn btn-primary" data-route="seller-apply">${application?.status==="pending"?"Angalia Ombi":"Become a Seller"}</button></div></section>`:""}
  <section class="section"><button class="btn btn-outline" data-action="logout">${icon("log-out",16)} Toka kwenye akaunti</button></section></main>`;
}
function emptyAccount(){return `<div class="empty-state"><div class="empty-icon">${icon("user-round",26)}</div><h3>Ingia kwenye akaunti yako</h3><p>Ingia au jisajili ili kuhifadhi bidhaa, kufuatilia oda na kuwasiliana na wauzaji.</p><button class="btn btn-primary" data-route="login">Ingia / Jisajili</button></div>`;}
