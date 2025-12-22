const CACHE_NAME = 'aurvo-v10-final';
const ASSETS = ['./', './index.html', './style.css'];

self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
