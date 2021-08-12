import firebaseClient from "firebase/app";
import "firebase/auth";

const CLIENT_CONFIG = {
  apiKey: "AIzaSyD8PLSWnGDfPC7E_iXIaPoTS4O56eq5wfY",
  authDomain: "blog-nextjs-typescript.firebaseapp.com",
  databaseURL: "https:/blog-nextjs-typescript.firebaseio.com",
  projectId: "blog-nextjs-typescript",
  storageBucket: "blog-nextjs-typescript.appspot.com",
  messagingSenderId: "110357686694",
  appId: "1:110357686694:web:dd0fcf90e289d249e48767",
  measurementId: "G-W9580092N4"
};

if (typeof window !== "undefined" && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(CLIENT_CONFIG);
  firebaseClient
    .auth()
    .setPersistence(firebaseClient.auth.Auth.Persistence.SESSION);
  (window as any).firebase = firebaseClient;
}

export { firebaseClient };
