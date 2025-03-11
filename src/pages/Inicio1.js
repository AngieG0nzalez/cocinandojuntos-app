// src/screens/Inicio1.js
import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const Inicio1 = ({ navigation }) => {
  return (
    <ScreenContainer background={require("../assets/background.jpg")}>
      <Text style={globalStyles.title}>Bienvenid@ a</Text>
      <Text style={globalStyles.subtitle}>Cuchara y Acción</Text>
      <Image source={require("../assets/chef.gif")} style={globalStyles.chefImage} />
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Inicio2")}>
        <Text style={globalStyles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default Inicio1;
