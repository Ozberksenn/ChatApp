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
  onSnapshot,
  orderBy,
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
  const { activeTheme } = useSelector((state) => state.theme);
  const { userInfo } = useSelector((state) => state.user);
  const userListId = [];

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    // We only show users who posted stories.
    const response = query(
      collection(firestore, "users"),
      where("stories", "!=", null)
    );
    onSnapshot(response, (querySnapshot) => {
      const story = [];
      querySnapshot.forEach((doc) => {
        const currentTime = Date.now();
        const time = doc.data().stories[0].date;
        if (currentTime - time <= 86400000) {
          //I wanted it to show users who have posted stories within 24 hours.
          story.push(doc.data());
        }
      });
      setStoryData(story);
    });
  };
  const handlStoriesIcon = async () => {
    //The users who posted a story were listed and the story shared by the user in the modal was shown.
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

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = () => {
    const q = query(collection(firestore, "messages"), orderBy("date", "asc"));
    onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.docChanges().forEach((change) => {
        messages.push(change.doc.data());
      });
      setMessages(messages);
    });
  };

  useEffect(() => {
    messages.map((e) => {
      if (e.receiver_id === userInfo.uid || e.sender_id === userInfo.uid) {
        if (e.receiver_id === userInfo.uid) {
          userListId.push(e.sender_id);
        } else if (e.sender_id === userInfo.uid) {
          userListId.push(e.receiver_id);
        }
      }
    });
    const uniqueUserList = userListId.filter(
      (it, i, ar) => ar.indexOf(it) === i
    ); // uiq unique
    const q = collection(firestore, "users");
    onSnapshot(q, (snapshot) => {
      snapshot.forEach((e) => {
        uniqueUserList.map((item) => {
          if (item === e.data().uid) {
            if (data.length > 0) {
              let isUserExist = false;
              data.map((item) => {
                if (item.uid === e.data().uid) {
                  isUserExist = true;
                }
              });
              if (!isUserExist) {
                setData((prevData) => [...prevData, e.data()]);
              }
            } else {
              setData((prevData) => [...prevData, e.data()]);
            }
          }
        });
      });
    });
  }, [messages]);

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
            renderItem={(item) => <ChatCard data={item} isChatView={true} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Chats;
