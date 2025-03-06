import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Inicio1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bienvenid@ a CUCHARA Y ACCIÓN</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicio2")}>
      <Text style={styles.buttonText}>CONTINUAR</Text>
    </TouchableOpacity>
  </View>
);

const Inicio2 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>¿Cansado de cocinar siempre lo mismo?</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
      <Text style={styles.buttonText}>¡LISTO PARA SORPRENDERTE!</Text>
    </TouchableOpacity>
  </View>
);

const Login = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>¡Hola, chef!</Text>
    <TextInput placeholder="Email" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
      <Text style={styles.link}>Don't have an account? Sign Up</Text>
    </TouchableOpacity>
  </View>
);

const SignUp = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.subtitle}>Crea una cuenta</Text>
    <TextInput placeholder="Enter your email" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);

const Home = () => (
  <View style={styles.container}>
    <Text style={styles.title}>¡Bienvenido, Wilson!</Text>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>CREAR TU PROPIA RECETA</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>BUSCAR RECETAS</Text>
    </TouchableOpacity>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio1" component={Inicio1} />
        <Stack.Screen name="Inicio2" component={Inicio2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4C7A4",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#FF7F3F",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    marginTop: 10,
  },
});