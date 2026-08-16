const CACHE = "tije-hub-v7";
const ASSETS = ["./","index.html","styles.css?v=6","app.js?v=6","config.js?v=6","manifest.webmanifest","assets/mytije-icon.svg","assets/icons/icon-180.png","assets/icons/icon-192.png","assets/icons/icon-512.png","assets/tije-ruang-kerja.png","assets/tri-tjahyono.webp","assets/tri-formal.jpg","assets/tri-seragam.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
