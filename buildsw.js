const workboxBuild = require('workbox-build');

const buildSW = () => {
  // This will return a Promise
  return workboxBuild.injectManifest({
    swSrc: 'src/sw/sw.js',
    swDest: 'public/res1/sw.js',
    globDirectory: 'public/res1',
    globPatterns: [
      '**\/*.{js,css,html,png,svg}',
    ]
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();