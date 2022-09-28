import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../../../../config";
const ChatDetail = ({ route }) => {
  const { uid, userName, profilPhoto } = route.params;
  const { userInfo } = useSelector((state) => state.user);
  const [message, setMessage] = useState();

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    const response = collection(firestore, "messages");
    await getDocs(response).then((e) =>
      setMessage(e.docs.map((item) => item.data()))
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Header profilPhoto={profilPhoto} userName={userName} />
      </View>
      <View style={styles.content}>
        <View style={{ marginTop: 30 }}>
          <FlatList
            style={{}}
            data={message}
            renderItem={({ item }) => (
              <View style={styles.messageContainer}>
                <Text>{item.content}</Text>
              </View>
            )}
          />
        </View>
        <View style={{ bottom: 0, position: "absolute" }}>
          <Footer uid={uid} />
        </View>
      </View>
    </View>
  );
};

export default ChatDetail;
