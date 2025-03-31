import React, { useState, useEffect } from "react";
import { Text, FlatList, View, Image, ScrollView } from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import BottomMenu from "../components/BottomMenu";
import api from "../services/api";
import {
  agregarAFavoritos,
  eliminarDeFavoritos,
  esFavorito,
} from "../services/favoritosService";
import { TouchableOpacity } from "react-native";

const DetalleReceta = ({ navigation, route }) => {
  const { id } = route.params;
  const userId = "Wilson123";
  const [receta, setReceta] = useState(null);
  const [favorita, setFavorita] = useState(false);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await api.getById(id); // Obtener receta por ID
        if (response) {
          setReceta(response);
          const favorito = await esFavorito(userId, id);
          setFavorita(favorito); // Verificar si la receta está en favoritos
        } else {
          console.error("No se encontró la receta");
        }
      } catch (error) {
        console.error("Error al cargar la receta:", error);
      }
    };

    fetchReceta();
  }, [id]);

  // Función para agregar o quitar la receta de favoritos
  const toggleFavorito = async () => {
    if (favorita) {
      console.log("🚀 ~ toggleFavorito ~ favorita:", favorita)
      await eliminarDeFavoritos(userId, id);
    } else {
      await agregarAFavoritos(userId, receta);
    }
      console.log("🚀 ~ toggleFavorito ~ receta:", receta)
      console.log("🚀 ~ toggleFavorito ~ id:", id)
      console.log("🚀 ~ toggleFavorito ~ userId:", userId)
    setFavorita(!favorita);
  };

  if (!receta) {
    return (
      <ScreenContainer backgroundColor="#DCB9A3">
        <Text style={globalStyles.titleDetail}>Cargando receta...</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer backgroundColor="#DCB9A3">

      <TouchableOpacity onPress={toggleFavorito} style={globalStyles.favButton}>
        <Text style={globalStyles.favText}>
          {favorita ? "❤️ Quitar de Favoritos" : "🤍 Agregar a Favoritos"}
        </Text>
      </TouchableOpacity>

      <ScrollView style={globalStyles.containerDetail}>
        {/* Imagen de la receta */}
        <Image
          source={{ uri: receta.imagen }}
          style={globalStyles.imageDetail}
        />

        {/* Nombre de la receta */}
        <Text style={globalStyles.titleDetail}>{receta.nombre}</Text>

        {/* Ingredientes con viñetas */}
        <Text style={globalStyles.subtitleDetail}>Ingredientes:</Text>
        <FlatList
          data={receta.ingredientes}
          keyExtractor={(item, index) => `ingrediente-${index}`}
          renderItem={({ item }) => (
            <Text style={globalStyles.bulletDetail}>• {item}</Text>
          )}
        />

        {/* Pasos enumerados */}
        <Text style={globalStyles.subtitleDetail}>Pasos:</Text>
        <FlatList
          data={receta.pasos}
          keyExtractor={(item, index) => `paso-${index}`}
          renderItem={({ item, index }) => (
            <Text style={globalStyles.numberedDetail}>
              {index + 1}. {item}
            </Text>
          )}
        />
      </ScrollView>

      <BottomMenu navigation={navigation} />
    </ScreenContainer>
  );
};

export default DetalleReceta;
