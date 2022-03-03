import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: "#282828",
  },
  globalView: {
    padding: 30,
    backgroundColor: "#282828",
    minHeight: "100%",
  },
  topbar: {
    display: "flex",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Epilogue-Bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 8,
    color: "#C6C6C6",
    lineHeight: 24,
    fontFamily: "Epilogue-Regular",
  },
  eventCards: {
    marginTop: 30,
  },
  semMaisEventos: {
    color: "#FFFFFF",
    fontSize: 12,
    opacity: 0.5,
    textAlign: "center",
    marginTop: 30,
    fontFamily: "Epilogue-Regular",
  },
});

export default styles;
