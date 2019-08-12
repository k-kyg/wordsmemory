var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/wordsmemory/',
	'/wordsmemory/css/style.css',
	'/wordsmemory/js/main.js',
	'/wordsmemory/js/start.js',
	'/wordsmemory/js/view.js',
	'/wordsmemory/index.html',
	'/wordsmemory/words.html',
	'/wordsmemory/wordsview.html'
];

// インストール処理
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function (cache) {
				return cache.addAll(urlsToCache);
			})
	);
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function (response) {
				return response ? response : fetch(event.request);
			})
	);
});