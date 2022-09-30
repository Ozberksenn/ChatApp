import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Chats.style";
import ChatCard from "../../../components/ChatCard/ChatCard";
import Stories from "../../../components/Stories/Stories";
import { useSelector } from "react-redux";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../../../config";

const Chats = () => {
  const [storyData, setStoryData] = useState();
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const userListId = [];
  const userList = [];
  const { activeTheme } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    // tüm mesajlar arasından ben ile mesajlaştığım kullanıcıların uid alıyorum.
    if (messages.length > 0) {
      messages.map((e) => {
        if (e.receiver_id === userInfo.uid || e.sender_id === userInfo.uid) {
          if (e.receiver_id === userInfo.uid) {
            userListId.push(e.sender_id);
          } else if (e.sender_id === userInfo.uid) {
            userListId.push(e.receiver_id);
          }
        }
      });
      const uniqueUserList = Array.from(new Set(userListId));
      setUsers(uniqueUserList);
    }
  }, [messages]);

  useEffect(() => {
    if (data.length > 0) console.log("data", data);
  }, [data]);

  useEffect(() => {
    // uid lerini bulduğum kullanıcıların verilerini çekiyorum.
    if (users.length > 0) getUsers();
  }, [users]);

  const getUsers = async () => {
    users.map(async (e) => {
      const q = doc(firestore, "users", e);
      await getDoc(q).then((res) => {
        setData((prevData) => [...prevData, res.data()]);
      });
    });
  };

  useEffect(() => {
    getCollection();
    getMessageUser();
  }, []);

  const getCollection = async () => {
    const response = collection(firestore, "users");
    await getDocs(response).then((e) => {
      setStoryData(e.docs.map((item) => item.data()));
    });
  };

  const getMessageUser = async () => {
    // mesajları anlık olarak aldırıyoruz.
    await onSnapshot(collection(firestore, "messages"), (snapshot) => {
      setMessages(snapshot.docs.map((item) => item.data()));
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.cardContainer}>
          <FlatList
            horizontal={true}
            data={storyData}
            renderItem={(item) => <Stories data={item} />}
          />
        </View>
        <View style={styles.line}></View>
        {data.length > 0 && (
          <FlatList
            style={{ height: "90%" }}
            data={data}
            renderItem={(item) => <ChatCard data={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Chats;
