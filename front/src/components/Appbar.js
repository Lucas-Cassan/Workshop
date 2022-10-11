import React from "react";
import { StyleSheet } from 'react-native';
import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Appbar = () => (
<AppBar style={styles.appbar} title="Screen title" variant="bottom"/>
);

const styles = StyleSheet.create({
    appbar: {
      width: '100%',
      backgroundColor: '#39A2DB',
      position: "absolute", 
      start: 0, 
      end: 0, 
      bottom: 0,
    },
  });

export default Appbar;