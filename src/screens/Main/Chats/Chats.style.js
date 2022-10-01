import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
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
  cardContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  line: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#efa985",
  },
  storiesIcon: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
  },
});
