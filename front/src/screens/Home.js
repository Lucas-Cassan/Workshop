import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import EventRender from "../components/EventRender";
import FeedbackTodo from "../components/FeedbackTodo";
import Toppage from "../components/Toppage";
import styles from "./style";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
import { IP_LOCAL } from "../../Constant";
import dateFormat from "dateformat";

function Home() {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const [data, setdata] = useState([]);

  const getEvent = async () => {
      await fetch(`${IP_LOCAL}/event/getAllEvent`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          limit: true
        }
      })
        .then(async (res) => {
          try {
            const jsonRes = await res.json();
            if (res.status !== 200) {
              console.log(jsonRes);
            } else {
              console.log(jsonRes);
              for (let i = 0; i < jsonRes.event.length; i++) {
                const maDate = new Date(jsonRes.event[i].date);
                jsonRes.event[i].date = dateFormat(maDate, "dd/mm/yyyy");
              }
              console.log(jsonRes.event);
              setdata(jsonRes.event);
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getEvent();
    }, []);

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
          <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={EventRender}
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
