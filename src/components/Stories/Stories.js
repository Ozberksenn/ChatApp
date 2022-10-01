import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Stories.style";
import { useSelector } from "react-redux";
const Stories = ({ data }) => {
  const { activeTheme } = useSelector((state) => state.theme);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log("stories data", data.item.stories[0].storiesUrl);

  // Story kısmında her bimr kişiye tıkladığımızda görseli göstereceğimiz bir modal açıyoruz.
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onBackdropPress={false}
        onSwipeComplete={false}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Pressable onPress={() => setModalVisible(false)}>
            <View style={styles.modal}>
              <Image
                style={styles.modalImage}
                source={{ uri: data.item.stories[0].storiesUrl }}
              />
            </View>
          </Pressable>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{ justifyContent: "center" }}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: data.item.profilPhoto }} />
          <Text style={[styles.name, { color: activeTheme.textColor }]}>
            {data.item.userName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Stories;
