import { View, TextInput, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Footer.style";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { firestore } from "../../../config";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import uuid from "react-native-uuid";
const Footer = ({ uid }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [message, setMessage] = useState();

  const handleSend = async () => {
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
  };

  const handleLocation = async () => {
    const date = Date.now();
    await setDoc(doc(firestore, "messages", uuid.v4()), {
      id: uuid.v4(),
      receiver_id: uid,
      sender_id: userInfo?.uid,
      date: date,
      type: "map",
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLocation} style={styles.locationIcon}>
        <Ionicons name="location-outline" size={30} color="black" />
      </TouchableOpacity>
      <TextInput
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
