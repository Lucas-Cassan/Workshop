import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Button } from "react-native";
import Toppage from "../components/Toppage";
import styles from "./style";
import * as SecureStore from "expo-secure-store";

const Profil = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState(false);

  useEffect(() => {
    getUserToken();
    async function getUserToken() {
      const token = await SecureStore.getItemAsync("connexion-token");
      if (token) {
        setToken(true);
      } else {
        setToken(false);
        navigation.navigate("Auth");
      }
    }
  }, []);

  async function deconnect() {
    await SecureStore.deleteItemAsync("connexion-token");
    navigation.navigate("Auth");
  }

  return (
    <SafeAreaView style={styles.view}>
      <Toppage subTitle={"Bienvenue sur ton profil"}>Profil</Toppage>
      {!token ? (
        <Text onPress={() => navigation.navigate("Auth")}>Se connecter</Text>
      ) : (
        <Text onPress={deconnect}>Se déconnecter</Text>
      )}
    </SafeAreaView>
  );
};

export default Profil;
