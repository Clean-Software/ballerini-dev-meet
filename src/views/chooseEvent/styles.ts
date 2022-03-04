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
  topicCardsScroll: {
    width: "100%",
    height: "70%",
  },
  topicCards: {
    width: "100%",
    marginTop: 30,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flex: 1,
  },
  nextButtonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontFamily: "Epilogue-Bold",
    fontSize: 16,
    marginRight: 12,
  }
});
