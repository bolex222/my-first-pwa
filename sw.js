self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('first-pwa').then((cache) => cache.addAll([
      '/my-first-pwa/',
      '/my-first-pwa/index.html',
      '/my-first-pwa/app.js',
      '/my-first-pwa/style.css',
      '/my-first-pwa/img/logo.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});