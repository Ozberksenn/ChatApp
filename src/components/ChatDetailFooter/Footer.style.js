import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 25,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  input: {
    marginHorizontal: 10,
    width: 300,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#4D426D",
  },
  sendButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#4D426D",
    justifyContent: "center",
    alignItems: "center",
    right: 5,
  },
  locationIcon: {
    justifyContent: "center",
    left: 5,
  },
});
