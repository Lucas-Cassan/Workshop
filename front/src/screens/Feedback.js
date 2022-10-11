import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";

const Feedback = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Retrouve ici ton historique de feedbacks."}>
        Tes feedbacks
      </Toppage>
    </SafeAreaView>
  );
};

export default Feedback;
