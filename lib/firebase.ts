import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

export function isFirebaseConfigured(): boolean {
    return Boolean(
        firebaseConfig.projectId &&
        firebaseConfig.projectId.trim() !== '' &&
        firebaseConfig.projectId !== 'YOUR_PROJECT_ID' &&
        firebaseConfig.apiKey &&
        firebaseConfig.apiKey.trim() !== '' &&
        firebaseConfig.apiKey !== 'YOUR_API_KEY'
    );
}

export function getFirebaseApp(): FirebaseApp | null {
    if (!isFirebaseConfigured()) return null;
    if (!app) {
        app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    }
    return app;
}

export function getDb(): Firestore | null {
    if (!db) {
        const currentApp = getFirebaseApp();
        if (currentApp) {
            const customDbId = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_ID?.trim();
            db = customDbId ? getFirestore(currentApp, customDbId) : getFirestore(currentApp);
        }
    }
    return db;
}
