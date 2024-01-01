const CACHE_NAME = 'codelife-stars-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/stars.html',
  '/styles/styles.css',
  '/scripts/app.js',
  '/images/logo.png',
  '/styles/bootstrap.min.css',
  '/styles/bootstrap-grid.min.css',
  '/styles/bootstrap-reboot.min.css',
  '/scripts/bootstrap.min.js',
  '/scripts/bootstrap.bundle.min.js'
  // Add more URLs to cache as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(name => name !== CACHE_NAME)
            .map(name => caches.delete(name))
        );
      })
  );
});
