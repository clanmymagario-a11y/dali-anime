// js/firebase-config.js
// Importa las funciones que vas a usar desde la versión 9 de Firebase.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// !!! IMPORTANTE: Reemplaza estos valores con la configuración de tu proyecto de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyAwU-xxSN7fmnZdvsezbrBTVIUfY1e8ZbM",
  authDomain: "dali-anime.firebaseapp.com",
  projectId: "dali-anime",
  storageBucket: "dali-anime.firebasestorage.app",
  messagingSenderId: "715941737867",
  appId: "1:715941737867:web:593571dbeaf29582ffeb8e",
};


  
  
  
 

// Inicializa Firebase con tu configuración
const app = initializeApp(firebaseConfig);

// Exporta los servicios de Firebase que usarás en otros archivos.
export const auth = getAuth(app);
export const db = getFirestore(app);
