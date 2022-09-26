import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./UpdateAccount.style";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const UpdateAccount = () => {
  //profil bilgileri bu sayfadan güncellenecek.
  const navigation = useNavigation();
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
          <Input iconName="user" inputName="Username" />
          <View style={styles.line}></View>
          <Input iconName="mail" inputName="Email" />
          <View style={styles.line}></View>
          <Input securityPassword iconName="key" inputName="Password" />
          <Button btnName="Update Profile" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateAccount;
