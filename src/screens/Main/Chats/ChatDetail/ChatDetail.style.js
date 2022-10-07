import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d426d",
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "#6d5f9a",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  receiver: {
    flexDirection: "row",
    marginTop: 10,
    marginVertical: 5,
    marginLeft: 20,
    padding: 15,
    backgroundColor: "#4d426d",
    borderRadius: 20,
    marginRight: "auto",
  },
  sender: {
    flexDirection: "row",
    marginTop: 10,
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: 20,
    padding: 15,
    backgroundColor: "#EFA985",
    borderRadius: 20,
  },
  date: {
    position: "absolute",
    bottom: 0,
    right: 5,
    padding: 5,
    fontSize: 8,
    color: "#4d426d",
  },
  map: {
    width: 125,
    height: 125,
    borderRadius: 15,
  },
  mapDate: {
    position: "absolute",
    fontWeight: "bold",
    backgroundColor: "#6D5F9A",
    fontSize: 10,
    bottom: -5,
    color: "#fff",
    right: 5,
    padding: 2,
  },
});
