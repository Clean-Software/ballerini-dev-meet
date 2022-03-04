import { registerRootComponent } from "expo";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./navigation";
import { LoadingPage } from "./views";

const fetchLoading = async () => {
  
  const fetchFonts = () => { 
    return Font.loadAsync({
      "Epilogue-Regular": require("./assets/fonts/Epilogue-Regular.ttf"),
      "Epilogue-Bold": require("./assets/fonts/Epilogue-Bold.ttf"),
      "Epilogue-Medium": require("./assets/fonts/Epilogue-Medium.ttf"),
      "Epilogue-SemiBold": require("./assets/fonts/Epilogue-SemiBold.ttf"),
      "Rajdhani-Regular": require("./assets/fonts/Rajdhani-Regular.ttf"),
      "Rajdhani-Medium": require("./assets/fonts/Rajdhani-Medium.ttf"),
      "Rajdhani-Bold": require("./assets/fonts/Rajdhani-Bold.ttf"),
    });
  }

  await fetchFonts();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return;
};

function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const prepare = async () => {
    await fetchLoading();
    setAppLoaded(true);
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!appLoaded) {
    return (
      <SafeAreaProvider>
        <LoadingPage />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" translucent />
      <Routes />
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);