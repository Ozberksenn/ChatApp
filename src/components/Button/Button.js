import { View, Text, TouchableOpacity, btnName } from "react-native";
import React from "react";
import styles from "./Button.style";
const Button = ({ btnName }) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnName}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
