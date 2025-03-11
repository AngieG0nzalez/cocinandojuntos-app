import axios from "axios";

// Configurar la URL base de tu JSON Server
//const API_URL = "http://localhost:3002/recetas";
const API_URL = "https://67cf65a9823da0212a825652.mockapi.io/api/v1/recetas";

const api = {
  // 🟢 OBTENER todas las recetas
  getAll: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error("Error al obtener las recetas:", error);
      throw error;
    }
  },

  // 🟢 OBTENER una receta por ID
  getById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la receta con ID ${id}:`, error);
      throw error;
    }
  },

  // 🟢 OBTENER recetas por categoría
  getByCategory: async (categoria) => {
    try {
      const response = await axios.get(`${API_URL}?categoria=${categoria}`);
      return response.data;
    } catch (error) {
      console.error(
        `Error al obtener recetas de la categoría ${categoria}:`,
        error
      );
      throw error;
    }
  },

  // 🟢 OBTENER recetas por nombre parcial
  getByName: async (nombre) => {
    try {
      const response = await axios.get(`${API_URL}?nombre_like=${nombre}`);
      return response.data;
    } catch (error) {
      console.error(`Error al buscar recetas con el nombre que contiene "${nombre}":`, error);
      throw error;
    }
  },
  

  // 🟡 CREAR una nueva receta (POST)
  create: async (nuevaReceta) => {
    try {
      const response = await axios.post(API_URL, nuevaReceta);
      return response.data;
    } catch (error) {
      console.error("Error al crear la receta:", error);
      throw error;
    }
  },

  // 🟠 ACTUALIZAR receta completa (PUT)
  update: async (id, recetaActualizada) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, recetaActualizada);
      return response.data;
    } catch (error) {
      console.error(`Error al actualizar la receta con ID ${id}:`, error);
      throw error;
    }
  },

  // 🟠 ACTUALIZAR parcialmente (PATCH)
  updatePartial: async (id, datosParciales) => {
    try {
      const response = await axios.patch(`${API_URL}/${id}`, datosParciales);
      return response.data;
    } catch (error) {
      console.error(
        `Error al actualizar parcialmente la receta con ID ${id}:`,
        error
      );
      throw error;
    }
  },

  // 🔴 ELIMINAR receta (DELETE)
  delete: async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al eliminar la receta con ID ${id}:`, error);
      throw error;
    }
  },
};

export default api;