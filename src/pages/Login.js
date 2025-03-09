import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import globalStyles from "../styles/globalStyles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Iniciar Sesión</Text>

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

      {error ? <Text style={{ color: "red", marginBottom: 10 }}>{error}</Text> : null}

      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleLogin}
      >
        <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
