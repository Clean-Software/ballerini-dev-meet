import { Dimensions, StyleSheet } from "react-native";

const styles = (selected?: boolean, disabled?: boolean) =>
  StyleSheet.create({
    container: {
      position: "relative",
      backgroundColor: selected ? "#FF5100" : "#FFFFFF",
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      width: Dimensions.get("window").width / 2.5,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexGrow: 1,
      opacity: disabled ? 0.6 : 1,
    },
    title: {
      color: selected ? "#FFFFFF" : "#282828",
      fontSize: 16,
      fontFamily: "Epilogue-Medium",
      marginTop: 8,
      marginBottom: 24,
    },
    footer: {
      position: "absolute",
      color: selected ? "#FFFFFF" : "#FF5100",
      fontSize: 12,
      fontFamily: "Epilogue-Bold",
      bottom: 16,
      left: 16,
    },
    footerFounded: {
      color: selected ? "#FFFFFF" : "#BFBFBF",
      fontFamily: "Epilogue-Regular",
    },
  });

export default styles;