# DJAGO Progressive Web App (PWA) Implementation Walkthrough

DJAGO Design & Build Collaborative has been enhanced with complete, production-grade Progressive Web App (PWA) support. Users can install the application natively on mobile (iOS & Android) and desktop (Chrome, Edge, macOS/Windows), browse the architecture & engineering portfolio completely offline, and access quick shortcuts.

---

## What Was Added

### 1. W3C Web App Manifest ([public/manifest.webmanifest](file:///c:/Users/RAZER/Desktop/DJAGO/public/manifest.webmanifest))
- **Identity & Styling**:
  - `name`: `DJAGO Design & Build Collaborative`
  - `short_name`: `DJAGO`
  - `theme_color` & `background_color`: `#0d0f12` (Executive obsidian dark)
  - `display`: `standalone` with `window-controls-overlay` support
- **Quick Launch Shortcuts**:
  - **Portfolio & Works** (`/?page=work&source=shortcut`)
  - **Disciplines & Services** (`/?page=disciplines&source=shortcut`)
  - **Transformations** (`/?page=transformations&source=shortcut`)
  - **Consultations & Contact** (`/?page=contact&source=shortcut`)

### 2. High-Fidelity Branded Icons ([public/icons/](file:///c:/Users/RAZER/Desktop/DJAGO/public/icons/))
- `icon-192.png` & `icon-192.svg` (Standard 192×192)
- `icon-512.png` & `icon-512.svg` (High-resolution 512×512)
- `icon-maskable-192.png` & `icon-maskable-192.svg` (Android adaptive safe-zone)
- `icon-maskable-512.png` & `icon-maskable-512.svg`
- `apple-touch-icon.png` (180×180 iOS home screen icon in both root and icons directory)

### 3. Service Worker & Offline Engine ([public/sw.js](file:///c:/Users/RAZER/Desktop/DJAGO/public/sw.js))
- **Precaching**: Core application shell, manifest, favicon, and brand icons.
- **Navigation Requests**: Network-first strategy with automatic fallback to cached `/index.html`, allowing full offline SPA browsing across all tabs (`/about`, `/work`, `/disciplines`, etc.).
- **Static Assets & Fonts**: Stale-while-revalidate caching for JS bundles, CSS, Google Fonts, and project photography.
- **Cache Management**: Versioned cache (`djago-pwa-v1`) that auto-purges obsolete caches upon activation.
- **`SKIP_WAITING`**: Instant updates when a new version is published.

### 4. React PWA Hook & Service Worker Registration
- [src/pwa/registerServiceWorker.ts](file:///c:/Users/RAZER/Desktop/DJAGO/src/pwa/registerServiceWorker.ts): Handles SW registration, hourly update polling, and update events.
- [src/pwa/usePWA.ts](file:///c:/Users/RAZER/Desktop/DJAGO/src/pwa/usePWA.ts): React hook tracking:
  - `isInstallable`: Native install prompt ready
  - `isInstalled`: App running in standalone display mode
  - `isOffline`: Real-time network connectivity status
  - `needRefresh`: Indicates new portfolio version waiting
  - `installApp()`: Triggers native installation dialog
  - `dismissPrompt(days)`: Remembers user preference

### 5. Luxury UI Components
- [src/components/PWAInstallPrompt.tsx](file:///c:/Users/RAZER/Desktop/DJAGO/src/components/PWAInstallPrompt.tsx):
  - Dark obsidian card with amber gold accents and DJAGO monogram.
  - One-click [Install App] action.
  - Step-by-step iOS Safari helper modal with visual instructions.
  - "New Update Available" refresh toast banner.
- [src/components/OfflineIndicator.tsx](file:///c:/Users/RAZER/Desktop/DJAGO/src/components/OfflineIndicator.tsx):
  - Floating status pill: "Offline Mode Active • Cached Portfolio Available".
  - Smooth reconnection toast: "Connection Restored • Synchronized".
- [src/components/Navbar.tsx](file:///c:/Users/RAZER/Desktop/DJAGO/src/components/Navbar.tsx) & [src/components/Footer.tsx](file:///c:/Users/RAZER/Desktop/DJAGO/src/components/Footer.tsx):
  - Subtle "App" / "Install Web App" triggers for persistent accessibility.

---

## How to Test

### Desktop (Chrome / Edge / Brave)
1. Open the app in your browser.
2. In the URL bar or bottom-left prompt, click **Install App**.
3. DJAGO will launch in a dedicated borderless standalone window.

### Mobile (Android)
1. Navigate to the website on Chrome for Android.
2. Tap the **Install Official App** prompt at the bottom of the screen.
3. The app icon will appear on your home screen with full splash screen support.

### Mobile (iOS Safari)
1. Open the website in Safari on iPhone or iPad.
2. Click **Install App** in the prompt (or tap the browser Share icon `⎋`).
3. Select **Add to Home Screen** and tap **Add**.

### Offline Simulation
1. Open DevTools (`F12`), switch to the **Network** tab, and toggle **Offline**.
2. Refresh or navigate between pages—the app shell and cached media will load instantly, and the golden **Offline Mode Active** indicator will illuminate in the top right.
