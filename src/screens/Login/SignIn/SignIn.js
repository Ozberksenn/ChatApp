import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignIn.style";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../../redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import { doc, getDoc } from "firebase/firestore";

// Login Page
const SignIn = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { activeTheme } = useSelector((state) => state.theme);
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const handleSignIn = () => {
    // All data is pulled from firebase. The captured data is written to async storage and redux store.
    if (mail && password) {
      signInWithEmailAndPassword(auth, mail, password)
        .then(async (res) => {
          const userDoc = doc(firestore, "users", res.user.uid);
          const userRef = await getDoc(userDoc);
          AsyncStorage.setItem("user", JSON.stringify(userRef.data())).then(
            () => {
              dispatch(signIn(userRef.data()));
              Toast.show({
                type: "success",
                text1: "Hello",
                text2: "you have successed logged in👋",
              });
            }
          );
        })
        .catch((err) => console.log(err));
    } else {
      Toast.show({
        type: "error",
        text1: "Wrong",
        text2: "Mail and Password cannot be left blank👋",
      });
    }
  };
  return (
    <SafeAreaView style={styles.signInContainer}>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.AccountText, { color: activeTheme.textColor }]}>
            Sign In To Your Account
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Input
            onChangeText={(value) => setMail(value)}
            iconName="mail"
            inputName="Email"
            placeholder="Please Enter Email"
          />
          <View style={styles.line}></View>
          <Input
            onChangeText={(value) => setPassword(value)}
            securityPassword
            iconName="key"
            inputName="Password"
            placeholder="Please Enter Password"
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
