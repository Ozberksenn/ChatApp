import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Footer.style";
import { FontAwesome } from "@expo/vector-icons";
import { firestore } from "../../../config";
import { doc, setDoc } from "firebase/firestore";
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
    });
    setMessage("");
  };

  return (
    <View style={styles.container}>
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
