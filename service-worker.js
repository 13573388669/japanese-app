// ========================================
// Service Worker - 离线支持
// ========================================

const CACHE_NAME = 'nihongo-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/index.css',
    '/app.js',
    '/data/hiragana.js',
    '/data/katakana.js',
    '/data/lessons.js',
    '/manifest.json'
];

// 安装事件
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('缓存静态资源');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// 激活事件
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// 请求拦截
self.addEventListener('fetch', event => {
    // 跳过非GET请求
    if (event.request.method !== 'GET') return;

    // 跳过外部请求
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .then(response => {
                        // 检查有效响应
                        if (!response || response.status !== 200) {
                            return response;
                        }

                        // 缓存新资源
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    });
            })
            .catch(() => {
                // 离线回退
                if (event.request.destination === 'document') {
                    return caches.match('/index.html');
                }
            })
    );
});
