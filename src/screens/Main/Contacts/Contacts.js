import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Contacts.style";
const Contacts = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
};

export default Contacts;
