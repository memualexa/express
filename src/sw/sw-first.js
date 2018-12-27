
self.addEventListener('install', event => {
  console.log('res1 V2 installing…');

  // cache a cat SVG
  event.waitUntil(
    caches.open('static-v2').then(cache => cache.add('/res1/christmas-day.svg'))
  );
});

self.addEventListener('activate', event => {
  console.log('res1 V2 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // serve the cat SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  if (url.origin == location.origin && url.pathname == '/res1/candle.svg') {
    event.respondWith(caches.match('/res1/christmas-day.svg'));
  }
});
