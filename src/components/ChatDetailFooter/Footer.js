import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Footer.style";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { firestore } from "../../../config";
import { doc, setDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import * as Location from "expo-location";
import uuid from "react-native-uuid";
const Footer = ({ uid, onFocus }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [message, setMessage] = useState();

  const handleSend = async () => {
    if (message) {
      const date = Date.now();
      await setDoc(doc(firestore, "messages", uuid.v4()), {
        id: uuid.v4(),
        content: message,
        receiver_id: uid,
        sender_id: userInfo?.uid,
        date: date,
        type: "text",
      });
      setMessage("");
    }
  };

  const handleLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      const date = Date.now();
      await setDoc(doc(firestore, "messages", uuid.v4()), {
        id: uuid.v4(),
        receiver_id: uid,
        sender_id: userInfo?.uid,
        date: date,
        type: "map",
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLocation} style={styles.locationIcon}>
        <Ionicons name="location-outline" size={30} color="black" />
      </TouchableOpacity>
      <TextInput
        onFocus={onFocus}
        value={message}
        onChangeText={(value) => setMessage(value)}
        style={styles.input}
        placeholder="Type a message"
      />
      <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
        <FontAwesome name="send-o" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
