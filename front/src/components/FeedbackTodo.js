import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, FAB } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";

const FeedbackTodo = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.feedbackContainer}>
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subTitle}</Text>
        </View>
        <View>
          <FAB
            style={styles.btnTitleStyle}
            variant="extended"
            label={props.btnTitle}
            color={"#0088C0"}
            tintColor={"#ffffff"}
          />
        </View>
      </View>
      <Button
        variant="text"
        title={props.feedBackHistory}
        color={"#B8C3C7"}
        style={styles.feedbackHistoryBtn}
        uppercase={false}
        onPress={() => navigation.navigate("Feedback")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "start",
  },
  feedbackContainer: {
    width: "90%",
    backgroundColor: "#00A4E0",
    borderRadius: "25",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
    marginLeft: 20,
  },
  btnTitleStyle: {
    width: "80%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50px",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  feedbackHistoryBtn: {
    marginLeft: 10,
  },
});

export default FeedbackTodo;
