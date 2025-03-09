import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ImageBackground, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const API_MEALDB = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const API_COUNTRIES = "https://restcountries.com/v3.1/all";

// 🌟 Componente reutilizable para pantallas con imagen o color de fondo pr
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
    <ScreenContainer background={require("./assets/background.jpg")}>
      <Text style={styles.title}>¡Hola, chef! 👋</Text>
      <Text style={styles.subtitle}>Tu próxima gran receta comienza aquí</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.rememberContainer}>
          <View style={styles.checkbox}>
            {/* Aquí puedes agregar el icono de check si está marcado */}
          </View>
          <Text style={styles.rememberText}>Recordar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotContainer}>
          <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>



      {/* Contenedor para los botones de redes sociales */}
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.buttonRegistro}>
          <Image source={require('./assets/Logo_facebook.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegistro}>
          <Image source={require('./assets/Logo_google.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Correo</Text>
        </TouchableOpacity>
      </View>



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
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BuscarRecetas")}
      >
        <Text style={styles.buttonText}>BUSCAR RECETAS 🔍</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CrearReceta")}
      >
        <Text style={styles.buttonText}>🍲 CREAR RECETAS</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

function BuscarRecetas() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await fetch(`${API_MEALDB}${query}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error al buscar recetas", error);
    }
  };

  return (
    <View style={styles.containerApi}>
      <Text style={styles.title}>Buscar Recetas</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un ingrediente"
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={searchRecipes}>
        <Text style={styles.buttonText}>🔍 Buscar</Text>
      </TouchableOpacity>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.recipeImage} />
          </View>
        )}
      />
    </View>
  );
}

function CrearReceta() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API_COUNTRIES);
        const data = await response.json();
        setCountries(data.map((country) => country.name.common));
      } catch (error) {
        console.error("Error al obtener países", error);
      }
    };
    fetchCountries();
  }, []);

  const searchByCountry = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedCountry}`);
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error al obtener recetas del país", error);
    }
  };

  return (
    <View style={styles.containerApi}>
      <Text style={styles.title}>Buscar Recetas por País</Text>
      <FlatList
        data={countries}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.button} onPress={() => { setSelectedCountry(item); searchByCountry(); }}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeTitle}>{item.strMeal}</Text>
            <Image source={{ uri: item.strMealThumb }} style={styles.recipeImage} />
          </View>
        )}
      />
    </View>
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
        <Stack.Screen name="BuscarRecetas" component={BuscarRecetas} />
        <Stack.Screen name="CrearReceta" component={CrearReceta} />
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
  label: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 130,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    marginHorizontal: 96,
  },
  checkbox: {
    flexDirection: 'row',
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginRight: 8,
    borderRadius: 4,
  },
  rememberText: {
    fontSize: 16,


  },
  forgotContainer: {
    paddingVertical: 1,
    alignSelf: 'flex-end',
    marginHorizontal: 96,
  },
  forgotText: {
    fontSize: 16,
    color: 'blue', // Ajusta el color según sea necesario
  },

  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // O usa 'space-around', 'space-evenly' o 'center' según tu preferencia
    marginTop: 20, // Añade un margen superior para separar los botones del formulario
  },
  buttonRegistro: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#ff6f00",
    borderRadius: 8,
    padding: 12,
    flex: 1, // Para que los botones ocupen el espacio disponible
    marginHorizontal: 16, // Espacio entre los botones
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
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
