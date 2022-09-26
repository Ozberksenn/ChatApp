import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./Input.style";
const Input = ({ inputName, placeholder, onChangeText, value, iconName }) => {
  return (
    <View>
      <Text style={styles.inputName}>{inputName}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        <Feather style={styles.inputIcon} name={iconName} />
      </View>
    </View>
  );
};

export default Input;
