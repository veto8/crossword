var cacheName = 'todo-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/easy_mode.html',
  '/main.html',
  '/register.html',
  '/how_to_play.html',
  '/img/background/crossword_background.jpg',
  '/mode/easy/easy_mode_2.html',
  '/mode/medium/medium_mode.html',
  '/mode/medium/medium_mode_2.html',
  '/mode/hard_mode/hard_mode.html',
  '/mode/hard_mode/hard_mode.html',
  '/js/main.js',
  '/js/index.js',
  '/js/login.js',
  '/js/register.js',
  '/js/dev2.js',
  '/js/easy_section_2.js',
  '/js/normal_mode/normal_section_1.js',
  '/js/normal_mode/normal_section_2.js',
  '/js/hard_mode/hard_section_1.js',
  '/js/hard_mode/hard_section_2.js',
  '/js/jquery.crossword.js',
  '/js/script.js',
  '/js/jquery-1.6.min.js',
  '/css/index.css',
  '/node_modules/jquery/dist/jquery.slim.min.js',
  '/node_modules/bootstrap/dist/js/bootstrap.min.js',
  '/node_modules/localforage/dist/localforage.js',
  '/node_modules/bootstrap/dist/css/bootstrap.min.css',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
