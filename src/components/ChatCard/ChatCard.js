import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import styles from "./ChatCard.style";
import { useNavigation } from "@react-navigation/native";
const ChatCard = () => {
  const navigation = useNavigation();
  // mesajlaştığımız kişileri listeleteceğimiz kart yapısı.
  return (
    <Pressable
      onPress={() => navigation.navigate("ChatDetail")}
      style={styles.container}
    >
      <View style={styles.content}>
        <View>
          <Image
            style={styles.chatProfileImage}
            source={{ uri: "https://n-cdn.serienjunkies.de/43/101431.jpg" }}
          />
        </View>
        <View style={styles.nameAndMessage}>
          <Text style={styles.name}>Dwight Schurte</Text>
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