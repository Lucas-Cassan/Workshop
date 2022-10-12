import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import EventRender from "../components/EventRender";
import FeedbackTodo from "../components/FeedbackTodo";
import Toppage from "../components/Toppage";
import styles from "./style";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState("");

  useEffect(() => {
    getUserToken();
    async function getUserToken() {
      const token = await SecureStore.getItemAsync("connexion-token");
      if (token) {
        setToken(token);
      } else {
        navigation.navigate("Auth");
      }
    }
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Nous sommes contents de te revoir."}>Accueil</Toppage>
      <FeedbackTodo
        title={"Ton feedback"}
        subTitle={"de la semaine du 10/10"}
        btnTitle={"Remplir dès maintenant"}
        feedBackHistory={"Voir l'historique de mes feedbacks"}
      />
      <View style={stylesEventScreenHome.Container}>
        <Text style={stylesEventScreenHome.title}>Prochains évènements</Text>
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

const stylesEventScreenHome = StyleSheet.create({
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

export default Home;
