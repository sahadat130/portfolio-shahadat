# Md Shahadat Hossain - Portfolio Website

A modern, responsive portfolio website built with Angular 17 and Firebase.

## Features

- Modern dark theme with gradient accents
- Smooth animations and transitions
- Fully responsive design
- Firebase Hosting & Firestore integration
- Contact form with Firebase backend
- SEO optimized

## Prerequisites

- Node.js 18+
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)
- Angular CLI (`npm install -g @angular/cli`)

## Setup Instructions

### 1. Install Dependencies

```bash
cd portfolio-shahadat
npm install
```

### 2. Configure Firebase

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Hosting
4. Get your Firebase config from Project Settings > General > Your apps

5. Update `src/environments/environment.ts` with your Firebase credentials:

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

6. Update `.firebaserc` with your project ID:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

### 3. Run Locally

```bash
npm start
```

The app will be available at `http://localhost:4200`

### 4. Deploy to Firebase

```bash
# Login to Firebase
firebase login

# Build the project
npm run build

# Deploy
firebase deploy
```

## Project Structure

```
portfolio-shahadat/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── skills/
│   │   │   ├── experience/
│   │   │   ├── projects/
│   │   │   ├── education/
│   │   │   └── contact/
│   │   └── app.component.ts
│   ├── environments/
│   ├── styles.scss
│   └── index.html
├── firebase.json
├── firestore.rules
└── package.json
```

## Customization

- Update personal information in each component
- Add your profile image to `src/assets/images/`
- Modify colors in `src/styles.scss` (CSS variables)
- Update social media links in components

## Technologies Used

- Angular 17 (Standalone Components)
- TypeScript
- SCSS
- Firebase (Hosting & Firestore)
- Font Awesome Icons
- Google Fonts (Poppins & Fira Code)

## License

MIT License
