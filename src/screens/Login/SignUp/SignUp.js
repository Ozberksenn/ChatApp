import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SignUp.style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Ionicons style={styles.backIcon} name="arrow-back" />
          </TouchableOpacity>
          <Text style={styles.AccountText}>Create a Account</Text>
        </View>
        <View style={{ marginTop: 20 }}>
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
          <Button btnName="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
