import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  globalView: { margin: 35 },
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
  botaoVoltar: {
    alignItems: "center", 
    justifyContent: "center"
  },
  textoBotao: {
    fontSize: 18
  },
  viewCentral: {
    marginTop: 40
  },
  textoCentral: {
    fontSize: 32, 
    textAlign: "auto", 
    fontWeight: "bold"
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
    fontSize: 13
  },
  name: {
    fontSize: 13, 
    fontWeight: "bold"
  },
  evento: {
    display: "flex", 
    alignItems: "center", 
    marginTop: 45
  },
  eventText: {
    fontSize: 28, 
    fontWeight: "bold"
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
  goToLink: {

  },
  btnGo: {
    borderRadius: 6,
    width: 28, 
    height: 28,
    backgroundColor: 'rgba(4, 211, 97, 0.2)',
    alignSelf: "center"
  },
});

export default styles;
