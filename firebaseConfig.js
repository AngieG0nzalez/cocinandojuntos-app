import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (reemplázala con la tuya)
const firebaseConfig = {
  apiKey: "AIzaSyCGtSh_QVVhX9ZJ-ds85NeG8_c4XAQ_3zI",
  authDomain: "cucharayaccion.firebaseapp.com",
  projectId: "cucharayaccion",
  storageBucket: "cucharayaccion.firebasestorage.app",
  messagingSenderId: "360466734528",
  appId: "1:360466734528:web:957ebdda77fc45c091fc25",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
