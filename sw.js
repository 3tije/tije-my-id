const CACHE="mytije-landing-v2-final-1";
const ASSETS=["./","./index.html","./assets/css/style.css","./assets/js/config.js","./assets/js/app.js","./assets/js/content.js","./manifest.webmanifest","./assets/img/mytije-logo.png","./assets/icons/icon-192.png","./assets/icons/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)))});
