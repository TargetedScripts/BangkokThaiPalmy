// /assets/js/core/firebase-init.js

const firebaseConfig = {
  apiKey: "AIzaSyCMd3tOM2g8FNL96UIlGRE9cbq3UUvssrQ",
  authDomain: "restosync-saas.firebaseapp.com",
  projectId: "restosync-saas",
  storageBucket: "restosync-saas.firebasestorage.app",
  messagingSenderId: "780544019719",
  appId: "1:780544019719:web:e5fccb00a4981f2579c9a2"
};

// Inisialisasi Firebase hanya jika belum ada instance yang aktif
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Ekspor instance Firestore dan tenant default
export const db = firebase.firestore();
export const DEFAULT_TENANT_ID = "bangkokthaipalmy";
