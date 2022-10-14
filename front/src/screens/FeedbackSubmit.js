import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TextBase,
} from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";
import { IP_LOCAL } from "../../Constant";
import FeedbackQuestion from "../components/FeedbackQuestion";

function FeedbackSubmit() {
  const [checked, setChecked] = React.useState("");
  const [text, setText] = React.useState("");

  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Complète ton feedback."}>
        Feedback du {new Date().getDate()}/{new Date().getMonth()}
      </Toppage>
      <View style={stylesFeedBackSubmit.Container}>
        <FeedbackQuestion title={"Avez-vous passé une bonne semaine ?"} />
        <FeedbackQuestion
          title={"Votre travail était-l en adéquation avec votre fonction ?"}
        />
        <FeedbackQuestion
          title={
            "Comment était l'ambiance au sein de l'entreprise cette semaine ?"
          }
        />
        <View style={stylesFeedBackSubmit.container}>
          <Text style={stylesFeedBackSubmit.title}>
            Avez-vous quelque chose à dire ?
          </Text>
          <TextInput
            style={stylesFeedBackSubmit.Input}
            placeholder="Ecrivez ici..."
          ></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
}

const stylesFeedBackSubmit = StyleSheet.create({
  Container: {
    width: "90%",
    borderRadius: 25,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  container: {
    width: "100%",
    display: "flex",
    alignItems: "start",
  },
  title: {
    marginLeft: 5,
    fontSize: 17,
    color: "#003A45",
    fontWeight: "bold",
    marginBottom: 10,
  },
  Input: {
    fontSize: 12,
    width: "100%",
    height: 85,
    paddingLeft: "5%",
    paddingRight: "5%",
    borderRadius: 25,
    marginBottom: 25,
    display: "flex",
    alignItems: "",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
  },
});

export default FeedbackSubmit;
