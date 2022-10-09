import { View, Text, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./ChatCard.style";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { firestore } from "../../../config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import moment from "moment";
const ChatCard = ({ data, isChatView }) => {
  // The card structure where we will list the contacts.
  const { activeTheme } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.user);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = () => {
    onSnapshot(
      query(
        collection(firestore, "messages"),
        orderBy("date", "asc")
        // sort by date
      ),
      (snapshot) => {
        snapshot.docChanges().forEach((item) => {
          const message = item.doc.data();
          if (
            (message.receiver_id === userInfo.uid &&
              message.sender_id === data.item.uid) ||
            (message.sender_id === userInfo.uid &&
              message.receiver_id === data.item.uid)
          ) {
            setMessages((prevData) => [...prevData, message]);
          }
        });
      }
    );
  };

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
          <Text style={[styles.name, { color: activeTheme.textColor }]}>
            {data.item.userName}
          </Text>
          <Text
            numberOfLines={1}
            style={[styles.text, { color: activeTheme.textColor }]}
          >
            {isChatView
              ? messages[messages.length - 1]
                ? messages[messages.length - 1]?.content
                : userInfo.bio
              : userInfo.bio}
          </Text>
        </View>
      </View>
      {isChatView && (
        <View style={styles.dateContainer}>
          <Text style={[styles.date, { color: activeTheme.textColor }]}>
            {messages[messages.length - 1]?.date && (
              <>
                {moment
                  .utc(messages[messages.length - 1]?.date)
                  .startOf()
                  .fromNow()}
              </>
            )}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default ChatCard;
