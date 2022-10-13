import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const EventCreateBtn = (props) => {
  const navigation = useNavigation();
  return (
    <View style={stylesEventCreateBtn.container}>
      <View style={stylesEventCreateBtn.feedbackContainer}>
        <View>
          <Text style={stylesEventCreateBtn.title}>{props.title}</Text>
          <Text style={stylesEventCreateBtn.subtitle}>{props.subTitle}</Text>
        </View>
        <View>
          <TouchableOpacity style={stylesEventCreateBtn.btnTitleStyle}>
            <Text style={stylesEventCreateBtn.btnTextStyle}>
              {props.btnTitle}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={stylesEventCreateBtn.feedbackHistoryBtn}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Text style={stylesEventCreateBtn.feedbackHistoryTextBtn}>
          {props.feedBackHistory}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesEventCreateBtn = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "start",
  },
  feedbackContainer: {
    width: "90%",
    backgroundColor: "#00A4E0",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
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
  subtitle: {
    marginLeft: 5,
    fontFamily: "Switzer-bold",
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
    marginTop: 2,
  },
  btnTitleStyle: {
    backgroundColor: "#0088c0",
    paddingTop: 10,
    paddingBottom: 10,
    height: "auto",
    fontSize: 12,
    width: "auto",

    borderRadius: "50px",
    marginTop: 60,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    fontFamily: "Switzer-bold",
    color: "white",
  },
  feedbackHistoryBtn: {
    width: "90%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
    color: "B8C3C7",
    letterSpacing: 0.1,
  },
  feedbackHistoryTextBtn: {
    fontFamily: "Switzer-semibold",
    fontSize: 13,
    color: "#97A3A8",
    letterSpacing: 0.1,
  },
});

export default EventCreateBtn;
