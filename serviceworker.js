//########################################
// serviceworker for Simple App Shell
// Version: 28.11.2023 01:39
//########################################

// Nama cache Anda
var cacheName = 'Surtatulem-v1';
// Daftar sumber daya yang ingin Anda cache
var filesToCache = [
	'/',
	'/index.html',
	'/serviceworker.js',
	'/image/image1.jpg',
	'/image/image2.jpg',
	'/image/image3.jpg',
	'/image/logo-suratulem.webp',
	'/image/PXL6-1.png',
	'/image/undangan_online_1.jpg',
	'/image/undangan_online_2.jpg',
	'/image/undangan_online_3.jpg',
	'/image/apple-touch-icon.png',
	'/image/ELAMOUR-04.png',
	'/icon_144.png',
	'/image/icon_144.png',
	'/image/icon_192.png',
	'/image/icon_196.png',
	'/image/icon_512.png',
	'/image/sad.png',
	'/image/happy.png',
	'/image/icon_maskable.png',
	'/manifest.json',
	'/app.js',
	'/styles.css',
	'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
	'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js',
	'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js',
	'https://code.jquery.com/jquery-3.5.1.slim.min.js'
];

// Instalasi Service Worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Aktivasi Service Worker
self.addEventListener('activate', evt => {

});

// Fetching sumber daya dari cache atau jaringan
// self.addEventListener('fetch', evt => {
//     evt.respondWith(
//         caches.match(evt.request).then(cacheRes => {
//             // Menggunakan sumber daya dari cache jika ada
//             return cacheRes || fetch(evt.request);
//         })
//     );
// });

self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Data berhasil diambil dari jaringan, cache data tersebut
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open('my-cache').then(function(cache) {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(function() {
          // Jika gagal mengambil data dari jaringan, coba ambil dari cache
          return caches.match(event.request);
   })
  );
  });

self.addEventListener('push', function(event) {
    if (self.Notification.permission === 'granted') {
      // Izin notifikasi telah diberikan, Anda dapat menampilkan pemberitahuan
      const options = {
        body: 'Apakah bapak mau memberi nilai "A" kepada saya??',
        icon: '/image/icon_144.png',
        actions: [
          { action: 'yes', title: 'Ya' },
          { action: 'no', title: 'Tidak' }
        ],
        data: {
          senderId: '12345',
          messageId: '67890'
        },
        silent: true,
        timestamp: Date.now()
      };
      
  
      event.waitUntil(
        self.registration.showNotification('Notifikasi', options)
      );
    } else {
      // Izin notifikasi tidak diberikan
    }
  });
  
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
  
    if (event.action === 'yes') {
      // Tindakan "Ya" diambil
      // Menampilkan notifikasi dengan ucapan "Anda memilih Ya"
      self.registration.showNotification('Terimakasih', {
        body: 'Terimakasih Bapak sudah baik, memberi nilai yang bagus kepada saya',
        icon: '/image/happy.png'
      });
    } else if (event.action === 'no') {
      // Tindakan "Tidak" diambil
      // Menampilkan notifikasi dengan ucapan "Anda memilih Tidak"
      self.registration.showNotification('Duhhh pak pak', {
        body: 'Gak papa wis...',
        icon: '/image/sad.png'
      });
    } else {
      // Notifikasi di-klik tanpa memilih tindakan apa pun
      // Lakukan sesuatu ketika notifikasi di-klik tanpa memilih "Ya" atau "Tidak"
      console.log('Anda mengklik notifikasi');
    }
  });

