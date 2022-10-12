import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  ScrollView,
} from "react-native";
import Toppage from "../components/Toppage";
import FeedbackTodo from "../components/FeedbackTodo";
import styles from "./style";
import dateFormat from "dateformat";
import feedbackBlock from "../components/Feedback";
import { IP_LOCAL } from "../../Constant";

function Feedback() {
  const [data, setdata] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getFeedback = async () => {
    console.log(`${IP_LOCAL}/user/login`);
    await fetch(`${IP_LOCAL}/feedback/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxlZEBnbWFpbC5jb20iLCJpYXQiOjE2NjU1NjcwMTAsImV4cCI6MTY2NTY1MzQxMH0.7ZzdCn4uHb8TFIPuV_Gi7iQZsSVmgLp6akvttciVf2g",
      },
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            console.log(jsonRes);
          } else {
            console.log(jsonRes);
            for (let i = 0; i < jsonRes.feedbacks.length; i++) {
              const maDate = new Date(jsonRes.feedbacks[i].date);
              jsonRes.feedbacks[i].date = dateFormat(maDate, "dd/mm");
            }
            console.log(jsonRes.feedbacks);
            setdata(jsonRes.feedbacks);
          }
        } catch (err) {
          console.log(err);
        } finally {
          setIsloading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFeedback();
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Retrouve ici ton historique de feedbacks."}>
        Tes feedbacks
      </Toppage>
      <FeedbackTodo
        title={"Ton feedback"}
        subTitle={"de la semaine du 10/10"}
        btnTitle={"Remplir dès maintenant"}
      />
      <View style={stylesFeedBackBlock.Container}>
        <Text style={stylesFeedBackBlock.title}>Historique</Text>
        <View style={styles.ContainerScroll}>
          <ScrollView style={styles.Scroll}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={feedbackBlock}
              />
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesFeedBackBlock = StyleSheet.create({
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

export default Feedback;
