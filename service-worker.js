self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("mindrush").then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});
