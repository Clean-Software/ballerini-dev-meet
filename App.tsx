import { useState } from "react";
import Routes from "./navigation";
import { LoadingPage } from "./views";
import { useEffect } from "react";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";

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

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  const prepare = async () => {
    await fetchLoading();
    setAppLoaded(true);
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!appLoaded) {
    return <LoadingPage />;
  }

  return (
    <>
      <StatusBar style="light" translucent />
      <Routes />
    </>
  );
}
