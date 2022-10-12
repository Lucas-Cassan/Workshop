import React from "react";
import { StyleSheet } from "react-native";
import {
  AppBar,
  Button,
  Flex,
  IconButton,
  TouchableOpacity,
  Image,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

const Appbar = () => {
  const navigation = useNavigation();
  return (
    <AppBar
      elevation={0}
      style={styles.appbar}
      variant="bottom"
      color="#ffffff"
      tintColor="#98D7F6"
    >
      <IconButton
        style={styles.button}
        color="#98D7F6"
        onPress={() => navigation.navigate("Home")}
        icon={(props) => <FontAwesome5 name="home" {...props} />}
        variant={"text"}
      />
      <IconButton
        style={styles.button}
        color="#98D7F6"
        onPress={() => navigation.navigate("Feedback")}
        icon={(props) => <FontAwesome5 name="clipboard-check" {...props} />}
        variant={"text"}
      />
      <IconButton
        style={styles.button}
        color="#98D7F6"
        onPress={() => navigation.navigate("Events")}
        icon={(props) => <FontAwesome5 name="calendar-week" {...props} />}
        variant={"text"}
      />
      <IconButton
        style={styles.button}
        color="#98D7F6"
        onPress={() => navigation.navigate("Profil")}
        icon={(props) => <FontAwesome5 name="trophy" {...props} />}
        variant={"text"}
      />
    </AppBar>
  );
};

const styles = StyleSheet.create({
  appbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 10,
    borderRadius: "30%",
    height: 69,
    width: "85%",
    marginLeft: "7.5%",
    marginRight: "7.5%",
    marginBottom: "4%",
  },
  button: {},
});

export default Appbar;
