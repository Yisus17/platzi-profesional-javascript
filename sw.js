const VERSION = "v1";

//Self es el equivalente a this, para service workers
//Aqui vamos a crear un pre-caché
self.addEventListener('install', event => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
    const request = event.request;
    
    //get
    if(request.method !== "GET"){
        return; //No hacemos nada sino es get
    }
    //Buscamos en cache si es get
    event.respondWith(cachedResponse(request));

    //Actualizar el cache para evitar desfases en actualizaciones
    event.waitUntil(updateCache(request));
});

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/SanAntonio.mp4',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response  || fetch(request) //lo buscamos en cache y sino está vamos a la red
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response); //esto actualiza el cache
  
}