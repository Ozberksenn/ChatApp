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
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../../redux/ThemeSlice";
const Settings = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { activeTheme } = useSelector((state) => state.theme);

  const handleTheme = () => {
    // tema değiştirilecek.
    dispatch(toggleTheme());
  };
  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.profilInfo}>
          <Image
            style={styles.profilPhoto}
            source={{ uri: "https://n-cdn.serienjunkies.de/43/101431.jpg" }}
          />
          <Text style={[styles.userName, { color: activeTheme.textColor }]}>
            User Name
          </Text>
          <Text style={[styles.state, { color: activeTheme.textColor }]}>
            Online
          </Text>
        </View>
        <View style={styles.textContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UpdateAccount")}
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <FontAwesome5 name="user" style={styles.icon} />
            <Text style={[styles.text, { color: activeTheme.textColor }]}>
              Accounts
            </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            onPress={handleTheme}
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <FontAwesome5 name="moon" style={styles.icon} />
            <Text style={[styles.text, { color: activeTheme.textColor }]}>
              Theme
            </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={{ flexDirection: "row", marginVertical: 20 }}
          >
            <Feather name="power" style={styles.icon} />
            <Text style={[styles.text, { color: activeTheme.textColor }]}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
