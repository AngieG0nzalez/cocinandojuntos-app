// src/screens/Home.js
import React, { useContext } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import BottomMenu from "../components/BottomMenu"; // <-- 📌 Importa el menú
import { getAuth, signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Home = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    setUser(null); // Limpia el estado del usuario en el contexto
  };

  return (
    <ScreenContainer backgroundColor="#DCB9A3">
      <Text style={globalStyles.title}>¡Bienvenido, chef! 👋</Text>
      <Image source={require("../assets/Chef.jpg")} style={globalStyles.chefImg} />
      <Text style={globalStyles.title}>¿Qué haremos hoy?</Text>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("BuscarRecetas")}>
        <Text style={globalStyles.buttonText}>Buscar Recetas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("CrearReceta")}>
        <Text style={globalStyles.buttonText}>Crear tu propia receta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={handleLogout}>
        <Text style={globalStyles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default Home;
