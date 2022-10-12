import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";

const Profil = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Bienvenue sur ton profil"}>Profil</Toppage>
      <Text onPress={() => navigation.navigate("Auth")}>Se connecter</Text>
    </SafeAreaView>
  );
};

export default Profil;
