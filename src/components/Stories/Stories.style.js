import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "#red",
  },
  name: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
  },
  modal: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.1,
    backgroundColor: "#00000070",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalImage: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 1.8,
    borderRadius: 10,
    resizeMode: "stretch",
  },
});
