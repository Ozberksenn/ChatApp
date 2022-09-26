import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input/Input";
const SignUp = () => {
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Ionicons style={styles.backIcon} name="arrow-back" />
          <Text style={styles.AccountText}>Create a Account</Text>
        </View>
        <View>
          <Input inputName="Username" placeholder="please enter username" />
          <View style={styles.line}></View>
          <Input inputName="Email" placeholder="please enter email" />
          <View style={styles.line}></View>
          <Input inputName="Password" placeholder="please enter password" />
          <View style={styles.line}></View>
          <Input
            inputName="Password Again"
            placeholder="please enter password again"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
