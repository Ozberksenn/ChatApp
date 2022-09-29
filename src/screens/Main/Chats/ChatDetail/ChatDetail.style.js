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
  receiver: {
    marginTop: 10,
    marginVertical: 5,
    marginLeft: 20,
    padding: 15,
    backgroundColor: "#4d426d",
    borderRadius: 20,
    marginRight: "auto",
  },
  sender: {
    marginTop: 10,
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: 20,
    padding: 15,
    backgroundColor: "#EFA985",
    borderRadius: 20,
  },
});
