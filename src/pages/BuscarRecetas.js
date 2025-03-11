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

const BuscarRecetas = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [recetas, setRecetas] = useState([]); // Recetas filtradas
  const [allRecetas, setAllRecetas] = useState([]); // Inicializar como array vacío
  const [categorias, setCategorias] = useState([]);
  let categoriasUnicas = [];

  // Cargar recetas al montar el componente
  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await api.getAll(); // Obtener todas las recetas

        if (Array.isArray(response)) {
          console.log("🚀 ~ fetchRecetas ~ response:", response);
          // Verificar que la respuesta es un array
          setAllRecetas(response);
          //setRecetas(response);
          categoriasUnicas = [
            ...new Set(
              response.map((receta) => receta?.categoria).filter(Boolean)
            ), // Filtrar valores nulos o indefinidos
          ].map((categoria) => {
            const recetaEjemplo = response.find(
              (receta) => receta?.categoria === categoria
            );
            return {
              nombre: categoria,
              imagen:
                recetaEjemplo?.imagen || "https://via.placeholder.com/100", // Imagen por defecto
            };
          });

          console.log(
            "🚀 ~ fetchRecetas ~ categoriasUnicas:",
            categoriasUnicas
          );
          setCategorias(categoriasUnicas);
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

    console.log("---------->", searchText.trim() === "");
    console.log("---------->", recetas.length === 0);
    fetchRecetas();
  }, []);

  useEffect(() => {
    if (!allRecetas.length) return; // Evita errores si aún no hay datos

    if (searchText.trim() === "") {
      setRecetas([]); // 🔹 Si no hay texto en la búsqueda, limpiar resultados
    } else {
      const resultados = allRecetas.filter((receta) =>
        receta?.nombre?.toLowerCase().includes(searchText.toLowerCase())
      );
      setRecetas(resultados);
    }
  }, [searchText, allRecetas]); // 🔹 Se ejecuta cuando cambian `searchText` o `allRecetas`

  return (
    <ScreenContainer backgroundColor="#DCB9A3">
      <Text style={globalStyles.title}>Buscar Recetas</Text>

      <TextInput
        style={globalStyles.input}
        placeholder="Ingresa ingredientes o nombre de receta"
        value={searchText}
        onChangeText={setSearchText} // Se actualiza automáticamente
      />

      {/* Lista de recetas filtradas */}

      {recetas.length === 0 && searchText.trim() === "" ? (
        <FlatList
          key={"categorias-list"} // 🔹 Fuerza un nuevo render cuando cambia el tipo de lista
          data={categorias}
          numColumns={2}
          keyExtractor={(item) => item.nombre}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={globalStyles.card2}
              onPress={() =>
                navigation.navigate("RecetasPorCategoria", {
                  categoria: item?.nombre
                })
              }
            >
              <Image
                source={{ uri: item.imagen }}
                style={globalStyles.cardImage}
                resizeMode="cover"
              />
              <Text style={globalStyles.cardTitle}>{item.nombre}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <FlatList
          key={"recetas-list"} // 🔹 Cambia la key para evitar el error de numColumns
          data={recetas}
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
      )}

      <BottomMenu navigation={navigation} />
    </ScreenContainer>
  );
};

export default BuscarRecetas;
