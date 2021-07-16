'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f166e3b8185e582275e3cb2f3e07feb7",
".git/config": "7b0d734c42ca7eadf0f7da2f26adb2e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "1d25dcba90f367fc25319ab1e308011a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9276e3e059c2028d88758a2705eaf15d",
".git/logs/refs/heads/main": "345acb9719349fa446996f661676b50e",
".git/logs/refs/remotes/origin/main": "10c8b8f5f39d322985939d7ed970e521",
".git/objects/0d/d5613c8d88fb0b021cb6ed6b819a3853bc833d": "996670e8204a2952316fb933bd3b895d",
".git/objects/10/06e8b24919461a1baf8c26d20284926cd80f0c": "8e6ef4ab714f2c12e5bc964c229ae7b6",
".git/objects/1c/ec9b41de4ad7a16243fc3edcaed4b67a84dffb": "741e8f151027eda79778e4b042a571a6",
".git/objects/1e/0472d9454d3ac2a603437ff9436ab1dbddd58a": "4b1ca71793403281a4cf690700146b7c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/3aaae4711dee4031749c082303c8263328ddcb": "95a16c3e984eb843c015494f634612fa",
".git/objects/22/e81b0478de5e9454ea9f7a60fbaa2776e317d5": "23ac9d2b5a76598822e1b47474923823",
".git/objects/24/888b58fc07b3f2257cbfcae4b870289d7ef9b5": "de7c06f39796a753a7bcad15f545d239",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/44/6ade1a5646b300f07e449396d51b745df679f8": "bd868e501620b893b81cd8f87da679c9",
".git/objects/4c/0abf25e36d824aed32cbfa62c1914c7ef80710": "244490f6094bce6929fedf56a1d4e4d4",
".git/objects/5a/109d47aeeda6aae43a07cf510b57eeac61f774": "1a96a66d5724088bd11155f40c2e2d32",
".git/objects/66/3ea82e7af66fc4f98c1ce66b08a3d3897f9702": "aba3ed007a809667dda4877fb821641c",
".git/objects/6c/eac728d69c7b0510995fd7debd99933ebf41df": "0d1e1fcaade05729c0fa5afa6b964b8f",
".git/objects/6d/cb5cf665795634aa0c979b90e29538b1e8e1ba": "3c9dd1fb4b5e20d39f31ec64695fa5c0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7d/3d9ed60bdde105a7d96024aa536964fc81bbfe": "fe83677891ca015422dee6e0aceb4bcd",
".git/objects/7f/a83975f8ad6e4535f9ba63e8e12b2d7f24c435": "272f8764d057a9d89ea4567532652953",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/596608f63a17934bde465dfd6b6d50b2ba08d8": "49f53bf8d567e6b998d7999f6a500037",
".git/objects/9c/4909a41a245c7f9c91ea067110edea1fec560a": "6c958ee96839e8e1baf4d4bea5775064",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/2e65c91a3f49187a1b0667f03af7c9b228daa3": "4869d09cdfdd58e8e2af9f22cab98b09",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/6a24af1cd746ce48e660eee2dfc508604ab78d": "4f3829bd5b53db9ec12284e6b0cc6daa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/7c1da0cc6f585d03a3e0cdd21fe5e6afa6e909": "357c7af00ec31c5f026cf82750554633",
".git/objects/b9/bba6255546a8d42bca834877c6045d83a0c4de": "b80d8cd8f7f135052371c168cd6ab176",
".git/objects/bb/912a9e9da3e90fd5eb4ba316c4d324eb76ff31": "4b05845496f1da22028d42d26a338308",
".git/objects/c4/e6c6485921417f43da2d0b6c07adb1833262ea": "38979ad3b68eedd4e2abeb9cec7bc2e6",
".git/objects/c8/d9a780d83ffad28d43371886e9b85961b31aaa": "6255c11af914283131a130d1caddf58c",
".git/objects/d4/1312c8e7b5799e8aa457f8d323068601d189ce": "88b42d8c1de44a6f0ac5f1116eabb2a7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ec317c5d1ab0fe660b676b69dd57873beddbf4": "ef7cdc3d6ff8c85761343d6ec58158c7",
".git/objects/e8/1e3e2bd767338abc81a4d5f1d6423fe061c12c": "64acef9f351429df17f1d92390b39fce",
".git/objects/e9/17a65bc9c2abb61425fe640d4d56ee0fea5b03": "220fbc7b5eb8d17e56f1b0086e3593ac",
".git/objects/ea/4fc21078be7e3604cafe3e718719b735fb2149": "a06a6de9c594edc8ed0e9f81e179da4e",
".git/objects/f3/f837c8768e9d43dacf64ca6f7a9f5c675bbe73": "c25128b9bc5337bc3949097c6ab4fac7",
".git/objects/f6/2b96a3acf1c13b64b48bce53aad5358890a95c": "3c084987a006957817fb3ef276dd4b9e",
".git/objects/f7/4d1e4a7e0ba6cda1b19683676e23bd338a05d5": "17c0f4b813dd184b73bde23abf4fac03",
".git/objects/f7/f108debc7b3b92019611ec39e17dc98ba60ece": "50588c67a04674d9c409cd5f416191d7",
".git/objects/f9/9cf3e2b694468ad9e0976f7d77fbbb39567831": "e58aa18ce07c59c47e33e01321338293",
".git/refs/heads/main": "b01cf80a1fe6924ebe49d57d06955f37",
".git/refs/remotes/origin/main": "b01cf80a1fe6924ebe49d57d06955f37",
"assets/AssetManifest.json": "e0fd14a34a2f454bfdb3b41c18897b7b",
"assets/assets/fonts/FrederickatheGreat-Regular.ttf": "9122299e476671f970e1670bd7b900c8",
"assets/FontManifest.json": "a7844b95ac2135f4d4aaf2765e657c29",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f4b612e16220e8d7c960ad39381aa1ef",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "00d11c95d98311878b8585aae751cc8f",
"/": "00d11c95d98311878b8585aae751cc8f",
"main.dart.js": "20a79a2210a8661baa7886208737fc6b",
"manifest.json": "38fe80f6293f37a5ddd0d8d9d7a91925",
"version.json": "1fd065d335f3441330ec46fb96103e8a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
