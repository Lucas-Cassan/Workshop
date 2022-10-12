import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const EventCreateBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={stylesEventCreateBtn.container}>
      <View style={stylesEventCreateBtn.EventContainer}>
        <View>
          <Text style={stylesEventCreateBtn.title}>{props.title}</Text>
        </View>
        <View>
          <TouchableOpacity style={stylesEventCreateBtn.btnTitleStyle}>
            <Text style={stylesEventCreateBtn.btnTextStyle}>
              {props.btnTitle}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const stylesEventCreateBtn = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "start",
  },
  EventContainer: {
    width: "90%",
    backgroundColor: "#00A4E0",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 30,
    paddingTop: 15,
    padding: 13,
  },
  title: {
    marginLeft: 5,
    fontFamily: "Switzer-bold",
    fontSize: 26,
    color: "#ffffff",
    fontWeight: "bold",
  },
  btnTitleStyle: {
    backgroundColor: "#0088c0",
    paddingTop: 10,
    paddingBottom: 10,
    height: "auto",
    fontSize: 12,
    width: "auto",

    borderRadius: "50px",
    marginTop: 20,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    fontFamily: "Switzer-bold",
    color: "white",
  },
});

export default EventCreateBtn;
