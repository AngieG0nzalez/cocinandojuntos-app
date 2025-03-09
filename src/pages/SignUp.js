// src/screens/SignUp.js
import React, { useState } from "react";
import { TextInput, Text, TouchableOpacity } from "react-native";
import  globalStyles  from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ScreenContainer backgroundColor="#fff">
      <Text style={globalStyles.title}>Crear Cuenta</Text>
      <TextInput 
        style={globalStyles.input} 
        placeholder="Correo electrónico" 
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
      <TextInput 
        style={globalStyles.input} 
        placeholder="Confirmar contraseña" 
        secureTextEntry 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
      />
      <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={globalStyles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "#ff6f00", marginTop: 10 }}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default SignUp;
