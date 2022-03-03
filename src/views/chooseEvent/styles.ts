import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    flexDirection: "column",
  },
  topTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontFamily: "Epilogue-Bold",
  },
  topSubtitle: {
    color: "#C6C6C6",
    fontSize: 20,
    fontFamily: "Epilogue-Regular",
    marginTop: 13,
  },
  topicCards: {
    width: "100%",
    marginTop: 30,
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
});
