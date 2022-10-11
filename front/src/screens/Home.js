import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import FeedbackTodo from "../components/FeedbackTodo";
import Toppage from "../components/Toppage";
import styles from "./style";

const Home = () => {
    return (
      <SafeAreaView width={"100%"} style={styles.view}>
        <Toppage subTitle={"Nous sommes contents de te revoir"}>Accueil</Toppage>
        <FeedbackTodo 
          title={"Ton feedback"} 
          subTitle={"de la semaine du 10/10"} 
          btnTitle={"Remplir dès maintenant"} 
          feedBackHistory={"Voir l'historique de mes feedbacks"} />
      </SafeAreaView>
    );
  };
export default Home;