import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d426d",
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "#6d5f9a",
    flex: 0.95,
    borderRadius: 50,
  },
  messageContainer: {
    top: 30,
    marginVertical: 5,
    marginLeft: 20,
    padding: 15,
    backgroundColor: "#4d426d",
    borderRadius: 20,
    marginRight: "auto",
  },
  inputText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "400",
  },
});
