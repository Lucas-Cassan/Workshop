import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";

const Profil = () => {
    return (
      <SafeAreaView style={styles.view}>
        <Toppage subTitle={"Bienvenue sur ton profil"}>Profil</Toppage>
      </SafeAreaView>
    );
  };

export default Profil;