import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyDi-fZbuRe4TuafMqLPpkIhsIQkllxkPOs',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'jips-college.firebaseapp.com',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'jips-college',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'jips-college.firebasestorage.app',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '803775757213',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '1:803775757213:web:c337308c5f2acd6cb28d74',
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
