import { View, TextInput } from "react-native";
import React from "react";
import styles from "./Footer.style";
import { FontAwesome } from "@expo/vector-icons";
const Footer = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type a message" />
      <View style={styles.sendButton}>
        <FontAwesome name="send-o" size={24} color="black" />
      </View>
    </View>
  );
};

export default Footer;
