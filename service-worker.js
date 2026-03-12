const CACHE_NAME = "love-app"

const urlsToCache = [
  "/",
  "/index.html",
  "/icon.png",
  "/photo1.jpeg",
  "/photo2.jpeg",
  "/photo3.jpeg"
]

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    })
  )
})
