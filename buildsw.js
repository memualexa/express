const workboxBuild = require('workbox-build');

const buildSW = () => {
  // This will return a Promise
  // glob       '**\/*.{js,css,html,png,svg}',
  return workboxBuild.injectManifest({
    swSrc: 'src/sw/sw.js',
    swDest: 'public/sw.js',
    globDirectory: 'public',
    globPatterns: [
      '*.{js,json,css,html,png,svg}',
      'css\/*', 'ico\/*', 'img\/*', 'js\/*',
    ]
  }).then(({count, size, warnings}) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
}

buildSW();