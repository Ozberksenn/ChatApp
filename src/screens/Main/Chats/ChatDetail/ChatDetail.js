import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { useSelector } from "react-redux";
import {
  collection,
  getDocs,
  onSnapshot,
  where,
  query,
  orderBy,
  QuerySnapshot,
  doc,
} from "firebase/firestore";
import { firestore } from "../../../../../config";
import moment from "moment/moment";
const ChatDetail = ({ route }) => {
  const { uid, userName, profilPhoto } = route.params;
  const { userInfo } = useSelector((state) => state.user);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCollection();
  }, []);

  // const getCollection = () => {
  //   const messages = [];

  //   const sender = query(
  //     collection(firestore, "messages"),
  //     where("sender_id", "==", userInfo.uid),
  //     where("receiver_id", "==", uid)
  //   );
  //   const senderMe = onSnapshot(sender, (QuerySnapshot) => {
  //     QuerySnapshot.forEach((doc) => {
  //       setData((prev) => [...prev, doc.data()]);
  //     });
  //   });
  //   const receiver = query(
  //     collection(firestore, "messages"),
  //     where("sender_id", "==", uid),
  //     where("receiver_id", "==", userInfo.uid)
  //   );
  //   const recevierMe = onSnapshot(receiver, (QuerySnapshot) => {
  //     QuerySnapshot.forEach((doc) => {
  //       setData((prev) => [...prev, doc.data()]);
  //     });
  //   });
  // };

  const getCollection = async () => {
    await onSnapshot(collection(firestore, "messages"), (snapshot) => {
      snapshot.docs.map((item) => {
        const message = item.data();
        if (
          (message.receiver_id === userInfo.uid && message.sender_id === uid) ||
          (message.sender_id === userInfo.uid && message.receiver_id === uid)
        ) {
          // console.log(message);
          setData((data) => [...data, message]);
        } else {
        }
      });

      // setData(
      //   messages.sort(
      //     (firstItem, secondItem) => firstItem.date - secondItem.date
      //   )
      // );
    });
  };

  //   const response = onSnapshot(collection(firestore, "messages"));
  //   await getDocs(response).then((e) =>
  //     e.docs.map(async (item, index) => {
  //       const message = item.data();
  //       if (
  //         (message.receiver_id === userInfo.uid && message.sender_id === uid) ||
  //         (message.sender_id === userInfo.uid && message.receiver_id === uid)
  //       ) {
  //         console.log(index);
  //         messages.push(message);
  //       } else {
  //         console.log("benden yok");
  //       }
  //     })
  //   );
  //   setData(
  //     messages.sort((firstItem, secondItem) => firstItem.date - secondItem.date)
  //   );
  // };

  return (
    <View style={styles.container}>
      <View>
        <Header profilPhoto={profilPhoto} userName={userName} />
      </View>
      <View style={styles.content}>
        <View>
          <FlatList
            style={{ marginTop: 30, height: "90%" }}
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
