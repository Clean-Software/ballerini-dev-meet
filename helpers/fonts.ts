import {
  useFonts,
  Epilogue_400Regular,
  Epilogue_500Medium,
  Epilogue_600SemiBold,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
} from "@expo-google-fonts/epilogue";
import {
  Rajdhani_400Regular,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
  });

  return fontsLoaded;
}
