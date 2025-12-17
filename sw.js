const CACHE_NAME = "particle-pwa-v1";
const FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js",
  "https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js",
  "https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js"
];

self.addEventListener("install", e =>
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(FILES)))
);

self.addEventListener("fetch", e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
);
