import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Text } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../screens/style";

const EventRender = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable
        onPress={() => navigation.navigate("Events")}
        >
            <View style={stylesFeedbackBlock.container}>
                <Text style={stylesFeedbackBlock.textDate}>Feedback du {props.date}</Text>
                <Text style={stylesFeedbackBlock.text}>{props.text}</Text>
            </View>
        </Pressable>
    );
  };
  
  const stylesFeedbackBlock = StyleSheet.create({
    container: {

    },
    textDate: {

    },
    text: {

    }
  });
  
  export default EventRender;
  