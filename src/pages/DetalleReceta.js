import React, { useState, useEffect } from "react";
import {
  Text,
  FlatList,
  View,
  Image,
  ScrollView,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import BottomMenu from "../components/BottomMenu";
import api from "../services/api";

const DetalleReceta = ({ navigation, route }) => {
  const { id } = route.params;
  const [receta, setReceta] = useState(null);

  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await api.getById(id); // Obtener receta por ID
        if (response) {
          setReceta(response);
        } else {
          console.error("No se encontró la receta");
        }
      } catch (error) {
        console.error("Error al cargar la receta:", error);
      }
    };

    fetchReceta();
  }, [id]);

  if (!receta) {
    return (
      <ScreenContainer backgroundColor="#DCB9A3">
        <Text style={globalStyles.titleDetail}>Cargando receta...</Text>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer backgroundColor="#DCB9A3">
      <ScrollView style={globalStyles.containerDetail}>
        {/* Imagen de la receta */}
        <Image source={{ uri: receta.imagen }} style={globalStyles.imageDetail} />

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