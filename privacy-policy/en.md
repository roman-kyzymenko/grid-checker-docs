# Privacy Policy — "Grid Checker - Полтава" App

[English version]
[Українська версія](uk)

_Last updated: 2026-11-13_

"Grid Checker - Полтава" is a private, non-government project. It is not affiliated with any government body, utility provider, or municipal organization in Ukraine.  
The app provides a convenient way to view publicly available outage schedules and related data.

This Privacy Policy describes how the app handles data on iOS (iPhone and Apple Watch) and Android.

---

## 1. Overview

Grid Checker - Полтава:

- does **not** collect personal data
- does **not** create user accounts
- does **not** collect location
- does **not** use analytics or tracking
- does **not** serve ads
- does **not** process payments
- uses only publicly available data provided by the developer’s backend
- communicates only with its own API servers and with the push services described in section 4

Your data is never sold, shared, or used for tracking.

---

## 2. Data We Collect

### We do NOT collect:

- Personal information (name, email, phone)
- Identifiers (device ID, advertising ID)
- Location data
- Contacts, photos, media, or files
- Usage analytics
- Any data that can identify you

Tokens that Apple and Google generate to deliver background messages are described in section 4. They are not collected by the developer.

### We DO handle:

#### 2.1. Technical Request Data (standard HTTP logs)

When the app, a widget or the Apple Watch app requests data from the backend, the server receives standard technical metadata automatically sent by your device:

- IP address
- User agent (device model, OS version)
- Timestamp of request
- The requested address (for example, the date of the schedule or the street name you searched for)

This information is used only for server security, availability, and rate limiting.  
It is **not** linked to a personal profile and **not** used for tracking.

#### 2.2. Publicly Available Outage Data

The app displays:

- electrical outage schedules
- lists of streets for manual search

These datasets are publicly available and do not contain personal information.

---

## 3. How the App Works

### 3.1. Backend Communication

The app uses the developer’s own backend to fetch:

- outage schedules
- street lists for searching
- widget update data

When you search for your queue by street name, the street name you type is sent to the backend to find matching queues. It is used only to answer that search and is not linked to you.

No other user data is transmitted.

### 3.2. Widget Behavior (iOS, watchOS & Android)

Widgets and Apple Watch complications may:

- refresh periodically, based on OS rules
- perform background data fetches
- request updated schedule data from the backend
- display current outage information

All widget requests involve only publicly available data.  
Widgets do **not** collect or store personal information.

### 3.3. External Links

The app may provide links to external services such as the developer’s Telegram bot.  
Interactions with external services are governed by their respective privacy policies.

### 3.4. Apple Watch

The Apple Watch app shows the same publicly available schedules as the iPhone app. It gets them in two ways:

- it requests them from the developer’s backend itself, like the iPhone app
- your iPhone sends it the latest schedule and the app language using Apple’s WatchConnectivity, directly between your own devices, without passing through the developer’s servers

No personal data is exchanged between the iPhone and the Apple Watch.

---

## 4. Push Notifications / Silent Background Messages

The app does **not** send visible notifications to users.  
However, the iOS (iPhone and Apple Watch) and Android versions use **silent background messages** to update widget data or trigger refreshes.

To deliver these messages, the operating system or Firebase service may generate an **opaque device token** (Apple) or **registration token** (Google):

- These tokens are required by Apple or Google to route background messages.
- They do **not** identify you personally.
- They are not used, stored, or collected by the developer.
- They are not sent to the developer’s backend.
- They may be shared with Apple or Google solely for message delivery.

Silent background messages:

- contain **no personal information**
- are **not** device-targeted (topic-based only)
- do **not** display alerts, badges, or sounds
- are used exclusively to optimize widget refresh timing

---

## 4.1. iOS and watchOS (FCM via APNs)

The iPhone app and the Apple Watch app use Firebase Cloud Messaging (FCM) **only** for:

