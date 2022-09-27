import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#4D426D",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  inputText: {
    left: 5,
    width: 300,
    paddingVertical: 15,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: "#4D426D",
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
});
