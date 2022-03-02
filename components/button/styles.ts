import { StyleSheet } from "react-native";

const styles = (size: number, backgroundColor?: string) =>
  StyleSheet.create({
    button: {
      backgroundColor,
      borderRadius: 16,
      padding: 6
    }
  });

export default styles;
