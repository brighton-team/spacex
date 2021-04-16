/* eslint-disable no-restricted-globals */
const version = 'v1::'; // Change if you want to regenerate cache
const staticCacheName = `${version}static-resources`;

const offlineData = ['/', '/play', '/index.tsx', '/bundle.js'];

this.addEventListener('install', (event) => {
  event.waitUntil(caches.open(staticCacheName).then((cache) => cache.addAll(offlineData)));
});

this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => !key.startsWith(version)).map((key) => caches.delete(key))
      );
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      const fetchRequest = event.request.clone();
      // eslint-disable-next-line @typescript-eslint/no-shadow
      return fetch(fetchRequest).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(staticCacheName).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
