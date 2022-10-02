import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./Chats.style";
import ChatCard from "../../../components/ChatCard/ChatCard";
import Stories from "../../../components/Stories/Stories";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import uploadImageAsync from "../../../hooks/UploadImageAsync";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../../../config";
import { Camera } from "expo-camera";
const Chats = () => {
  const [storyData, setStoryData] = useState();
  const [data, setData] = useState([]);
  const [messages, setMessages] = useState([]);
  const [image, setImage] = useState();
  const [hasPermission, setHasPermission] = useState(null);
  const [users, setUsers] = useState([]);
  const userListId = [];
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
    if (data.length > 0);
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
    const response = query(
      collection(firestore, "users"),
      where("stories", "!=", null)
    );
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

  const handlStoriesIcon = async () => {
    //story atan kullanıcılar listelendirildi ve modal içinde kullanıcının paylaştığı story gösterildi.
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      const base64 = await uploadImageAsync(result.uri);
      setImage(base64);
      const date = Date.now();
      const stories = doc(firestore, "users", userInfo.uid);
      await updateDoc(stories, {
        stories: [
          {
            storiesUrl: base64,
            date: date,
          },
        ],
      });
    }
  };

  useEffect(() => {
    // we trigger for camera permissions. Access to the camera must be granted from the Expo!
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [handlStoriesIcon]);
  if (hasPermission === false) {
    Alert.alert("Warning", "No Access To Camera");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Chats</Text>
      </View>
      <View style={[styles.content, { backgroundColor: activeTheme.bgColor }]}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={handlStoriesIcon}
            style={styles.storiesIcon}
          >
            <MaterialCommunityIcons
              name="camera-plus"
              size={24}
              color="black"
            />
          </TouchableOpacity>
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
