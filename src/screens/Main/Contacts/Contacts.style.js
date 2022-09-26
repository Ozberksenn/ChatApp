import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#4d426d",
    justifyContent: "space-between",
  },
  headerText: {
    top: 5,
    left: 30,
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  content: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#6D5F9A",
  },
});
