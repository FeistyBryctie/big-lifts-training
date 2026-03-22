// Big Lifts Training — Service Worker
const CACHE_NAME = 'blt-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', e => {
  // Pass through all requests — no caching for now
  // This prevents the SW from interfering with API calls
});
