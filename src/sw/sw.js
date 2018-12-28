importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Workbox is loaded 🎉`);
  
  // Force development builds
  workbox.setConfig({ debug: true });
  
  // // Force production builds
  // workbox.setConfig({ debug: false });

  // The most verbose - displays all logs.
  workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
  // // Shows logs, warnings and errors.
  // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.log);
  
  // // Show warnings and errors.
  // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);
  
  // // Show *just* errors
  // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.error);
  
  // // Silence all of the Workbox logs.
  // workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);
  
  workbox.precaching.precacheAndRoute([]);

  workbox.core.setCacheNameDetails({
    prefix: 'express',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime'
  });

  // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'google-fonts-stylesheets',
    })
  );

  // Cache the underlying font files with a cache-first strategy for 1 year.
  workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts-webfonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.Plugin({
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        }),
      ],
    })
  );

  //use a cache-first images, by matching against a list of known extensions
  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    })
  );

  //use a stale-while-revalidate strategy for CSS and JavaScript files that aren't precached
  workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );








} else {
  console.log(`Workbox didn't load 😬`);
}