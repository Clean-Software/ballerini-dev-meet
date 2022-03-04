import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: 300,
  },
  skeletonContent: {
    flex: 1,
    height: 70,
    backgroundColor: "#C6C6C6",
    marginTop: 20,
    borderRadius: 8,
  },
});

export default styles;
