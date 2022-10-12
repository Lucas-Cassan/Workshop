import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./src/screens/Home";
import Feedback from "./src/screens/Feedback";
import Profil from "./src/screens/Profil";
import Events from "./src/screens/Events";
import Auth from "./src/screens/Auth";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Profil" component={Profil} />
        <Stack.Screen name="Auth" component={Auth} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
