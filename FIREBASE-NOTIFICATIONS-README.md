# Cadence v9.6 - Firebase Notifications Setup

## Files to Upload to GitHub:

1. **index-v9.6-notifications.html** → Rename to `index.html`
2. **firebase-messaging-sw.js** → Upload to root directory (same level as index.html)
3. Keep all other files (manifest.json, icons, etc.)

## ⚠️ IMPORTANT: Service Worker Location

The `firebase-messaging-sw.js` file MUST be in the root of your domain:
- ✅ `https://yourdomain.github.io/cadence/firebase-messaging-sw.js`
- ❌ NOT in a subdirectory

## How Notifications Work:

### 1. First Visit
When a user first opens the app:
- Browser asks for notification permission
- If granted, app gets an FCM token
- Token is saved in localStorage
- 🔔 Bell icon appears next to "Priority" header

### 2. Testing Notifications

**Option A: Firebase Console (Easy)**
1. Go to https://console.firebase.google.com/
2. Open your "Cadence" project
3. Click **Messaging** in left sidebar
4. Click **Create your first campaign** → **Firebase Notification messages**
5. Enter:
   - **Notification title:** "Priority Tasks Reminder"
   - **Notification text:** "You have 3 pending priority tasks!"
6. Click **Send test message**
7. Get your FCM token:
   - Open your app
   - Open browser console (F12)
   - Look for: `FCM Token: ...`
   - Copy the token
8. Paste token and click **Test**

**Option B: Using curl (Advanced)**
```bash
curl -X POST https://fcm.googleapis.com/fcm/send \
  -H "Authorization: Bearer YOUR_SERVER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "FCM_TOKEN_HERE",
    "notification": {
      "title": "Priority Tasks",
      "body": "You have pending tasks!",
      "icon": "/icon-192.png"
    }
  }'
```

### 3. Notification Types

**Foreground (App is open):**
- Shows desktop notification
- Handled by React app

**Background (App is closed):**
- Shows lock screen notification
- Handled by service worker
- Clicking notification opens the app

## Future Enhancements:

To add automatic scheduled reminders, you'll need:
1. A backend server (Cloud Functions, Node.js, etc.)
2. Cron job to send notifications at specific times
3. Store user FCM tokens in database

For now, you can manually send test notifications from Firebase Console!

## Troubleshooting:

**No notification permission prompt?**
- HTTPS required (GitHub Pages is HTTPS ✅)
- Check browser console for errors

**Service worker not loading?**
- Make sure `firebase-messaging-sw.js` is in root directory
- Check browser console: Application → Service Workers

**Token not showing in console?**
- Clear cache and reload
- Check if notifications are blocked in browser settings

## How to Find Your FCM Token:

1. Open your app
2. Press F12 (Developer Tools)
3. Go to **Console** tab
4. Look for: `FCM Token: ey...`
5. Copy the entire token

Save this token to send yourself test notifications from Firebase Console!
