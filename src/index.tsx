import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqtAYa7ANPCY9t68zdmGq2tcfolwcIB4I",
  authDomain: "ifc-frontend-app.firebaseapp.com",
  projectId: "ifc-frontend-app",
  storageBucket: "ifc-frontend-app.appspot.com",
  messagingSenderId: "968796046330",
  appId: "1:968796046330:web:16a750e0de39eeb42b5a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
