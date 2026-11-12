const CACHE = "zune-marketplace-v3";
const CORE = ["./","./index.html","./manifest.json","./assets/icons/favicon.svg","./assets/images/product-placeholder.svg",
"./src/styles/tokens.css","./src/styles/app.css","./src/styles/responsive.css","./src/styles/animations.css",
"./src/config/supabase-config.js","./src/config/app-config.js","./src/app/app.js","./src/content/category-guides.js"];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Network-first so new deployments are picked up immediately; cache is the offline fallback.
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  }).catch(()=>caches.match(event.request).then(c=>c||caches.match("./index.html"))));
});
