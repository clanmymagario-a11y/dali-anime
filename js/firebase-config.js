// Importa las funciones necesarias desde los SDK que uses
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// Configuración de tu app de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwU-xxSN7fnmZdvsezbRTvIUFy1e8ZbM",
  authDomain: "dali-anime.firebaseapp.com",
  projectId: "dali-anime",
  storageBucket: "dali-anime.appspot.com",
  messagingSenderId: "715941737867",
  appId: "1:715941737867:web:593571dbeaf29582ffeb8e",
  measurementId: "G-E27WB6WHWV"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };