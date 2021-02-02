const cacheName = "static-service_worker";
const assets = [
    'index.html',
    'offline.html',
]

const self = this;

//Install service worker
self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(cacheName)
        .then((cache) => {
            console.log('Opening cache');

            return cache.addAll(assets);
        })
    )
});

//Listen for requests
self.addEventListener('fetch', (evt) => {
    evt.respondWith(
        caches.match(evt.request)
        .then(() => {
            return fetch(evt.request)
            .catch(() => caches.match('offline.html'))
        })
    )
});

//Activate service worker
self.addEventListener('activate', (evt) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(cacheName);

    evt.waitUntil(
        caches.keys().then((cacheName) => Promise.all(
            cacheName.map((cacheName) => {
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
});