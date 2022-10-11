import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from "@react-native-material/core";


const Toppage = (props) => {
  return (
    <View>
        <Text style={styles.title}>{props.children}</Text>
        <Text style={styles.subtitle}>{props.subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: "#003a45",
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 25,
  },
  subtitle: {
    fontSize: 12,
    color: "#B2BDC2",
    fontWeight: "bold",
    marginLeft: 25,
  },
});

export default Toppage;