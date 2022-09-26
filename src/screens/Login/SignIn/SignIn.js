import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SignIn.style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
const SignIn = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.signInContainer}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.AccountText}>Sign In To Your Account</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Input
            iconName="mail"
            inputName="Email"
            placeholder="please enter email"
          />
          <View style={styles.line}></View>
          <Input
            iconName="key"
            inputName="Password"
            placeholder="please enter password"
          />
          <View style={styles.line}></View>
          <Button btnName="Sign In" />
          <Button
            onPress={() => navigation.navigate("SignUp")}
            btnName="Sign Up"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
