import { View, Text } from "react-native";
import React from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ChatDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Header />
      </View>
      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <Text style={styles.inputText}>asdasdasd</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.inputText}>asdasdasd</Text>
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.inputText}>asdasdasd</Text>
        </View>
        <View style={{ bottom: 0, position: "absolute" }}>
          <Footer />
        </View>
      </View>
    </View>
  );
};

export default ChatDetail;
