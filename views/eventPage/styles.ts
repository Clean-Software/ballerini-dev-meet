import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282828",
    display: "flex",
    flex: 1,
  },
  globalView: {
    padding: 35,
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  data: {
    color: "#FF5100",
    fontSize: 24,
    fontFamily: "Rajdhani-Bold",
  },
  hora: {
    color: "#FF5100",
    fontSize: 24,
    fontFamily: "Rajdhani-Medium",
  },
  viewCentral: {
    marginTop: 40,
  },
  textoCentral: {
    fontSize: 32,
    textAlign: "auto",
    color: "#fff",
    fontFamily: "Epilogue-Bold",
  },
  infoCentral: {
    marginTop: 20,
    color: "#959595",
    lineHeight: 27,
    fontSize: 14,
    fontFamily: "Epilogue-Regular",
  },
  byView: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  byText: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "Epilogue-Medium",
  },
  name: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "Epilogue-Bold",
  },
  evento: {
    display: "flex",
    alignItems: "center",
    marginTop: 45,
  },
  eventText: {
    fontSize: 28,
    color: "#fff",
    fontFamily: "Epilogue-Bold",
  },
  linkView: {
    backgroundColor: "#323232",
    borderRadius: 4,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "stretch",
    marginTop: 20,
    height: 50,
  },
  
  linkText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    marginLeft: 14,
    alignSelf: "center",
    fontFamily: "Rajdhani-Bold",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    margin: 20,
    alignItems: "center",
  },
  btnNotificacao: {
    borderRadius: 6,
    width: 28,
    height: 28,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    alignSelf: "center",
  },
  linkSvg: {
    width: 25,
    height: 25,
    margin: 0,
  },
  goToLink: {
    margin: 0,
  },
  btnGo: {
    borderRadius: 6,
    width: 28,
    height: 28,
    backgroundColor: "rgba(4, 211, 97, 0.2)",
    alignSelf: "center",
  },
  progressContainerView: {
    marginTop: 50,
    marginBottom: 70,
  },
  parentBarView: {
    height: 12,
    backgroundColor: "#3C3C3C",
    borderRadius: 5,
    marginTop: 14,
    position: "relative",
    overflow: "hidden",
  },
  sonBarView: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    borderRadius: 5,
  },
  time: {
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    justifyContent: "space-between",
    marginTop: 16,
  },
  number: {
    color: "#fff",
    fontSize: 40,
    fontFamily: "Rajdhani-Bold",
  },
  label: {
    color: "#fff",
    fontSize: 12,
    opacity: 0.5,
    marginLeft: 4,
    fontFamily: "Epilogue-Medium",
  },
});

export default styles;
