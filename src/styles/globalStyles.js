import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
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
    color: "blue", // Ajusta el color según sea necesario
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Ajusta la distribución según prefieras
    marginTop: 20,
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
});

export default globalStyles;
