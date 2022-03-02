import { useState } from "react";
import * as Font from "expo-font";
import Routes from "./navigation";
import { LoadingPage } from "./views";
import { useEffect } from "react";

const fecthFonts = async  () => {
  const fonts = Font.loadAsync({
    "Ubuntu-Regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("./assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-Light": require("./assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-Italic": require("./assets/fonts/Ubuntu-Italic.ttf"),
  });

  await Promise.all([fonts]);

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return;
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  const prepare = async () => {
    await fecthFonts();
    setFontLoaded(true);
  };

  useEffect(() => {
    prepare();
  }, []);

  if (!fontLoaded) {
    return (
      <LoadingPage />
    );
  }

  return <Routes />;
}
