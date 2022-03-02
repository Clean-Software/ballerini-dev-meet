import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  globalView: {
    padding: 30,
    backgroundColor: '#282828',
    minHeight: '100%',
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 18,	
    marginTop: 8,
    color: "#C6C6C6",
    lineHeight: 24
  },
  iconBotao: {
    width: 25,
    height: 25,
    transform: [
      {
        rotate: "180deg"
      }
    ],
  },
  botaoVoltar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  textoBotao: {
    fontWeight: "600",
    fontSize: 16,
    color: "#C6C6C6",
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
  }
});

export default styles;
