import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatProfileImage: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  content: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  nameAndMessage: {
    left: 5,
    marginRight: 125,
    justifyContent: "space-around",
  },
  dateContainer: {
    position: "absolute",
    right: 0,
  },
  date: {
    color: "#fff",
    fontWeight: "200",
    fontStyle: "italic",
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  message: {
    fontWeight: "100",
    fontSize: 16,
    color: "#fff",
  },
});
