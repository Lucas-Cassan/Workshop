import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@react-native-material/core";

const Toppage = (props) => {
  return (
    <View>
      <Text style={stylesToppage.title}>{props.children}</Text>
      <Text style={stylesToppage.subtitle}>{props.subTitle}</Text>
    </View>
  );
};

const stylesToppage = StyleSheet.create({
  title: {
    fontFamily: "Switzer-bold",
    fontSize: 28,
    color: "#003a45",
    marginLeft: 25,
    marginTop: 10,
  },
  subtitle: {
    fontFamily: "Switzer-semibold",
    fontSize: 13,
    color: "#97A3A8",
    marginTop: 5,
    marginLeft: 25,
    letterSpacing: 0.1,
  },
});

export default Toppage;
