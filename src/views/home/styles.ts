import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282828",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "80%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 40,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontFamily: "Epilogue-Bold",
  },
  subtitle: {
    marginTop: 24,
    fontSize: 24,
    alignSelf: "flex-start",
    color: "#C6C6C6",
    fontFamily: "Epilogue-Regular",
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
    width: "100%",
  }
});
