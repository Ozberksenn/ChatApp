import { View, Text, TextInput, ImageBackground } from "react-native";
import React from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import { useNavigation } from "@react-navigation/native";
const ChatDetail = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={{ uri: "https://cdn.wallpapersafari.com/12/90/TyLtep.jpg" }}
      style={styles.container}
    >
      <View>
        <Header />
        <View>
          <Text>mesajasdasdlar</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputText} placeholder="Type a message" />
        </View>
        <View style={styles.sendButton}></View>
      </View>
    </ImageBackground>
  );
};

export default ChatDetail;
