import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./ChatCard.style";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
const ChatCard = ({ data }) => {
  // mesajlaştığımız kişileri listeleteceğimiz kart yapısı.
  const navigation = useNavigation();
  const { userInfo } = useSelector((state) => state.user);
  return (
    <Pressable
      onPress={() => navigation.navigate("ChatDetail")}
      style={styles.container}
    >
      <View style={styles.content}>
        <View>
          <Image
            style={styles.chatProfileImage}
            source={{ uri: data.item.profilPhoto }}
          />
        </View>
        <View style={styles.nameAndMessage}>
          <Text style={styles.name}>{data.item.userName}</Text>
          <Text numberOfLines={1} style={styles.message}>
            That's what she said
          </Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>date</Text>
      </View>
    </Pressable>
  );
};

export default ChatCard;
