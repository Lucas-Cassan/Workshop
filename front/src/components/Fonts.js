// Rest of the import statements
import { useFonts } from "expo-font";

export default function Fonts() {
  const [fontsLoaded] = useFonts({
    "Switzer-bold": require("../../assets/fonts/Switzer-Bold.ttf"),
    "Switzer-semibold": require("../../assets/fonts/Switzer-Semibold.ttf"),
  });

  // ...
}
