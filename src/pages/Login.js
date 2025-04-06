import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setIsLoading(true);
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user); // Actualiza el estado del usuario en el contexto
      Alert.alert("Inicio de sesión exitoso", "Bienvenido a la aplicación");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer background={require("../assets/background.jpg")}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={globalStyles.container}>
        <Text style={globalStyles.title1}>¡Hola, chef! 👋</Text>
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
        <TouchableOpacity style={globalStyles.button} onPress={handleLogin} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="white" /> : <Text style={globalStyles.buttonText}>Iniciar Sesión</Text>}
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default Login;