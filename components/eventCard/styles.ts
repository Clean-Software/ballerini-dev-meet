import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
  },

  top: {
    display: "flex",
    flexDirection: "row",
  },
  data: {
    color: "#FF5100",
    fontSize: 16,
    fontWeight: "bold"
  },
  line: {
    color: "#282828",
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: "bold"
  },
  hora: {
    color: "#FF5100",
    fontSize: 16,
    fontWeight: "600"
  },
  title: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: "700",
  },
  description: {
    fontSize: 10,
    color: "#959595",
    marginTop: 8,
  },
  organizadoPor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  organizadoPorLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  organizadoPorText: {
    fontSize: 8,
    color: "#282828",
    fontWeight: "600",
  },
  organizadoPorNome: {
    marginLeft: 4,
    fontSize: 8,
    color: "#282828",
    fontWeight: "bold",
  },
  arrow: {
    width: 30,
    height: 30,
  }
});

export default styles;
