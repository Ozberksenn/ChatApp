import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Chats.style";
const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
};

export default Chats;
