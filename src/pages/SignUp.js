import React, { useState } from "react";
import { 
  TextInput, 
  Text, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView 
} from "react-native";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import globalStyles from "../styles/globalStyles";
import ScreenContainer from "../components/ScreenContainer";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Estados para errores de validación
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Validaciones
  const validateName = (name) => {
    if (!name.trim()) {
      setNameError("El nombre es obligatorio");
      return false;
    }
    setNameError("");
    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("El correo electrónico es obligatorio");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Introduce un correo electrónico válido");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("La contraseña es obligatoria");
      return false;
    } else if (password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      setConfirmPasswordError("Por favor confirma tu contraseña");
      return false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Las contraseñas no coinciden");
      return false;
    }
    setConfirmPasswordError("");
    return true;
  };

  const handleRegister = () => {
    if (!validateName(name) || !validateEmail(email) || !validatePassword(password) || !validateConfirmPassword(confirmPassword)) {
      return;
    }

    setIsLoading(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        return updateProfile(userCredential.user, { displayName: name });
      })
      .then(() => {
        Alert.alert("Registro Exitoso", "¡Tu cuenta ha sido creada correctamente!", [
          { text: "OK", onPress: () => navigation.replace("Home") }
        ]);
      })
      .catch((error) => {
        let errorMessage = error.message;
        switch (error.code) {
          case "auth/email-already-in-use":
            errorMessage = "Este correo electrónico ya está en uso";
            break;
          case "auth/invalid-email":
            errorMessage = "El formato del correo electrónico no es válido";
            break;
          case "auth/weak-password":
            errorMessage = "La contraseña es demasiado débil";
            break;
        }
        Alert.alert("Error", errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ScreenContainer background={require("../assets/background.jpg")}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <Text style={globalStyles.title}>Crear Cuenta</Text>
          <TextInput style={globalStyles.input} placeholder="Nombre completo" value={name} onChangeText={setName} />
          {nameError ? <Text style={globalStyles.errorText}>{nameError}</Text> : null}
          <TextInput style={globalStyles.input} placeholder="Correo electrónico" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
          {emailError ? <Text style={globalStyles.errorText}>{emailError}</Text> : null}
          <TextInput style={globalStyles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
          {passwordError ? <Text style={globalStyles.errorText}>{passwordError}</Text> : null}
          <TextInput style={globalStyles.input} placeholder="Confirmar contraseña" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
          {confirmPasswordError ? <Text style={globalStyles.errorText}>{confirmPasswordError}</Text> : null}
          <TouchableOpacity style={globalStyles.button} onPress={handleRegister} disabled={isLoading}>
            {isLoading ? <ActivityIndicator color="white" /> : <Text style={globalStyles.buttonText}>Registrarse</Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#ff6f00", marginTop: 10 }}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default SignUp;

