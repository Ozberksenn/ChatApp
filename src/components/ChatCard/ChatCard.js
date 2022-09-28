import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./ChatCard.style";
import { useNavigation } from "@react-navigation/native";
const ChatCard = ({ data }) => {
  // kişileri listeleteceğimiz kart yapısı.
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("ChatDetail", {
          uid: data.item.uid,
          userName: data.item.userName,
          profilPhoto: data.item.profilPhoto,
        })
      }
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
          <Text numberOfLines={1} style={styles.text}>
            Hey There I'm Using ChatApp
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
