const CACHE_NAME = 'manutencao-pro-v2.7.2';
const APP_SHELL = ['./','./index.html','./app.js','./tags-base.js','./manifest.json','./icons/icon.svg'];
self.addEventListener('message',event=>{if(event.data&&event.data.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;
 const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(url.pathname.endsWith('/tags-base.js')||url.pathname.endsWith('/app.js')||url.pathname.endsWith('/index.html')){
  event.respondWith(fetch(request,{cache:'no-cache'}).then(response=>{if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy))}return response}).catch(()=>caches.match(request).then(cached=>cached||caches.match('./index.html'))));return;
 }
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(request,copy))}return response})));
});