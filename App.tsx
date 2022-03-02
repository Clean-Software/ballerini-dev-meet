import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Routes from "./navigation";

const fecthFonts = () => {
  return Font.loadAsync({
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fecthFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return <Routes />;
}
