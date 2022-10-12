import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@react-native-material/core";

const EventRender = (props) => {
  return (
    <View style={stylesFeedbackBlock.container}>
      <Text style={stylesFeedbackBlock.title}>
        Feedback du {props.item.date}
      </Text>
      <Text style={stylesFeedbackBlock.text}>{props.item.text}</Text>
    </View>
  );
};

const stylesFeedbackBlock = StyleSheet.create({
  textDate: {
    marginLeft: 5,
    fontSize: 16,
    color: "#003A45",
    fontWeight: "bold",
  },
  container: {
    display: "flex",
    alignItems: "start",
    backgroundColor: "#ffffff",
    width: "100%",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    padding: 17,
  },
  title: {
    fontFamily: "Switzer-bold",
    fontSize: 17,
    color: "#003A45",
    fontWeight: "bold",
  },
  text: {
    color: "#97A3A8",
    fontFamily: "Switzer-semibold",
    fontSize: 12,
    letterSpacing: 0.1,
  },
});

export default EventRender;
