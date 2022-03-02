import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282828",
    display: "flex",
    flex: 1
  },
  globalView: { 
    margin: 35, 
    },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datahora: {},
  data: { 
    color: "#FF5100", 
    fontSize: 24 
  },
  hora: { 
    color: "#FF5100", 
    fontSize: 24 
  },
  textoBotao: {
    fontSize: 18,
    color: "#fff"
  },
  viewCentral: {
    marginTop: 40
  },
  textoCentral: {
    fontSize: 32, 
    textAlign: "auto", 
    fontWeight: "bold",
    color: "#fff"
  },
  infoCentral: {
    marginTop: 20, 
    color: "#959595", 
    lineHeight: 27, 
    fontSize: 14
  },
  byView: {
    display: "flex", 
    flexDirection: "row", 
    marginTop: 20
  },
  byText: {
    fontSize: 13,
    color: "#fff"
  },
  name: {
    fontSize: 13, 
    fontWeight: "bold",
    color: "#fff"
  },
  evento: {
    display: "flex", 
    alignItems: "center", 
    marginTop: 45,
  },
  eventText: {
    fontSize: 28, 
    fontWeight: "bold",
    color: "#fff"
  },
  linkView: {
    backgroundColor: "#323232", 
    borderRadius: 4, 
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-between",
    alignSelf: "stretch", 
    marginTop: 20, 
    height: 50
  },
  
  linkText: {
    color: 'rgba(255, 255, 255, 0.7)', 
    fontSize: 16, 
    marginLeft: 14, 
    alignSelf: "center"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 70,
    margin: 20,
    alignItems: "center"
  },
  notificacoes: {
    
  },
  btnNotificacao: {
    borderRadius: 6,
    width: 28, 
    height: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignSelf: "center"
  },
  linkSvg: {
    width: 25,
    height: 25,
    margin: 0
  },
  goToLink: {
    margin: 0
  },
  btnGo: {
    borderRadius: 6,
    width: 28, 
    height: 28,
    backgroundColor: 'rgba(4, 211, 97, 0.2)',
    alignSelf: "center"
  },
  progressContainerView: {
    marginTop: 100
  },
  progressText: {

  },
  parentBarView: {
    height: 12,
    backgroundColor: "#3C3C3C",
    borderRadius: 5,
    marginTop: 14,
    position: "relative"
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
  sonBarView: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "50%",
    backgroundColor: "#FF5100",
    borderRadius: 5 
  },
  time: {
    display: "flex",
    flexDirection: "row",
    color: "#fff",
    justifyContent: "space-between",
    marginTop: 17
  },
  number: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 59,

  },
  label: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.5,
    marginLeft: 4
  }
});

export default styles;
