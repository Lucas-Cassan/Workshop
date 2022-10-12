import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView, Text, Button } from "react-native";
import EventRender from "../components/EventRender";
import EventCreateBtn from "../components/EventCreateBtn";
import Toppage from "../components/Toppage";
import styles from "./style";
import { ScrollView } from "react-native";

const Events = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Retrouve ici tous les évènements de ton entreprise"}>
        Évènements
      </Toppage>
      <EventCreateBtn
        title={"Propose ton évènement"}
        btnTitle={"Ajouter maintenant !"}
      />
      <View style={stylesEventScreen.Container}>
        <Text style={stylesEventScreen.title}>Prochains évènements</Text>
        <View style={styles.ContainerScroll}>
          <ScrollView style={styles.Scroll}>
            <EventRender
              eventTitle={"Jet Ski"}
              eventParticipants={"12 Participants"}
              eventLocation={"La Grande Motte"}
              eventDate={"12/10/2022"}
            />
            <EventRender
              eventTitle={"Jet Ski"}
              eventParticipants={"12 Participants"}
              eventLocation={"La Grande Motte"}
              eventDate={"12/10/2022"}
            />
            <EventRender
              eventTitle={"Jet Ski"}
              eventParticipants={"12 Participants"}
              eventLocation={"La Grande Motte"}
              eventDate={"12/10/2022"}
            />
            <EventRender
              eventTitle={"Jet Ski"}
              eventParticipants={"12 Participants"}
              eventLocation={"La Grande Motte"}
              eventDate={"12/10/2022"}
            />
            <EventRender
              eventTitle={"Jet Ski"}
              eventParticipants={"12 Participants"}
              eventLocation={"La Grande Motte"}
              eventDate={"12/10/2022"}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesEventScreen = StyleSheet.create({
  Container: {
    width: "90%",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    marginLeft: 5,
    fontSize: 25,
    color: "#003A45",
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Events;
