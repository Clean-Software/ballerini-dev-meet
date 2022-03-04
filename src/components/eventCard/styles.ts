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
    fontFamily: "Rajdhani-Bold",
    textTransform: "uppercase",
  },
  line: {
    color: "#282828",
    marginHorizontal: 4,
    fontSize: 16,
    fontFamily: "Rajdhani-Bold"
  },
  hora: {
    color: "#FF5100",
    fontSize: 16,
    fontFamily: "Rajdhani-Medium"
  },
  title: {
    fontSize: 20,
    marginTop: 4,
    fontFamily: "Epilogue-Bold"
  },
  description: {
    fontSize: 14,
    lineHeight: 18,
    color: "#959595",
    marginTop: 4,
    fontFamily: "Epilogue-Regular"
  },
  organizadoPor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  organizadoPorLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  organizadoPorText: {
    fontSize: 10,
    color: "#282828",
    fontFamily: "Epilogue-Medium"
  },
  organizadoPorNome: {
    marginLeft: 4,
    fontSize: 10,
    color: "#282828",
    fontFamily: "Epilogue-Bold"
  },
  arrow: {
    width: 30,
    height: 30,
  }
});

export default styles;
