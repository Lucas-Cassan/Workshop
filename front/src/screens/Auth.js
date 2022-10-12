import React, { useState } from "react";
import { SafeAreaView, TextInput, View, Text, Pressable } from "react-native";
import Toppage from "../components/Toppage";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

const API_URL = "http://localhost:4000";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigation = useNavigation();

  const onSubmitConnexion = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.error);
            console.log(jsonRes.error);
          } else {
            setIsError(false);
            setIsLogin(true);
            setUserId(jsonRes.userId);
            setConnexionToken(email, jsonRes.token);
            goHome();
          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  };

  async function setConnexionToken(value) {
    await SecureStore.setItemAsync("connexion-token", value);
  }

  const goHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView width={"100%"} style={styles.view}>
      <Toppage subTitle={"Nous sommes contents de vous revoir"}>
        Connexion
      </Toppage>
      <View style={styles.connexionView}>
        <Text style={[styles.message, { color: isError ? "red" : "green" }]}>
          {message ? getMessage() : null}
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Mot de passe"
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Pressable style={styles.connexionBtn} onPress={onSubmitConnexion}>
          <Text style={styles.connexionBtnText}>Se connecter</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  connexionView: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  input: {
    width: "85%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
    borderColor: "#0088c0",
    backgroundColor: "#fff",
  },
  connexionBtn: {
    width: "50%",
    backgroundColor: "#00a5e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 12,
  },
  connexionBtnText: {
    color: "#ffffff",
    fontFamily: "Switzer-bold",
  },
  message: {
    fontSize: 16,
    marginVertical: "5%",
  },
});

export default Auth;
