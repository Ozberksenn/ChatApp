import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./SignUp.style";
import { Ionicons } from "@expo/vector-icons";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, firestore } from "../.././../../config";
const SignUp = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordAgain, setPasswordAgain] = useState(null);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, mail, password)
      .then(async (res) => {
        // bir collection oluşturduk ve inputtan aldığımız değerleri firestore ya kaydettik.
        await addDoc(collection(firestore, "users"), {
          mail: mail,
          password: password,
          userName: userName,
          id: res.user.uid,
          profilPhoto:
            "https://firebasestorage.googleapis.com/v0/b/chat-11105.appspot.com/o/user-01.png?alt=media&token=bfcb9a5c-ce0b-43d5-a96a-d06d8efe168e",
          // default olarak bir profil fotoğrafı ekliyorum. Kullanıcı daha sonra  ayarlardan onu değiştirebilir.
        });
        navigation.navigate("SignIn");
      })
      .catch((err) => console.log(err));
  };
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
