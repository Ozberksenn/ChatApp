import { View, Text, TouchableOpacity, btnName } from "react-native";
import React from "react";
import styles from "./Button.style";
const Button = ({ onPress, btnName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
      <Text style={styles.btnName}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
