import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    fontfamily: "cursive",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1.5,
  },
  subtitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    fontfamily: "cursive",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1.5,
  },

  title1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    fontfamily: "cursive",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1.5,
  },
  subtitle1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#FFFFFF",
    fontfamily: "cursive",
    textShadowColor: "#000000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1.5,
  },

  label: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
    alignSelf: "flex-start",
    marginLeft: 130,
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center", // Corrección: "left" no es válido en alignItems
    marginHorizontal: 96,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 8,
    borderRadius: 4,
  },
  rememberText: {
    fontSize: 16,
  },
  forgotContainer: {
    paddingVertical: 1,
    alignSelf: "flex-end",
    marginHorizontal: 96,
  },
  forgotText: {
    fontSize: 16,
    color: "black", // Ajusta el color según sea necesario
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Ajusta la distribución según prefieras
    width: "100%",
    marginVertical: 15,
  },
  buttonRegistro: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff6f00",
    borderRadius: 8,
    padding: 12,
    flex: 1,
    marginHorizontal: 16,
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
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  chefImg: {
    borderRadius: 20, // Bordes redondeados
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 150, // Ajuste de tamaño
    height: 150,
  },
  bottomMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FF7300",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  card1: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
  },
  card2: {
    width: "50%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
  },
  cardImage: {
    width: 100, // Ajusta según tu diseño
    height: 100, // Ajusta según tu diseño
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  containerDetail: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5E3D8",
  },
  titleDetail: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitleDetail: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  bulletDetail: {
    fontSize: 16,
    marginLeft: 10,
  },
  numberedDetail: {
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 5,
  },
  imageDetail: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  favButton: {
    backgroundColor: "#f5e3d8", // Color amarillo
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  
  favText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  
});

export default globalStyles;
