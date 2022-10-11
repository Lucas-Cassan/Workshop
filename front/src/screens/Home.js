import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { StyleSheet } from "react-native";

const Home = () => {
    return (
      <SafeAreaView width={"100%"} style={styles.view}>
        <Text>Page d'accueil</Text>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    view: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default Home;