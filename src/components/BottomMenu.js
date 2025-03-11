import React from "react";
import { View, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Usa íconos de FontAwesome5
import globalStyles from "../styles/globalStyles";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../pages/Home";
import Login from "../pages/Login";

const BottomMenu = ({ navigation }) => {
  return (
    <View style={globalStyles.bottomMenu}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <FontAwesome5 name="home" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("BuscarRecetas")}>
        <FontAwesome5 name="search" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <FontAwesome5 name="sign-out-alt" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
