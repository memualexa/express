if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}

$(() => {
  $("#fullscreen").on("click", e => {
    window.location.href="/fullscreen.html";
  });
  $("#homescreen").on("click", e => {
    window.location.href="/homescreen.html";
  });
  $("#tomtom").on("click", e => {
    window.location.href="/tomtom.html";
  });
  $("#map").on("click", e => {
    window.location.href="/map.html";
  });
  $("#mapbox").on("click", e => {
    window.location.href="/mapbox.html";
  });
  $("#googlemaps").on("click", e => {
    window.location.href="/googlemaps.html";
  }) 
});