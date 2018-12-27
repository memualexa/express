importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  
  workbox.precaching.precacheAndRoute([
  {
    "url": "candle.svg",
    "revision": "cb65a58be2667f3965b993f48fa946db"
  },
  {
    "url": "christmas-day.svg",
    "revision": "64e99eaf30d51a2e73665b5b10c0de2c"
  }
]);

  workbox.core.setCacheNameDetails({
    prefix: 'express',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime'
  });

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}