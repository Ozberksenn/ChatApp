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
    justifyContent: "space-evenly",
  },
  profilInfo: {
    alignItems: "center",
  },
  profilPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4D426D",
  },
  userName: {
    fontSize: 24,
    color: "#fff",
  },
  state: {
    color: "#fff",
  },
  icon: {
    fontSize: 30,
    color: "#EFA985",
  },
  textContainer: {
    marginLeft: 30,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    marginLeft: 10,
  },
  line: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#efa985",
  },
});
