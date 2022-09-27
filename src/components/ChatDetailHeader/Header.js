import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import styles from "./Header.style";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation();
  // mesajlaşma ekranında bulunacak olan header.
  return (
    <SafeAreaView style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            onPress={() => navigation.navigate("TabBar")}
            name="arrow-back"
            style={styles.backIcon}
          />
          <Image
            style={styles.titleImage}
            source={{ uri: "https://n-cdn.serienjunkies.de/43/101431.jpg" }}
          />
        </View>
        <View style={styles.nameAndState}>
          <Text style={styles.userName}>userName</Text>
          <Text style={styles.state}>Online</Text>
        </View>
      </View>
      <View style={styles.dotIcon}>
        <Entypo name="dots-three-vertical" size={26} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Header;
