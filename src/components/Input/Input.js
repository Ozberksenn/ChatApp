import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styles from "./Input.style";
import { useSelector } from "react-redux";
const Input = ({
  inputName,
  placeholder,
  defaultValue,
  onChangeText,
  value,
  iconName,
  securityPassword,
}) => {
  const { activeTheme } = useSelector((state) => state.theme);
  return (
    <View>
      <Text style={[styles.inputName, { color: activeTheme.textColor }]}>
        {inputName}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          secureTextEntry={securityPassword}
        />
        <Feather style={styles.inputIcon} name={iconName} />
      </View>
    </View>
  );
};

export default Input;
