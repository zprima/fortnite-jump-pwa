self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('the-magic-cache').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/app.js',
        '/sw.js',
        '/styles.css'
      ]);
    })
  );
});