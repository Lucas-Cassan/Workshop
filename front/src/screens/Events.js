import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";

const Events = () => {
    return (
      <SafeAreaView style={styles.view}>
        <Toppage subTitle={"Retrouve ici tous les évènements de ton entreprise"}>Évènements</Toppage>
      </SafeAreaView>
    );
  };

export default Events;