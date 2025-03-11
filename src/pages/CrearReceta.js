// src/screens/CrearReceta.js
import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import BottomMenu from "../components/BottomMenu";
import { Picker } from '@react-native-picker/picker';
import api from "../services/api";

const CrearReceta = ({ navigation }) => {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparacion, setPreparacion] = useState("");
  const [selectedOption, setSelectedOption] = useState('pollo');
  const urlRegex = /^(https?:\/\/)[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|webp|pdf|docx?|xlsx?|txt|zip)$/i;
  const validarURL = (url) => urlRegex.test(url);
  const urlAlternativa = "https://www.vidaxl.es/dw/image/v2/BFNS_PRD/on/demandware.static/-/Sites-vidaxl-catalog-master-sku/default/dwd9cd0fb8/hi-res/536/638/672/4026/4009/442506/image_1_442506.jpg?sw=400"
  const handleCreate = () => {

    const listaIngredientes = ingredientes.split(',')
    const pasosPreparacion = preparacion.split(',')
    const link = validarURL(url) ? url:urlAlternativa
    

    let receta = {
      "categoria": selectedOption,
      "nombre": titulo,
      "imagen":link ,
      "ingredientes": listaIngredientes,
      "pasos": pasosPreparacion
    }
    console.log(receta)
    const createRecetas = async () => {
      try {
        await api.create(receta);
      } catch (error) {
        console.error("Error al crear recetas:", error);
      }
    }
    createRecetas()
  };

  return (
    <ScreenContainer backgroundColor="#DCB9A3">
      <Text style={globalStyles.title}>Crear Nueva Receta</Text>
      <Picker

        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
        style={globalStyles.input}
      >
        <Picker.Item label="Pollo" value="pollo" />
        <Picker.Item label="Pescados y Mariscos" value="pescado_mariscos" />
        <Picker.Item label="Carne" value="carne" />
        <Picker.Item label="Vegetariano y Vegano" value="vegano_vegetariano" />
        <Picker.Item label="Postres" value="postres" />
        <Picker.Item label="Pastas" value="pastas" />
      </Picker>
      <TextInput
        style={globalStyles.input}
        placeholder="Nombre de la receta"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="link imagen"
        value={url}
        onChangeText={setUrl}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Ingredientes (separados por coma)"
        value={ingredientes}
        onChangeText={setIngredientes}
        multiline
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Preparación (separados por coma)"
        value={preparacion}
        onChangeText={setPreparacion}
        multiline
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleCreate} >
        <Text style={globalStyles.buttonText}>Guardar Receta</Text>
      </TouchableOpacity>
      <BottomMenu navigation={navigation} />
    </ScreenContainer>
  );
};

export default CrearReceta;
