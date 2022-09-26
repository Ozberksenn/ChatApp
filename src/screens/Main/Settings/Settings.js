import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Settings.style";
const Settings = () => {
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
};

export default Settings;
