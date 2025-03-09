import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Inicio1 from "../pages/Inicio1";
import Inicio2 from "../pages/Inicio2";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import BuscarRecetas from "../pages/BuscarRecetas";
import CrearReceta from "../pages/CrearReceta";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio1" component={Inicio1} />
        <Stack.Screen name="Inicio2" component={Inicio2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BuscarRecetas" component={BuscarRecetas} />
        <Stack.Screen name="CrearReceta" component={CrearReceta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
