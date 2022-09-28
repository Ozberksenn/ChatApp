import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Chats.style";
import ChatCard from "../../../components/ChatCard/ChatCard";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../config";

const Chats = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    //user collectionda ki userları listeletiyoruz. Daha sonra flat list kullanarak chats sayfamızda gösteriyoruz.
    const users = collection(firestore, "users");
    await getDocs(users).then((e) => {
      setData(e.docs.map((item) => item.data()));
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <FlatList
            data={data}
            renderItem={(item) => <ChatCard data={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
