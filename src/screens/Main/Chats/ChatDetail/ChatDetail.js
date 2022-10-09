import { View, Text, FlatList, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./ChatDetail.style";
import Header from "../../../../components/ChatDetailHeader/Header";
import Footer from "../../../../components/ChatDetailFooter/Footer";
import { useSelector } from "react-redux";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { firestore } from "../../../../../config";
import MapView, { Marker } from "react-native-maps";
import moment from "moment/moment";

const ChatDetail = ({ route }) => {
  const { uid, userName, profilPhoto } = route.params;
  const { userInfo } = useSelector((state) => state.user);
  const [data, setData] = useState([]);
  const [enable, setEnable] = useState(false);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={enable}
      style={styles.container}
    >
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
                  item.type === "text" ? (
                    <View key={item.id} style={styles.receiver}>
                      <Text style={{ color: "#fff" }}>{msg(item)}</Text>
                      <Text style={[styles.date, { color: "#efa985" }]}>
                        {moment.utc(item.date).format("HH:mm")}
                      </Text>
                    </View>
                  ) : (
                    <View
                      key={item.id}
                      style={[styles.receiver, { padding: 5 }]}
                    >
                      <MapView style={styles.map}>
                        {console.log("item", item)}
                        <Marker
                          coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                          }}
                        />
                      </MapView>
                      <Text style={styles.mapDate}>
                        {moment.utc(item.date).format("HH:mm")}
                      </Text>
                    </View>
                  )
                ) : item.type === "text" ? (
                  <View key={item.id} style={styles.sender}>
                    <Text style={{ color: "#fff" }}>{item.content}</Text>
                    <Text style={styles.date}>
                      {moment.utc(item.date).format("HH:mm")}
                    </Text>
                  </View>
                ) : (
                  <View key={item.id} style={[styles.sender, { padding: 5 }]}>
                    <MapView style={styles.map}>
                      <Marker
                        coordinate={{
                          latitude: item.latitude,
                          longitude: item.longitude,
                        }}
                      />
                    </MapView>
                    <Text style={styles.mapDate}>
                      {moment.utc(item.date).format("HH:mm")}
                    </Text>
                  </View>
                )}
              </>
            )}
          />
        </View>
        <View style={{ bottom: 0, flex: 1, position: "absolute" }}>
          <Footer onFocus={() => setEnable(true)} uid={uid} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatDetail;
