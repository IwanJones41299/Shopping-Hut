"use strict";

var CACHE_NAME = "version-1";
var urlsToCache = ['index.html', 'offline.html'];
var self = void 0; //Install SW

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
    console.log('Opened Cache');
    return cache.addAll(urlsToCache);
  }));
}); //Listen for requests

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).then(function () {
    return fetch(event.request)["catch"](function () {
      return caches.match('offline.html');
    });
  }));
}); //Activate the SW

self.addEventListener('activate', function (event) {
  var cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);
  event.waitUntil(caches.keys().then(function (cacheNames) {
    return Promise.all(cacheNames.map(function (cacheNames) {
      if (!cacheWhitelist.includes(cacheNames)) {
        return caches["delete"](cacheNames);
      }
    }));
  }));
});