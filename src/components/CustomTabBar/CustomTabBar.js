import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./CustomTabBar.style";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CustomTabBar = () => {
  const [focused, setFocused] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chats") & setFocused(1)}
      >
        <MaterialIcons
          style={[styles.icon, { color: focused === 1 ? "#EFA985" : "#fff" }]}
          name="chat-bubble-outline"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Contacts") & setFocused(2)}
      >
        <Feather
          name="users"
          style={[styles.icon, { color: focused === 2 ? "#EFA985" : "#fff" }]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Settings") & setFocused(3)}
      >
        <Feather
          name="menu"
          style={[styles.icon, { color: focused === 3 ? "#EFA985" : "#fff" }]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CustomTabBar;
