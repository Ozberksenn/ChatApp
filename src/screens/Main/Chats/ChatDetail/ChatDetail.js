import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { useSelector } from "react-redux";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { firestore } from "../../../../../config";
import moment from "moment/moment";
const ChatDetail = ({ route }) => {
  const { uid, userName, profilPhoto } = route.params;
  const { userInfo } = useSelector((state) => state.user);

  const [data, setData] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    onSnapshot(
      query(
        collection(firestore, "messages"),
        orderBy("date", "asc")
        // tarihe göres sıraladım..
      ),
      (snapshot) => {
        snapshot.docChanges().forEach((item) => {
          const message = item.doc.data();
          if (
            (message.receiver_id === userInfo.uid &&
              message.sender_id === uid) ||
            (message.sender_id === userInfo.uid && message.receiver_id === uid)
          ) {
            setData((prevData) => [...prevData, message]);
          }
        });
      }
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Header profilPhoto={profilPhoto} userName={userName} />
      </View>
      <View style={styles.content}>
        <View>
          <FlatList
            style={{ marginTop: 30, height: "81%" }}
            data={data}
            renderItem={({ item }) => (
              <>
                {item.receiver_id === userInfo.uid ? (
                  <View key={item.id} style={styles.receiver}>
                    <Text style={{ color: "#fff" }}>{item.content}</Text>
                    <Text style={[styles.date, { color: "#efa985" }]}>
                      {moment.utc(item.date).format("HH:mm")}
                    </Text>
                  </View>
                ) : (
                  <View key={item.id} style={styles.sender}>
                    <Text style={{ color: "#fff" }}>{item.content}</Text>
                    <Text style={styles.date}>
                      {moment.utc(item.date).format("HH:mm")}
                    </Text>
                  </View>
                )}
              </>
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
