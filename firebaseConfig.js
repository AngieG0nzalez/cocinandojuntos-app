// Importar las funciones necesarias de los SDKs de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (asegúrate de que estos valores sean correctos)
const firebaseConfig = {
  apiKey: "AIzaSyCGtSh_QVVhX9ZJ-ds85NeG8_c4XAQ_3zI",
  authDomain: "cucharayaccion.firebaseapp.com",
  databaseURL: "https://cucharayaccion-default-rtdb.firebaseio.com",
  projectId: "cucharayaccion",
  storageBucket: "cucharayaccion.appspot.com", // Corregido: el dominio del storage debe ser "appspot.com"
  messagingSenderId: "360466734528",
  appId: "1:360466734528:web:957ebdda77fc45c091fc25",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar y exportar los servicios de Firebase
export const auth = getAuth(app); // Servicio de autenticación
export const db = getFirestore(app); // Servicio de Firestore
