/* eslint-env serviceworker */
// public/service-worker.js

// Bump this version whenever the caching rules below change, so old caches are dropped.
const CACHE_NAME = 'shonlittle-portfolio-v2';
const OFFLINE_URL = '/offline.html';

// Small, stable files that make up the offline shell. Build output under /static/ has hashed
// file names that change on every build, so it is cached at runtime instead of listed here.
const urlsToCache = [OFFLINE_URL, '/manifest.json', '/favicon.ico', '/images/software.webp', '/images/acting.webp'];

// Install the service worker.
globalThis.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      // Cache each file on its own so one missing file cannot fail the whole install.
      .then(cache => Promise.allSettled(urlsToCache.map(url => cache.add(url))))
      .then(() => globalThis.skipWaiting())
  );
});

/**
 * Store a successful same-origin response in the cache.
 * @param {Request} request - Request that was made.
 * @param {Response} response - Response that was received.
 */
const cacheResponse = (request, response) => {
  if (response && response.status === 200 && response.type === 'basic') {
    const responseToCache = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
  }
};

// Serve requests.
globalThis.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Leave non-GET and cross-origin requests (fonts, video embeds, form posts) to the browser.
  if (request.method !== 'GET' || url.origin !== globalThis.location.origin) {
    return;
  }

  // Pages: always go to the network so content is never stale; show the offline page if that fails.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(() => caches.match(OFFLINE_URL)));
    return;
  }

  // Hashed build output never changes for a given URL, so the cache can answer first.
  if (url.pathname.startsWith('/static/')) {
    event.respondWith(
      caches.match(request).then(
        cached =>
          cached ||
          fetch(request).then(response => {
            cacheResponse(request, response);
            return response;
          })
      )
    );
    return;
  }

  // Everything else (images, manifest, PDFs) can change without changing its URL:
  // use the network first and fall back to the cache when offline.
  event.respondWith(
    fetch(request)
      .then(response => {
        cacheResponse(request, response);
        return response;
      })
      .catch(() =>
        caches.match(request).then(cached => {
          if (cached) {
            return cached;
          }
          if (request.destination === 'image') {
            return caches.match('/favicon.ico'); // Fallback image
          }
          return Response.error();
        })
      )
  );
});

// Activate the service worker: drop old caches and take control of open pages.
globalThis.addEventListener('activate', event => {
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.filter(cacheName => cacheName !== CACHE_NAME).map(cacheName => caches.delete(cacheName))
        )
      )
      .then(() => globalThis.clients.claim())
  );
});
