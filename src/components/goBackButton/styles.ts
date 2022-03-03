import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  text: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Epilogue-Medium",
  }
});

export default styles;
