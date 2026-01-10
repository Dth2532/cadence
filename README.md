# Cadence - PWA Habit Tracker

**Know Your Habits to Know Yourself**

A beautiful, offline-capable Progressive Web App for tracking your daily tasks, meals, and bedtime routine.

## ✨ Features

- **✅ Tasks Completed** - Log and track tasks you've accomplished throughout the day
- **🍽️ Food Log** - Track meals and snacks with automatic timestamps
- **🌙 Bedtime Tracker** - Record when you go to bed each night
- **💾 Persistent Storage** - All data saves automatically and persists across sessions
- **📱 Works Offline** - Full functionality even without internet connection
- **🔔 Installable** - Add to home screen and use like a native app

## 🚀 Getting Started

### Option 1: Run Locally (Simple)

1. Place all files in a folder:
   - `index.html`
   - `habit-tracker.jsx`
   - `manifest.json`
   - `service-worker.js`
   - `icon-192.png`
   - `icon-512.png`

2. Serve with any local server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. Open `http://localhost:8000` in your browser

4. Install the app:
   - Chrome: Click the install icon in the address bar
   - Safari (iOS): Share → Add to Home Screen
   - Edge: Click the "+" icon in the address bar

### Option 2: Deploy Online (Recommended)

#### Deploy to Vercel (Free & Easy)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project folder
3. Follow the prompts
4. Your app will be live with HTTPS automatically!

#### Deploy to Netlify
1. Drag and drop your folder into [Netlify Drop](https://app.netlify.com/drop)
2. Done! Your app is live

#### Deploy to GitHub Pages
1. Create a new repository
2. Upload all files
3. Go to Settings → Pages
4. Select "Deploy from branch" and choose `main`
5. Your app will be live at `https://username.github.io/repo-name`

## 📱 Installing as PWA

### Desktop (Chrome/Edge)
1. Visit your deployed site
2. Look for the install icon (⊕) in the address bar
3. Click "Install"
4. The app opens in its own window!

### iOS (Safari)
1. Visit your deployed site
2. Tap the Share button
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"
5. App appears on your home screen!

### Android (Chrome)
1. Visit your deployed site
2. Tap the three dots menu
3. Tap "Install app" or "Add to Home screen"
4. Confirm installation

## 🛠️ Technical Details

### Technologies Used
- React 18 (via CDN)
- Lucide React Icons
- Service Worker for offline functionality
- Web Storage API for data persistence
- PWA Manifest

### Browser Support
- ✅ Chrome/Edge (full support)
- ✅ Safari (iOS 11.3+)
- ✅ Firefox (partial PWA support)
- ✅ Samsung Internet

### Storage
- Uses `window.storage` API for persistence
- Data stored locally per device
- Organized by date (format: `YYYY-MM-DD`)
- Separate storage keys:
  - `tasks:YYYY-MM-DD` - Daily tasks
  - `foods:YYYY-MM-DD` - Food log
  - `bedtime:YYYY-MM-DD` - Bedtime entry

## 🎨 Customization

### Change Colors
Edit the colors in `habit-tracker.jsx`:
```javascript
// Main colors
#8b5e3c // Primary brown
#6b4423 // Dark brown
#f5ede4 // Light cream
#d4a574 // Gold accent
```

### Change Fonts
Modify the Google Fonts import in `habit-tracker.jsx`:
```javascript
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');
```

### Add Features
The storage API makes it easy to add new tracking categories:
```javascript
// Example: Add water intake tracker
await window.storage.set(`water:${today}`, JSON.stringify(waterEntries));
```

## 🔒 Privacy

- **All data stays on your device** - nothing is sent to any server
- No analytics or tracking
- No account required
- Your data, your control

## 📝 Future Enhancement Ideas

- Export data to CSV/JSON
- Charts and analytics
- Habit streaks
- Reminder notifications
- Dark mode toggle
- Multiple journals/profiles
- Cloud sync option

## 🐛 Troubleshooting

**PWA won't install:**
- Make sure you're using HTTPS (required for PWA)
- localhost works for testing
- Check browser console for errors

**Data not persisting:**
- Make sure service worker is registered (check browser DevTools → Application)
- Check if storage quota is exceeded

**Offline not working:**
- Service worker needs HTTPS to work (except on localhost)
- Clear cache and reinstall if issues persist

## 📄 License

Free to use, modify, and distribute. Built with ❤️ for better daily habits.

## 🤝 Contributing

Feel free to fork, modify, and make it your own! Some ideas:
- Add categories for exercise, water intake, mood
- Implement weekly/monthly views
- Add goal setting features
- Create data visualization

---

**Enjoy tracking your daily habits! 🎯**
