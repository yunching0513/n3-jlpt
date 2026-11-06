// N3 突破: オフラインでも開けるようにするキャッシュ。ページは常にネットワーク優先なので更新はすぐ届く。
const CACHE = 'n3-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
  await self.clients.claim();
})()));

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const u = new URL(r.url);
  const font = u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
  if (u.origin !== location.origin && !font) return;
  if (r.mode === 'navigate') {
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      try {
        // no-cache：ブラウザの HTTP キャッシュ（GitHub Pages は 10 分）を飛ばして毎回確認する
        const res = await fetch(r.url, { cache: 'no-cache' });
        if (res.ok) c.put(r, res.clone());
        return res;
      } catch (err) {
        return (await c.match(r, { ignoreSearch: true })) || Response.error();
      }
    })());
    return;
  }
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const hit = await c.match(r);
    const net = fetch(r).then(res => { if (res.ok || res.type === 'opaque') c.put(r, res.clone()); return res; });
    if (hit) { net.catch(() => {}); return hit; }
    return net;
  })());
});
