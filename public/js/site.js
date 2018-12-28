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


});