self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('kspsehore-store').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json'
            ]);
        })
    );
});