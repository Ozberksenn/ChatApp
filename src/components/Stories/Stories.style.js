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
    flex: 1,
    backgroundColor: "#2C3333",
    justifyContent: "space-between",
  },
  modalImage: {
    marginTop: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 1.2,
    resizeMode: "stretch",
    borderRadius: 10,
    opacity: 0.9,
  },
});
