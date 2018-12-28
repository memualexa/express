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
  
  workbox.precaching.precacheAndRoute([
  {
    "url": "css/site.css",
    "revision": "a5ef2684fba47ce6426051685b3e9d2b"
  },
  {
    "url": "fullscreen.html",
    "revision": "1a44be51e320dbc8423604df631c8ecd"
  },
  {
    "url": "homescreen.html",
    "revision": "0a5bd9a0599c13dac0a01967d60749ee"
  },
  {
    "url": "ico/android-chrome-144x144.png",
    "revision": "0cba71cfff6b2d841c71321eff6ef331"
  },
  {
    "url": "ico/android-chrome-192x192.png",
    "revision": "ce2dd605ccd9d3d11871f6efe665d31c"
  },
  {
    "url": "ico/android-chrome-256x256.png",
    "revision": "ea7c082b426815b608e0c41f7bf919c9"
  },
  {
    "url": "ico/android-chrome-36x36.png",
    "revision": "4ae76431304c596a100ac88d53be996e"
  },
  {
    "url": "ico/android-chrome-384x384.png",
    "revision": "9cc2dd0c9b6bbc9c420654f73899299c"
  },
  {
    "url": "ico/android-chrome-48x48.png",
    "revision": "8649264c5d98634f6560234bb8165791"
  },
  {
    "url": "ico/android-chrome-512x512.png",
    "revision": "d0425668c48fee90745b1ffd580917e0"
  },
  {
    "url": "ico/android-chrome-72x72.png",
    "revision": "feea8dfe8dbbf95688fa8a79eb2216ff"
  },
  {
    "url": "ico/android-chrome-96x96.png",
    "revision": "c31423f18750c6893d5ce38a52a4b90c"
  },
  {
    "url": "ico/apple-touch-icon-114x114-precomposed.png",
    "revision": "eb375a618aa19b0e49648ef04507bfeb"
  },
  {
    "url": "ico/apple-touch-icon-114x114.png",
    "revision": "6dd55c33f43bf10b60e6ccfa042fdabb"
  },
  {
    "url": "ico/apple-touch-icon-120x120-precomposed.png",
    "revision": "deb09298069a97e018aba3d40b7d6a54"
  },
  {
    "url": "ico/apple-touch-icon-120x120.png",
    "revision": "d7d4778e6ac4fc7b70283d26cffdf711"
  },
  {
    "url": "ico/apple-touch-icon-144x144-precomposed.png",
    "revision": "1ed6c6c2764d016535573dfb1b96f332"
  },
  {
    "url": "ico/apple-touch-icon-144x144.png",
    "revision": "2a5640462b782d57593e8e9406ec7296"
  },
  {
    "url": "ico/apple-touch-icon-152x152-precomposed.png",
    "revision": "a5d6228bb8c01c41059cbee2ca1bbe21"
  },
  {
    "url": "ico/apple-touch-icon-152x152.png",
    "revision": "18dbfc0ffcfdbdf4c370de8aa22fbdf3"
  },
  {
    "url": "ico/apple-touch-icon-180x180-precomposed.png",
    "revision": "9556dc06fd24ce0966fe74309ec2bc0e"
  },
  {
    "url": "ico/apple-touch-icon-180x180.png",
    "revision": "77cddff9424666b554eb16ccd8d0ff60"
  },
  {
    "url": "ico/apple-touch-icon-57x57-precomposed.png",
    "revision": "94bf77e1da69aac321177d46fba382e5"
  },
  {
    "url": "ico/apple-touch-icon-57x57.png",
    "revision": "6627c16911f145c780c8758059fd4ca6"
  },
  {
    "url": "ico/apple-touch-icon-60x60-precomposed.png",
    "revision": "8a0fd16705e3ce0f5bd052b1fc670ba6"
  },
  {
    "url": "ico/apple-touch-icon-60x60.png",
    "revision": "e260d8ae52b41787a44f90537b076e1b"
  },
  {
    "url": "ico/apple-touch-icon-72x72-precomposed.png",
    "revision": "349c5079c380d9f9feaf381ae069b9d6"
  },
  {
    "url": "ico/apple-touch-icon-72x72.png",
    "revision": "d792b666ad65180fa65abf2e8285f50a"
  },
  {
    "url": "ico/apple-touch-icon-76x76-precomposed.png",
    "revision": "aac0ccb0d811796f990f82e7790b1df8"
  },
  {
    "url": "ico/apple-touch-icon-76x76.png",
    "revision": "0b78882a0054d384330d25b5f2f0a3f7"
  },
  {
    "url": "ico/apple-touch-icon-precomposed.png",
    "revision": "9556dc06fd24ce0966fe74309ec2bc0e"
  },
  {
    "url": "ico/apple-touch-icon.png",
    "revision": "77cddff9424666b554eb16ccd8d0ff60"
  },
  {
    "url": "ico/favicon-16x16.png",
    "revision": "f720b7efdb3835e07039f95a490ef17a"
  },
  {
    "url": "ico/favicon-32x32.png",
    "revision": "c7e88921553ac26e9c0b52ce584178aa"
  },
  {
    "url": "ico/mstile-144x144.png",
    "revision": "bdaa28b10b8136fa5be04b9d90b18d8a"
  },
  {
    "url": "ico/mstile-150x150.png",
    "revision": "54b52cfb31aa8ed023272b90ee48541d"
  },
  {
    "url": "ico/mstile-310x150.png",
    "revision": "ff772fc5626034d0e785fcbdc7eb2bc4"
  },
  {
    "url": "ico/mstile-310x310.png",
    "revision": "5ea8ce5398ff0c87adcb80687338dd3d"
  },
  {
    "url": "ico/mstile-70x70.png",
    "revision": "d1b8e9d471a116478b3f74a511432751"
  },
  {
    "url": "ico/safari-pinned-tab.svg",
    "revision": "3ada1c230fa721234afe17a63f95fe35"
  },
  {
    "url": "img/candle.svg",
    "revision": "cb65a58be2667f3965b993f48fa946db"
  },
  {
    "url": "img/christmas-day.svg",
    "revision": "64e99eaf30d51a2e73665b5b10c0de2c"
  },
  {
    "url": "index.html",
    "revision": "f3966e6972cca8ea75e9fd0755bdc8d3"
  },
  {
    "url": "js/site.js",
    "revision": "caa7db742bc893b76084f17c8e026908"
  }
]);

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