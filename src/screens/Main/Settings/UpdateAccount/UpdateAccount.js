import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "./UpdateAccount.style";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { auth, firestore } from "../../../../../config";
import { updateEmail, updatePassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { updateUser } from "../../../../redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UpdateAccount = () => {
  //profil bilgileri bu sayfadan güncellenecek.
  const navigation = useNavigation();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();

  const handleUpdate = async () => {
    //userName , mail ve password bilgilerini her yerden güncelledim.
    updateEmail(auth.currentUser, mail).then(async () => {
      updatePassword(auth.currentUser, password).then(async () => {
        const update = doc(firestore, "users", userInfo?.uid);
        await updateDoc(update, {
          userName: userName,
          mail: mail,
          password: password,
        });
      });
      await AsyncStorage.removeItem("user");
      dispatch(updateUser({}));
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => navigation.navigate("TabBar")}
          name="arrow-back"
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>Account Settings</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.profilImage}
            source={{ uri: "https://n-cdn.serienjunkies.de/43/101431.jpg" }}
          />
          <FontAwesome5 name="camera" style={styles.icon} />
        </TouchableOpacity>
        <View>
          <Input
            onChangeText={(value) => setUserName(value)}
            defaultValue={userInfo.userName}
            iconName="user"
            inputName="Username"
            placeholder="Enter a value"
          />
          <View style={styles.line}></View>
          <Input
            onChangeText={(value) => setMail(value)}
            defaultValue={userInfo.mail}
            iconName="mail"
            inputName="Email"
            placeholder="Enter a value"
          />
          <View style={styles.line}></View>
          <Input
            onChangeText={(value) => setPassword(value)}
            defaultValue={userInfo.password}
            securityPassword
            iconName="key"
            inputName="Password"
            placeholder="Enter a value"
          />
          <Button onPress={handleUpdate} btnName="Update Profile" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateAccount;
