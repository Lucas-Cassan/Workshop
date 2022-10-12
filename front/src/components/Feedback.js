import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../screens/style";

const EventRender = (props) => {
    return (
        <View style={stylesFeedbackBlock.container}>
            <Text style={stylesFeedbackBlock.textDate}>Feedback du {props.item.date}</Text>
            <Text style={stylesFeedbackBlock.text}>{props.item.text}</Text>
        </View>
    );
  };
  
  const stylesFeedbackBlock = StyleSheet.create({
    container: {
        width: "90%",
        borderRadius: "25",
        display: "flex",
        marginLeft: "auto",
        marginRight: "auto",
    },
    textDate: {
        marginLeft: 5,
        fontSize: 16,
        color: "#003A45",
        fontWeight: "bold",
    },
    text: {

    }
  });
  
  export default EventRender;
  