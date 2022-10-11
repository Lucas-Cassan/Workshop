import React from "react";
import { StyleSheet } from 'react-native';
import { AppBar, Button, Flex, IconButton } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


const Appbar = () => {
  const navigation = useNavigation();
  return (
    <AppBar
      style={styles.appbar}
      variant="bottom"
      color="#ffffff"
      tintColor="#98D7F6"
      leading={props => (
        <IconButton icon={props => <Ionicons name="home" {...props} />} {...props} color={"#98D7F6"} onPress={() => navigation.navigate("Home")} />
      )}
      leadingContainerStyle={{ margin: 0, padding: 0 }}>
      <IconButton style={styles.button} color="#98D7F6" onPress={() => navigation.navigate("Feedback")} icon={props => <Ionicons name="chatbubble-ellipses" {...props} />} variant={"text"} />
      <IconButton style={styles.button} color="#98D7F6" onPress={() => navigation.navigate("Events")} icon={props => <Ionicons name="ios-calendar" {...props} />} variant={"text"} />
      <IconButton style={styles.button} color="#98D7F6" onPress={() => navigation.navigate("Profil")} icon={props => <Ionicons name="ios-person" {...props} />} variant={"text"} />

    </AppBar>
  );
};

const styles = StyleSheet.create({
  appbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: '100%',
    position: "absolute",
    start: 0,
    end: 0,
    bottom: 10,
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 25,
    width: "95%",
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    marginRight: 20,
  },
});

export default Appbar;