import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    width: "100%",
    // flexBasis: 'auto',
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    color: "#282828",
    fontSize: 16,
    fontFamily: "Epilogue-Medium",
    marginTop: 8,
  },
  footer: {
    color: "#FF5100",
    fontSize: 12,
    fontFamily: "Epilogue-Bold",
    marginTop: 24,
  },
  footerFounded: {
    color: "#BFBFBF",
    fontFamily: "Epilogue-Regular",
  },
});

export default styles;
