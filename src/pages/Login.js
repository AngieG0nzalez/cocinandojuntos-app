import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";
import { Linking } from "react-native";
import ScreenContainer from "../components/ScreenContainer";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleRememberToggle = () => {
    setRememberMe(!rememberMe); // Cambia entre marcado y desmarcado
  };

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un correo válido.");
      return false;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return false;
    }

    setError("");
    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      navigation.navigate("Home");
    }
  };

  return (
    <ScreenContainer background={require("../assets/background.jpg")}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.title1}>¡Hola, chef! 👋</Text>
        <Text style={globalStyles.subtitle1}>
          Tu próxima gran receta comienza aquí
        </Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? (
          <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text>
        ) : null}
        {/* Botón de iniciar sesión */}
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Sección de "Recordar" y "¿Olvidaste tu contraseña?" */}
        <View style={globalStyles.socialButtonsContainer}>
          <TouchableOpacity
            style={globalStyles.rememberContainer}
            onPress={handleRememberToggle}
          >
            <View
              style={[
                globalStyles.checkbox,
                rememberMe && globalStyles.checkboxChecked,
              ]}
            >
              {rememberMe && (
                <MaterialIcons name="check" size={18} color="white" />
              )}
            </View>
            <Text style={globalStyles.rememberText}>Recordar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.forgotContainer}>
            <Text style={globalStyles.forgotText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
        </View>

        {/* Contenedor para los botones de redes sociales */}
        <View style={globalStyles.socialButtonsContainer}>
          <TouchableOpacity
            style={globalStyles.buttonRegistro}
            onPress={() => Linking.openURL("https://www.facebook.com")}
          >
            <Image
              source={require("../assets/Logo_facebook.png")}
              style={globalStyles.icon}
            />
            <Text style={globalStyles.buttonText}>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={globalStyles.buttonRegistro}
            onPress={() => Linking.openURL("https://accounts.google.com/")}
          >
            <Image
              source={require("../assets/Logo_google.png")}
              style={globalStyles.icon}
            />
            <Text style={globalStyles.buttonText}>Correo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default Login;
