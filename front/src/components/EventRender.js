import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const EventRender = (props) => {
  const navigation = useNavigation();
  return (
    <View style={stylesEvent.container}>
      <Text style={stylesEvent.title}>{props.eventTitle}</Text>
      <View style={stylesEvent.eventInfos}>
        <View style={stylesEvent.eventInfosObject}>
          <Ionicons name="ios-compass" size={24} color="#00a5e0" />
          <Text style={stylesEvent.eventInfosObjectText}>
            {props.eventLocation}
          </Text>
        </View>
        <View style={stylesEvent.eventInfosObject}>
          <Ionicons name="ios-calendar" size={24} color="#00a5e0" />
          <Text style={stylesEvent.eventInfosObjectText}>
            {props.eventDate}
          </Text>
        </View>
      </View>
      <Pressable
        style={stylesEvent.eventParticipantsBtn}
        onPress={() => navigation.navigate("Events")}
      >
        <Text style={stylesEvent.eventParticipantsBtnText}>
          {props.eventParticipants}
        </Text>
      </Pressable>
    </View>
  );
};

const stylesEvent = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "start",
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#003A45",
    fontWeight: "bold",
  },
  eventInfos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 15,
    marginBottom: 15,
  },
  eventInfosObject: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  eventInfosObjectText: {
    fontSize: 12,
    marginLeft: 5,
  },
  eventParticipantsBtn: {
    width: "100%",
    backgroundColor: "#00a5e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingTop: 8,
    paddingBottom: 8,
  },
  eventParticipantsBtnText: {
    color: "#ffffff",
    fontFamily: "Switzer-bold",
  },
});

export default EventRender;
