// ホーム画面への追加（PWAインストール）の要件を満たすための最小のService Worker。
// キャッシュはせず、すべてネットワークにそのまま流します。
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request));
});
