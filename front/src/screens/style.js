import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    display: "flex",
    backgroundColor: "#eef4f7",
  },
  ContainerScroll: {
    width: "100%",
    height: 450,
    overflow: "scroll",
  },
  Scroll: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
  },
  shadowTop: {
    width: "100%",
    position: "fixed",
    height: "5%",
    top: 0,
    backgroundColor: "black",
    zIndex: 5,
  },
  shadowBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    height: "5%",
    backgroundColor: "black",
    zIndex: 5,
  },
});

export default styles;
