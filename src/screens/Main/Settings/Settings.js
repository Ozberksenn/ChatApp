import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./Settings.style";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Settings = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.profilInfo}>
          <Image
            style={styles.profilPhoto}
            source={{ uri: "https://n-cdn.serienjunkies.de/43/101431.jpg" }}
          />
          <Text style={styles.userName}>User Name</Text>
          <Text style={styles.state}>Online</Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateAccount")}
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <FontAwesome5 name="user" style={styles.icon} />
            <Text style={styles.text}>Accounts</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <FontAwesome5 name="moon" style={styles.icon} />
            <Text style={styles.text}>Theme</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <Feather name="power" style={styles.icon} />
            <Text style={styles.text}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
