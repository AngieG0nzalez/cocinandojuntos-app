// src/screens/BuscarRecetas.js
import React from "react";
import { TextInput, Text, TouchableOpacity } from "react-native";
import  globalStyles  from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const BuscarRecetas = () => {
  return (
    <ScreenContainer backgroundColor="#fff">
      <Text style={globalStyles.title}>Buscar Recetas</Text>
      <TextInput style={globalStyles.input} placeholder="Ingresa ingredientes o nombre de receta" />
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default BuscarRecetas;
