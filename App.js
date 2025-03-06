import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 🌟 Componente reutilizable para pantallas con imagen o color de fondo
const ScreenContainer = ({ children, background, backgroundColor }) => {
  if (background) {
    return (
      <ImageBackground source={background} style={styles.backgroundImage}>
        <View style={styles.container}>{children}</View>
      </ImageBackground>
    );
  }
  return <View style={[styles.container, { backgroundColor }]}>{children}</View>;
};

// 🌟 Pantalla de Inicio 1 
function Inicio1({ navigation }) {
  return (
    <ScreenContainer background={require("./assets/background.jpg")}>
      <Text style={styles.title}>Bienvenid@ a</Text>
      <Text style={styles.subtitle}>⭐ CUCHARA Y ACCIÓN 🍽️</Text>
      <Image source={require("./assets/chef.gif")} style={styles.chefImage} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicio2")}>
        <Text style={styles.buttonText}>CONTINUAR</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

// 🌟 Pantalla de Inicio 2 
function Inicio2({ navigation }) {
  return (
    <ScreenContainer background={require("./assets/background.jpg")}>
      <Text style={styles.question}>¿Cansado de cocinar siempre lo mismo?</Text>
      <Text style={styles.description}>Descubre recetas nuevas y deliciosas en segundos.</Text>
      <Text style={styles.description}>Solo elige, cocina y sorprende a todos.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>¿LISTO PARA SORPRENDERTE?</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

// 🌟 Pantalla de Login (Con color de fondo específico)
function Login({ navigation }) {
  return (
    <ScreenContainer backgroundColor="#FAE5D3">
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

// 🌟 Pantalla de Registro (SignUp) (Con color de fondo específico)
function SignUp({ navigation }) {
  return (
    <ScreenContainer backgroundColor="#FAE5D3">
      <Text style={styles.title}>Crea una Cuenta</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Teléfono" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

// 🌟 Pantalla Home
function Home({ navigation }) {
  return (
    <ScreenContainer backgroundColor="#FAE5D3">
      <Text style={styles.title}>¡Bienvenido a tu cocina Wilson! 👨‍🍳</Text>
      <Image source={require("./assets/Chef.jpg")} style={styles.chefImage} />
      <Text style={styles.title}>¿Que haremos hoy?</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert("Buscar Recetas")}>
        <Text style={styles.buttonText}>🔍 Buscar Recetas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => alert("Crear Receta")}>
        <Text style={styles.buttonText}>🍲 Crear Receta</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

// Configuración de la Navegación
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio1" component={Inicio1} />
        <Stack.Screen name="Inicio2" component={Inicio2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 🎨 Estilos
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  chefImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75, 
    overflow: "hidden",
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#555",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#ff6f00",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
  buttonSecondary: {
    backgroundColor: "#ff9800",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
