import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
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
      <EventRender
        eventTitle={"Jet Ski"}
        eventParticipants={"12 Participants"}
        eventLocation={"La Grande Motte"}
        eventDate={"12/10/2022"}
      />
    </SafeAreaView>
  );
};
export default Home;
