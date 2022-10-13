import { React, useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { SafeAreaView, Text, Button, FlatList, } from "react-native";
import EventRender from "../components/EventRender";
import EventCreateBtn from "../components/EventCreateBtn";
import Toppage from "../components/Toppage";
import styles from "./style";
import { ScrollView } from "react-native";
import { IP_LOCAL } from "../../Constant";
import dateFormat from "dateformat";

function Events() {

  const [data, setdata] = useState([]);

  const getEvent = async () => {
  console.log(`${IP_LOCAL}/user/login`);
    await fetch(`${IP_LOCAL}/event/getAllEvent`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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
