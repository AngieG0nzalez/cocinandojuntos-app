import React, { useState, useEffect } from "react";
import {
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image
} from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import BottomMenu from "../components/BottomMenu";
import api from "../services/api";

const RecetasPorCategoria = ({ navigation, route }) => {
    const { categoria } = route.params;
  const [allRecetas, setAllRecetas] = useState([]); // Inicializar como array vacío

  // Cargar recetas al montar el componente
  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await api.getByCategory(categoria); // Obtener todas las recetas

        if (Array.isArray(response)) {
          console.log("🚀 ~ fetchRecetas ~ response:", response);
          // Verificar que la respuesta es un array
          setAllRecetas(response);
        } else {
          console.error("La respuesta de la API no es un array:", response);
          setAllRecetas([]);
          setRecetas([]);
        }
        console.log("🚀 ~ fetchRecetas ~ response:", response);
        console.log("🚀 ~ fetchRecetas ~ categoriasUnicas:", categoriasUnicas);
      } catch (error) {
        console.error("Error al cargar recetas:", error);
      }
    };
    fetchRecetas();
  }, []);


  return (
    <ScreenContainer backgroundColor="#DCB9A3">
      <Text style={globalStyles.title}>{categoria}</Text>

      {/* Lista de recetas filtradas */}
        <FlatList
          key={"recetas-list"} // 🔹 Cambia la key para evitar el error de numColumns
          data={allRecetas}
          keyExtractor={(item) =>
            item.id?.toString() || `receta-${item.nombre}`
          } // Evitar Math.random()
          renderItem={({ item }) => (
            <TouchableOpacity
              style={globalStyles.card1}
              onPress={() =>
                navigation.navigate("DetalleReceta", { id: item?.id })
              }
            >
              <Text style={globalStyles.cardTitle}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />

      <BottomMenu navigation={navigation} />
    </ScreenContainer>
  );
};

export default RecetasPorCategoria;
