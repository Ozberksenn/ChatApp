import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#4d426d",
  },
  titleImage: {
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#6D5F9A",
  },
  nameAndState: {
    justifyContent: "space-evenly",
    marginLeft: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
  },
  backIcon: {
    left: 10,
    color: "white",
    fontSize: 30,
    justifyContent: "center",
  },
  dotIcon: {
    right: 30,
    justifyContent: "center",
    color: "white",
  },
  userName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  state: {
    color: "#fff",
    fontWeight: "200",
  },
});
