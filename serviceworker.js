const CACHE_NAME = 'wordsmemory';
const cacheUrls = [
	'/wordsmemory/',
	'/wordsmemory/css/style.css',
	'/wordsmemory/js/main.js',
	'/wordsmemory/js/start.js',
	'/wordsmemory/js/view.js',
	'/wordsmemory/index.html',
	'/wordsmemory/words.html',
	'/wordsmemory/wordsview.html'
]
self.addEventListener('install', event => {
	event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(cacheUrls)));
});
self.addEventListener('fetch', event => {
	event.respondWith(caches.match(event.request).then(response => response ? response : fetch(event.request)));
});