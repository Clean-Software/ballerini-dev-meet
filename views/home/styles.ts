import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    padding: 30,
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#FFFFFF",
  },
  subtitle: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "normal",
    alignSelf: "flex-start",
    color: "#C6C6C6",
  },
  exclamacao: {
    color: "#FF5100",
  },
  orangeBackground: {
    backgroundColor: "#FF5100",
    padding: 8,
    color: "#FFFFFF",
  },
  person: {
    width: 277,
    height: 380,
  },
});
