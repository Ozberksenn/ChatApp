import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d426d",
    justifyContent: "space-between",
  },
  headerContainer: {
    top: 10,
    flexDirection: "row",
    marginBottom: 60,
  },
  backIcon: {
    left: 10,
    color: "white",
    fontSize: 30,
  },
  headerText: {
    left: 30,
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  content: {
    justifyContent: "space-evenly",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height / 1.15,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#6D5F9A",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profilImage: {
    width: 125,
    height: 125,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#4D426D",
    opacity: 0.6,
  },
  icon: {
    position: "absolute",
    fontSize: 30,
    color: "#4d426D",
  },
  line: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#efa985",
  },
});
