// src/screens/CrearReceta.js
import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity } from "react-native";
import  globalStyles  from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const CrearReceta = () => {
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparacion, setPreparacion] = useState("");

  return (
    <ScreenContainer backgroundColor="#fff">
      <Text style={globalStyles.title}>Crear Nueva Receta</Text>
      <TextInput 
        style={globalStyles.input} 
        placeholder="Título de la receta" 
        value={titulo} 
        onChangeText={setTitulo} 
      />
      <TextInput 
        style={globalStyles.input} 
        placeholder="Ingredientes" 
        value={ingredientes} 
        onChangeText={setIngredientes} 
        multiline
      />
      <TextInput 
        style={globalStyles.input} 
        placeholder="Preparación" 
        value={preparacion} 
        onChangeText={setPreparacion} 
        multiline
      />
      <TouchableOpacity style={globalStyles.button}>
        <Text style={globalStyles.buttonText}>Guardar Receta</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default CrearReceta;
