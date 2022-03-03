import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  }
});

export default styles;
