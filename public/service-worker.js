/* eslint-env serviceworker */
// public/service-worker.js
const CACHE_NAME = 'shonlittle-portfolio-v1';
const OFFLINE_URL = '/offline.html';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/static/js/main.chunk.js',
  '/static/js/0.chunk.js',
  '/static/js/bundle.js',
  '/manifest.json',
  '/favicon.ico',
  '/images/software.webp',
  '/images/acting.webp',
  '/pdf/shon-little-resume-2025.pdf',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
];

// Install a service worker
globalThis.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
globalThis.addEventListener('fetch', event => {
  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // If offline and requesting a page, show offline page
        return caches.match(OFFLINE_URL);
      })
    );
    return;
  }

  // Handle other requests (assets, API calls, etc.)
  event.respondWith(
    caches.match(event.request).then(response => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request - fetch() uses up the request once consumed
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest)
        .then(networkResponse => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response
          const responseToCache = networkResponse.clone();

          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        })
        .catch(error => {
          console.error('Fetch failed:', error);
          // For image requests, you could return a default offline image
          if (event.request.destination === 'image') {
            return caches.match('/favicon.ico'); // Fallback image
          }

          // For other resources, just propagate the error
          throw error;
        });
    })
  );
});

// Update a service worker
globalThis.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheWhitelist.indexOf(cacheName) === -1)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});
