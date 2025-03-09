// src/screens/Home.js
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import  globalStyles  from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const Home = ({ navigation }) => {
  return (
    <ScreenContainer backgroundColor="#f8f8f8">
      <Text style={globalStyles.title}>Bienvenid@ a Cuchara y Acción</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("BuscarRecetas")}>
        <Text style={globalStyles.buttonText}>Buscar Recetas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("CrearReceta")}>
        <Text style={globalStyles.buttonText}>Crear Receta</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default Home;
