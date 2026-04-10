// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Initialize Firebase in service worker
firebase.initializeApp({
  apiKey: "AIzaSyBzdMPm5sVs2bpnJpW2jTiuQ3whHsW-Aq8",
  authDomain: "cadence-25e20.firebaseapp.com",
  projectId: "cadence-25e20",
  storageBucket: "cadence-25e20.firebasestorage.app",
  messagingSenderId: "515803229451",
  appId: "1:515803229451:web:d260a3829387599fb7c60e"
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Background message received:', payload);
  
  const notificationTitle = payload.notification.title || 'Cadence Reminder';
  const notificationOptions = {
    body: payload.notification.body || 'You have pending priority tasks',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'priority-reminder',
    requireInteraction: false,
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();
  
  // Open the app when notification is clicked
  event.waitUntil(
    clients.openWindow('/')
  );
});
