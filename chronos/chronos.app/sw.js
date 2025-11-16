
const CACHE_NAME = 'chronos-cache-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    'https://unpkg.com/react@18/umd/react.development.js',
    'https://unpkg.com/react-dom@18/umd/react-dom.development.js',
    'https://unpkg.com/@babel/standalone/babel.min.js',
    'https://cdn.tailwindcss.com',
    'https://cdn.jsdelivr.net/npm/pouchdb@7.3.0/dist/pouchdb.min.js',
    'https://cdn.jsdelivr.net/npm/pouchdb-find@7.3.0/dist/pouchdb.find.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
