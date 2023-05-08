'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ad4d4beb2fab9efbf16828c27a24bd75",
"assets/burger.csv": "5fa3da3072da568552283862ada9675e",
"assets/chicken.csv": "f036b2ee7a994fcf3a603f7b15a528bf",
"assets/FontManifest.json": "3a40795703d2805b88b84d3c1233bec1",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/Mont/Mont-Black.otf": "dbcb2f8542b0ecbdb5309d71b8d66c40",
"assets/fonts/Mont/Mont-Bold.otf": "482e37260cd688576287f1976e958e0b",
"assets/fonts/Mont/Mont-Book.otf": "9babe309534f96a0e72cabd66ad59871",
"assets/fonts/Mont/Mont-ExtraLight.otf": "b97aeb517d5d86a95c4f7f5937199cb0",
"assets/fonts/Mont/Mont-Hairline.otf": "e027cca10fa0965d08e699e62b001b8d",
"assets/fonts/Mont/Mont-Heavy.otf": "59087be473660e111a978b2aaf15f39c",
"assets/fonts/Mont/Mont-Light.otf": "d91cf54a7c557f6c271e16b5046767ac",
"assets/fonts/Mont/Mont-Regular.otf": "f0f845588eef439ac6ecc9b6ab42191c",
"assets/fonts/Mont/Mont-SemiBold.otf": "d41a520b1802421f24e21279736e1871",
"assets/fonts/Mont/Mont-Thin.otf": "1f2050ebcebb851c7fd061dd9be90478",
"assets/fonts/Poppins/OFL.txt": "69045d03afdf61aeb37246af6001af9c",
"assets/fonts/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/fonts/Poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/Poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/fonts/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/fonts/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/Poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/Poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/fonts/Poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/images/BeefBurger.png": "14e1e74dc9adeb44abd1e89954075eb1",
"assets/images/BlackSquare.png": "e185f41c014425808fbb8b1554d2d5ad",
"assets/images/BlackTriangle.png": "cce5cfcb4a22b323164f09c4a65c4253",
"assets/images/Breast.png": "a48a273846dfd9e878539c8db61ef823",
"assets/images/Burger.png": "df6b6f646eb335986ebee846101b1996",
"assets/images/ButtonIcon.png": "2792161e8a2b16cc6adf4387c6e7d705",
"assets/images/Chicken.png": "c21c1697db96087faaa1376a1c5793db",
"assets/images/DeepPan.png": "24a007082d8322c83192a6ae2d535cdf",
"assets/images/FiletMingion.png": "2c344804331ac8de54d3bb6102fed325",
"assets/images/Fish.png": "4caea73e6bcf7223d1a66fff4301e1b1",
"assets/images/GrillImage.png": "f0b4ec5fd128b1756d5fb16b64fbded0",
"assets/images/Leg.png": "70e6a3221cb70f8c7c1eb699e382a1d9",
"assets/images/Mackeral.png": "c045e8125cacce91b3cab0641892155f",
"assets/images/Neopolitan.png": "05de31be7e8c652bbec74971216fefcc",
"assets/images/Other.png": "ba40184bfc1e327200a8a6e7644c7650",
"assets/images/OtherPizza.png": "aed3ec5cb5c23aa2e5686c3a3d8a3f6b",
"assets/images/Oven.png": "f8e5e80f55a8a7b4b1214fe9205abd36",
"assets/images/Perfecta.png": "11c80d5951b0f50d1ca3e0ce7dd14f07",
"assets/images/PizzaImage.png": "1e1ffbc115cd2e0f0234e97b8a2b9fcc",
"assets/images/RibEye.png": "dc1809f5e3f8f79418703140d5f12c27",
"assets/images/RotisImage.png": "8226fd4f816925d81064fbad6ce7e6c9",
"assets/images/Salmon.png": "43e9ac68ecde3be2dfebd2124a206ef0",
"assets/images/SeaBass.png": "df3634f8452611b80818f88666c9cff4",
"assets/images/SeerGrill.png": "71d16de9f20b529b471d76028511855b",
"assets/images/Sirloin.png": "51095e6207dacf044851d72bddb32682",
"assets/images/Skewer.png": "a1d7818466ac96b59b30b87c53de2d8b",
"assets/images/Skirt.png": "942f0b55c8cc4c1b89ce15274511a876",
"assets/images/Spit.png": "a721c8eb864e732227984a5d98f83d95",
"assets/images/SpitRoast.png": "a721c8eb864e732227984a5d98f83d95",
"assets/images/Steak.png": "aa24be389711eef9ad9149b0d03e8917",
"assets/images/Strip.png": "446e442a1d05088a00b4d113b46e9aca",
"assets/images/Thigh.png": "574df3d02e46ca3518e824a92dca6bc4",
"assets/images/ThinBase.png": "554074528864a9c80b5b33f0c1ee67ea",
"assets/images/ThinCrust.png": "573b10b1516e530ea4cb5d25f395832f",
"assets/images/Toast.png": "7cd90b1c4b0f85208a1bb8497c932f75",
"assets/images/Tomahawk.png": "eb29a75750e3bfb98712ed7156bbe150",
"assets/images/Tuna.png": "d6f98fcc533c93ac00672e6cf952add7",
"assets/images/VeggieBurger.png": "e4c8843c875a6bafb3a8415f903dd9cf",
"assets/images/Veggies.png": "53b9dc5a976691d779b852496917fefc",
"assets/images/Wing.png": "ccb439bc52b86a7634bbf8974f420429",
"assets/NOTICES": "9ea07f4fa5dd481c7d41a85c1185f4d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/pizza.csv": "882eb6f77ff9e486204513d96040e4fa",
"assets/steak.csv": "acc554009dd20f419618613afc3900c9",
"assets/web/assets/burger.csv": "5fa3da3072da568552283862ada9675e",
"assets/web/assets/chicken.csv": "f036b2ee7a994fcf3a603f7b15a528bf",
"assets/web/assets/fonts/Mont/Mont-Black.otf": "dbcb2f8542b0ecbdb5309d71b8d66c40",
"assets/web/assets/fonts/Mont/Mont-Bold.otf": "482e37260cd688576287f1976e958e0b",
"assets/web/assets/fonts/Mont/Mont-Book.otf": "9babe309534f96a0e72cabd66ad59871",
"assets/web/assets/fonts/Mont/Mont-ExtraLight.otf": "b97aeb517d5d86a95c4f7f5937199cb0",
"assets/web/assets/fonts/Mont/Mont-Hairline.otf": "e027cca10fa0965d08e699e62b001b8d",
"assets/web/assets/fonts/Mont/Mont-Heavy.otf": "59087be473660e111a978b2aaf15f39c",
"assets/web/assets/fonts/Mont/Mont-Light.otf": "d91cf54a7c557f6c271e16b5046767ac",
"assets/web/assets/fonts/Mont/Mont-Regular.otf": "f0f845588eef439ac6ecc9b6ab42191c",
"assets/web/assets/fonts/Mont/Mont-SemiBold.otf": "d41a520b1802421f24e21279736e1871",
"assets/web/assets/fonts/Mont/Mont-Thin.otf": "1f2050ebcebb851c7fd061dd9be90478",
"assets/web/assets/fonts/Poppins/OFL.txt": "69045d03afdf61aeb37246af6001af9c",
"assets/web/assets/fonts/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/web/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/web/assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/web/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/web/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/web/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/web/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/web/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/web/assets/fonts/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/web/assets/fonts/Poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/web/assets/fonts/Poppins/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/web/assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/web/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/web/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/web/assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/web/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/web/assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/web/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/web/assets/images/BeefBurger.png": "14e1e74dc9adeb44abd1e89954075eb1",
"assets/web/assets/images/BlackSquare.png": "e185f41c014425808fbb8b1554d2d5ad",
"assets/web/assets/images/BlackTriangle.png": "cce5cfcb4a22b323164f09c4a65c4253",
"assets/web/assets/images/Breast.png": "a48a273846dfd9e878539c8db61ef823",
"assets/web/assets/images/Burger.png": "df6b6f646eb335986ebee846101b1996",
"assets/web/assets/images/ButtonIcon.png": "2792161e8a2b16cc6adf4387c6e7d705",
"assets/web/assets/images/Chicken.png": "c21c1697db96087faaa1376a1c5793db",
"assets/web/assets/images/DeepPan.png": "24a007082d8322c83192a6ae2d535cdf",
"assets/web/assets/images/FiletMingion.png": "2c344804331ac8de54d3bb6102fed325",
"assets/web/assets/images/Fish.png": "4caea73e6bcf7223d1a66fff4301e1b1",
"assets/web/assets/images/GrillImage.png": "f0b4ec5fd128b1756d5fb16b64fbded0",
"assets/web/assets/images/Leg.png": "70e6a3221cb70f8c7c1eb699e382a1d9",
"assets/web/assets/images/Mackeral.png": "c045e8125cacce91b3cab0641892155f",
"assets/web/assets/images/Neopolitan.png": "05de31be7e8c652bbec74971216fefcc",
"assets/web/assets/images/Other.png": "ba40184bfc1e327200a8a6e7644c7650",
"assets/web/assets/images/OtherPizza.png": "aed3ec5cb5c23aa2e5686c3a3d8a3f6b",
"assets/web/assets/images/Oven.png": "f8e5e80f55a8a7b4b1214fe9205abd36",
"assets/web/assets/images/Perfecta.png": "11c80d5951b0f50d1ca3e0ce7dd14f07",
"assets/web/assets/images/PizzaImage.png": "1e1ffbc115cd2e0f0234e97b8a2b9fcc",
"assets/web/assets/images/RibEye.png": "dc1809f5e3f8f79418703140d5f12c27",
"assets/web/assets/images/RotisImage.png": "8226fd4f816925d81064fbad6ce7e6c9",
"assets/web/assets/images/Salmon.png": "43e9ac68ecde3be2dfebd2124a206ef0",
"assets/web/assets/images/SeaBass.png": "df3634f8452611b80818f88666c9cff4",
"assets/web/assets/images/SeerGrill.png": "71d16de9f20b529b471d76028511855b",
"assets/web/assets/images/Sirloin.png": "51095e6207dacf044851d72bddb32682",
"assets/web/assets/images/Skewer.png": "a1d7818466ac96b59b30b87c53de2d8b",
"assets/web/assets/images/Skirt.png": "942f0b55c8cc4c1b89ce15274511a876",
"assets/web/assets/images/Spit.png": "a721c8eb864e732227984a5d98f83d95",
"assets/web/assets/images/SpitRoast.png": "a721c8eb864e732227984a5d98f83d95",
"assets/web/assets/images/Steak.png": "aa24be389711eef9ad9149b0d03e8917",
"assets/web/assets/images/Strip.png": "446e442a1d05088a00b4d113b46e9aca",
"assets/web/assets/images/Thigh.png": "574df3d02e46ca3518e824a92dca6bc4",
"assets/web/assets/images/ThinBase.png": "554074528864a9c80b5b33f0c1ee67ea",
"assets/web/assets/images/ThinCrust.png": "573b10b1516e530ea4cb5d25f395832f",
"assets/web/assets/images/Toast.png": "7cd90b1c4b0f85208a1bb8497c932f75",
"assets/web/assets/images/Tomahawk.png": "eb29a75750e3bfb98712ed7156bbe150",
"assets/web/assets/images/Tuna.png": "d6f98fcc533c93ac00672e6cf952add7",
"assets/web/assets/images/VeggieBurger.png": "e4c8843c875a6bafb3a8415f903dd9cf",
"assets/web/assets/images/Veggies.png": "53b9dc5a976691d779b852496917fefc",
"assets/web/assets/images/Wing.png": "ccb439bc52b86a7634bbf8974f420429",
"assets/web/assets/pizza.csv": "882eb6f77ff9e486204513d96040e4fa",
"assets/web/assets/steak.csv": "acc554009dd20f419618613afc3900c9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2d901316f15f53a061e6eef459029c0",
"/": "c2d901316f15f53a061e6eef459029c0",
"main.dart.js": "2d1826852b5b437e0054d9a20d926dac",
"manifest.json": "4c6556bf8099f3896f9fa48654d7a261",
"version.json": "1d396896a875218ce00303e00c53e0bc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
