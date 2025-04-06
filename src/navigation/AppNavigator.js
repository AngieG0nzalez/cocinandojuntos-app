import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../context/AuthContext";

import Inicio1 from "../pages/Inicio1";
import Inicio2 from "../pages/Inicio2";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import BuscarRecetas from "../pages/BuscarRecetas";
import CrearReceta from "../pages/CrearReceta";
import RecetasPorCategoria from "../pages/RecetasPorCategoria";
import DetalleReceta from "../pages/DetalleReceta";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null; // Puedes mostrar un indicador de carga aquí
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Home" : "Inicio1"} screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Inicio1" component={Inicio1} />
            <Stack.Screen name="Inicio2" component={Inicio2} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="BuscarRecetas" component={BuscarRecetas} />
            <Stack.Screen name="CrearReceta" component={CrearReceta} />
            <Stack.Screen name="RecetasPorCategoria" component={RecetasPorCategoria} />
            <Stack.Screen name="DetalleReceta" component={DetalleReceta} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
