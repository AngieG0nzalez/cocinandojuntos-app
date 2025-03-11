// src/screens/Inicio2.js
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import  globalStyles  from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const Inicio2 = ({ navigation }) => {
  return (
    <ScreenContainer background={require("../assets/background.jpg")}>
      <Text style={globalStyles.title}>Regístrate y accede a recetas irresistibles solo para ti.</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("SignUp")}>
        <Text style={globalStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default Inicio2;
