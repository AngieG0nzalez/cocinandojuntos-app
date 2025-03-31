import { db } from "../../firebaseConfig";
import { doc, setDoc, deleteDoc, getDocs, collection, getDoc } from "firebase/firestore";

/**
 * Agrega una receta a favoritos en Firestore
 * @param {string} userId - ID del usuario
 * @param {object} receta - Datos de la receta
 */
export const agregarAFavoritos = async (userId, receta) => {
    try {
        const recetaRef = doc(collection(db, `favoritos`, userId, `recetas`), receta.id);
        await setDoc(recetaRef, {
            nombre: receta.nombre,
            imagen: receta.imagen,
            ingredientes: receta.ingredientes || [],
            pasos: receta.pasos || []
        });
        console.log("✅ Receta agregada a favoritos.");
    } catch (error) {
        console.error("❌ Error al agregar a favoritos:", error);
    }
};

/**
 * Elimina una receta de favoritos en Firestore
 * @param {string} userId - ID del usuario
 * @param {string} recetaId - ID de la receta
 */
export const eliminarDeFavoritos = async (userId, recetaId) => {
    try {
        const recetaRef = doc(collection(db, `favoritos`, userId, `recetas`), recetaId);
        await deleteDoc(recetaRef);
        console.log("✅ Receta eliminada de favoritos.");
    } catch (error) {
        console.error("❌ Error al eliminar de favoritos:", error);
    }
};

/**
 * Verifica si una receta está en favoritos
 * @param {string} userId - ID del usuario
 * @param {string} recetaId - ID de la receta
 * @returns {boolean} - True si está en favoritos, False si no
 */
export const esFavorito = async (userId, recetaId) => {
    try {
        const recetaRef = doc(collection(db, `favoritos`, userId, `recetas`), recetaId);
        const docSnap = await getDoc(recetaRef);
        return docSnap.exists();
    } catch (error) {
        console.error("❌ Error al verificar favoritos:", error);
        return false;
    }
};

/**
 * Obtiene todas las recetas favoritas del usuario desde Firestore
 * @param {string} userId - ID del usuario
 * @returns {Array} - Lista de recetas favoritas
 */
export const obtenerFavoritos = async (userId) => {
    try {
        const favoritosRef = collection(db, `favoritos`, userId, `recetas`);
        const snapshot = await getDocs(favoritosRef);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error("❌ Error al obtener favoritos:", error);
        return [];
    }
};
