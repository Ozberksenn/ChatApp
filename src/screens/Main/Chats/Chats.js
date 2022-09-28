import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Chats.style";
import ChatCard from "../../../components/ChatCard/ChatCard";
import Stories from "../../../components/Stories/Stories";
import { useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../../../config";

const Chats = () => {
  const [storyData, setStoryData] = useState();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    const response = collection(firestore, "users");
    await getDocs(response).then((e) => {
      setStoryData(e.docs.map((item) => item.data()));
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
            horizontal={true}
            data={storyData}
            renderItem={(item) => <Stories data={item} />}
          />
        </View>
        <View style={styles.line}></View>
      </View>
    </SafeAreaView>
  );
};

export default Chats;