- receiving topic-based silent background messages
- refreshing schedule data in the app, widgets and watch complications

On Apple devices, these messages are delivered through Apple Push Notification service (APNs).  
To route them, Apple generates a device token, and Firebase generates a registration token and an installation ID.  
These are managed by Apple and Google. The developer does **not** access, use, or store them.

The Firebase Cloud Messaging SDK, which is included in the app only to receive these messages, may send Google limited technical diagnostic data about how the push service itself works (for example, whether messages are delivered).  
This is Google’s diagnostics of its own service, not analytics of how you use the app. It is not linked to you and is not used for tracking or advertising. The developer can see only aggregated delivery statistics in the Firebase console, never data about individual users or devices.

---

## 4.2. Android (FCM Silent Push)

The Android version uses Firebase Cloud Messaging (FCM) **only** for:

- receiving topic-based silent background messages
- refreshing widget content automatically

Firebase may generate a registration token and an installation ID as part of FCM functionality.  
These are managed by Google and are not used or stored by the developer.

As on iOS, the Firebase Cloud Messaging SDK may send Google limited technical diagnostic data about how the push service itself works (for example, whether messages are delivered).  
This is Google’s diagnostics of its own service, not analytics of how you use the app. It is not linked to you and is not used for tracking or advertising. The developer can see only aggregated delivery statistics in the Firebase console, never data about individual users or devices.

No visible notifications are shown on either platform.

---

## 5. Platform-Specific Information

### 5.1. iOS and watchOS

The iPhone and Apple Watch apps may use the following system features:

- **WidgetKit** — displays schedule data in Home Screen, Lock Screen and Smart Stack widgets and in watch face complications
- **Background app refresh** — for periodic schedule updates on iPhone and Apple Watch
- **Firebase Cloud Messaging (via APNs)** — silent messages that trigger refreshes
- **App Groups** — for storing settings and cached schedules shared between the app and its widgets (non-personal data only)
- **WatchConnectivity** — sends the latest schedule and the app language from your iPhone to your Apple Watch

No personal data is stored in App Groups.

### 5.2. Android

The Android version may use:

- **App Widgets framework** — to display outage schedules
- **Background updates** — controlled by Android OS
- **Firebase Cloud Messaging (FCM)** — for silent background refreshes
- **SharedPreferences** — to store widget settings (non-personal data only)

No personal or device-identifiable data is stored.

---

## 6. Third-Party Services

### iOS and watchOS
- Firebase Cloud Messaging (Google), delivered through Apple Push Notification service (APNs)

### Android
- Firebase Cloud Messaging (FCM)

No analytics or tracking services are used.  
The only exception to note is the Firebase Cloud Messaging SDK’s own diagnostics of the push service, described in sections 4.1 and 4.2.

---

## 7. Data Storage

The app stores only:

- widget settings (language, selected queues, UI preferences)
- last retrieved schedule data
- on Apple Watch, a copy of the schedule received from the backend or from your iPhone

Stored locally on your devices.  
Nothing is uploaded or shared with third parties.

---

## 8. Children's Privacy

The app does not target children and processes **no personal data of any kind**.

---

## 9. Data Security

All communication with the backend uses HTTPS.  
No personal data is transmitted or stored, but standard security measures are applied to server operations.

---

## 10. Your Rights

Because the app does not collect or store personal data:

- there is no data to request, export, delete, or modify
- there is no account to manage

If you uninstall the app, all local data (widget settings & cached schedule) is deleted automatically, including on Apple Watch.

---

## 11. Changes to This Policy

This policy may be updated occasionally.  
The latest version will always be available at the same link.

---

## 12. Contact

If you have questions about this Privacy Policy, you may contact the developer:

**Email:** roman.kyzymenko@gmail.com  
**Developer:** Roman Kyzymenko, private independent developer  
**Location:** Poltava, Ukraine (non-government project)

---

# End of Privacy Policy
