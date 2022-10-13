import { StatusBar } from "expo-status-bar";
import Appbar from "./src/components/Appbar";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Switzer-bold": require("./assets/fonts/Switzer-Bold.ttf"),
    "Switzer-semibold": require("./assets/fonts/Switzer-Semibold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StackNavigator />
      <StatusBar style="dark" />
      <Appbar />
    </NavigationContainer>
  );
}
