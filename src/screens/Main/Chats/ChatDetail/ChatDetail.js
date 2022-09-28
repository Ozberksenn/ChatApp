import { View, Text } from "react-native";
import React from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const ChatDetail = ({ route }) => {
  const navigation = useNavigation();
  const { userName, profilPhoto } = route.params;

  return (
    <View style={styles.container}>
      <View>
        <Header profilPhoto={profilPhoto} userName={userName} />
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
