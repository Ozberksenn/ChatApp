import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  signUpContainer: {
    flex: 1,
    backgroundColor: "#4d426d",
    justifyContent: "flex-end",
  },
  content: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#6D5F9A",
  },
  titleContainer: {
    marginVertical: 20,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backIcon: {
    marginLeft: 10,
    fontSize: 30,
    color: "white",
  },
  AccountText: {
    marginLeft: 15,
    fontSize: 24,
    color: "#fff",
  },
  line: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#efa985",
  },
});
