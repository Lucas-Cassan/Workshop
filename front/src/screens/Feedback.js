import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import FeedbackTodo from "../components/FeedbackTodo";
import styles from "./style";

const Feedback = () => {
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
    </SafeAreaView>
  );
};

export default Feedback;
