import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Contacts.style";
import ChatCard from "../../../components/ChatCard/ChatCard";
import { collection, getDocs, where, query } from "firebase/firestore";
import { firestore } from "../../../../config";
import { useSelector } from "react-redux";
const Contacts = () => {
  const [data, setData] = useState(null);
  const { userInfo } = useSelector((state) => state.user);
  const { activeTheme } = useSelector((state) => state.theme);
  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    //user collectionda ki userları listeletiyoruz. Daha sonra flat list kullanarak chats sayfamızda gösteriyoruz.
    const q = query(
      collection(firestore, "users"),
      where("uid", "!=", userInfo.uid)
    );
    // where sorgusu yaparak giriş yapılan kullanıcı listelendirilmez.

    await getDocs(q).then((e) => {
      setData(e.docs.map((item) => item.data()));
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Contacts</Text>
      </View>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.cardContainer}>
          <FlatList
            style={{ height: "100%" }}
            data={data}
            renderItem={(item) => <ChatCard data={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Contacts;
