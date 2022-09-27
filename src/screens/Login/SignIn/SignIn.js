import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignIn.style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../config";
import { useDispatch } from "react-redux";
import { signIn } from "../../../redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, mail, password)
      .then(
        async () =>
          await AsyncStorage.setItem(
            "user",
            JSON.stringify({
              mail: mail,
              password: password,
            })
          ),
        dispatch(
          signIn({
            mail: mail,
            password: password,
          })
        ),
        Toast.show({
          type: "success",
          text1: "Hello",
          text2: "This is some something 👋",
        })
      )
      .catch((err) => console.log(err));
  };
  return (
    <SafeAreaView style={styles.signInContainer}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.AccountText}>Sign In To Your Account</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Input
            onChangeText={(value) => setMail(value)}
            iconName="mail"
            inputName="Email"
            placeholder="please enter email"
          />
          <View style={styles.line}></View>
          <Input
            onChangeText={(value) => setPassword(value)}
            securityPassword
            iconName="key"
            inputName="Password"
            placeholder="please enter password"
          />
          <Button onPress={handleSignIn} btnName="Sign In" />
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
