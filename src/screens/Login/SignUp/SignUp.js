import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../.././../../config";
import Toast from "react-native-toast-message";
const SignUp = () => {
  const navigation = useNavigation();
  const { activeTheme } = useSelector((state) => state.theme);
  const [userName, setUserName] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);

  const handleSignUp = () => {
    if (userName && mail && password && passwordAgain) {
      if (password === passwordAgain) {
        createUserWithEmailAndPassword(auth, mail, password)
          .then(async (res) => {
            // We created a collection and saved the values ​​we received from the input to the firestore.
            await setDoc(doc(firestore, "users", res.user.uid), {
              mail: mail,
              password: password,
              userName: userName,
              uid: res.user.uid,
              bio: "Hey There I'm Using ChatApp",
              profilPhoto:
                "https://firebasestorage.googleapis.com/v0/b/chat-11105.appspot.com/o/user.png?alt=media&token=93f8ebfa-89ce-4975-95c5-4cad65655d97",
              // I add a profile photo by default. The user can then change it from the settings.
            });
            navigation.navigate("SignIn");
          })
          .catch((err) => console.log(err));
      } else {
        Toast.show({
          type: "error",
          text1: "Wrong",
          text2: "Information does not match👋",
        });
      }
    } else {
      Toast.show({
        type: "error",
        text1: "Wrong",
        text2: "Mail and Password cannot be left blank👋",
      });
    }
  };
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Ionicons
              style={[styles.backIcon, { color: activeTheme.textColor }]}
              name="arrow-back"
            />
          </TouchableOpacity>
          <Text style={[styles.AccountText, { color: activeTheme.textColor }]}>
            Create a Account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            onChangeText={(value) => setUserName(value)}
            iconName="user"
            inputName="Username"
            placeholder="please enter username"
          />
          <View style={styles.line}></View>
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
          <View style={styles.line}></View>
          <Input
            onChangeText={(value) => setPasswordAgain(value)}
            securityPassword
            iconName="key"
            inputName="Password Again"
            placeholder="please enter password again"
          />
          <Button onPress={handleSignUp} btnName="Sign Up" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
