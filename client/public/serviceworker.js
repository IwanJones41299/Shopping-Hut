const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html' ]; //Add the files I want to have the app use with the online functionality.

const self = this;

//Installation
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    )
});

//Listen for request
self.addEventListener('fetch', (event) => {
    
});

//Activate
self.addEventListener('activate', (event) => {

});