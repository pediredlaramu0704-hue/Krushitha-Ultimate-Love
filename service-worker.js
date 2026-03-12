const CACHE_NAME = "love-story-v1"

const urlsToCache = [
  "index.html",
  "manifest.json",
  "icon.png",
  "music.mp3",
  "photo1.jpeg",
  "photo2.jpeg",
  "photo3.jpeg"
]

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  )
})
