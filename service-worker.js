self.addEventListener('install', (e) => {
    console.log('[Service Worker] Instalado');
    e.waitUntil(
      caches.open('todo-cache').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './styles.css',
          './script.js',
          './manifest.json',
          './icons/icon-192.png',
          './icons/icon-512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => {
        return response || fetch(e.request);
      })
    );
  });
  