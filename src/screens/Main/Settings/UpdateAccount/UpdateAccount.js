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
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import UploadImageAsync from "../../../../hooks/UploadImageAsync";
import { updateUser, updatePhoto } from "../../../../redux/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import Toast from "react-native-toast-message";
const UpdateAccount = () => {
  //Profile information will be updated from this page.
  const navigation = useNavigation();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      // We convert the photo url from the library to base64.
      const base64 = await UploadImageAsync(result.uri);
      setImage(base64);
      editImage(base64);
    }
  };
  const editImage = async (base64) => {
    const profilPhoto = doc(firestore, "users", userInfo?.uid);
    await updateDoc(profilPhoto, {
      profilPhoto: base64,
    }).then(() => {
      dispatch(
        updatePhoto({
          ...userInfo,
          profilPhoto: base64,
        })
      );
    });
  };
  const handleUpdate = async () => {
    if (userName && mail && password) {
      updateEmail(auth.currentUser, mail).then(async () => {
        updatePassword(auth.currentUser, password).then(async () => {
          const update = doc(firestore, "users", userInfo?.uid);
          await updateDoc(update, {
            userName: userName,
            mail: mail,
            password: password,
          });
        });
        await AsyncStorage.removeItem("user").then(() => {
          Toast.show({
            type: "success",
            text1: "Updated",
            text2: "Your information has been updated👋",
          });
        });
        dispatch(updateUser({}));
      });
    } else {
      Toast.show({
        type: "error",
        text1: "Wrong",
        text2: "Please check👋",
      });
    }
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
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          <Image
            style={styles.profilImage}
            source={{ uri: userInfo?.profilPhoto }}
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
