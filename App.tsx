import AppLoading from "expo-app-loading";
import { useCustomFonts } from "./helpers";
import Routes from "./navigation";

export default function App() {
  const fontLoaded = useCustomFonts();

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
