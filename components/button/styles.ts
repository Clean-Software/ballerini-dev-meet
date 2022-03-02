import { StyleSheet } from "react-native";

const styles = (backgroundColor?: string) =>
  StyleSheet.create({
    button: {
      backgroundColor,
      borderRadius: 16,
      padding: 6,
      marginTop: 40,
    },
    buttonLogo: {
      height: 40,
      width: 40,
    },
  });

export default styles;
