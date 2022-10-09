import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  Pressable,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./Stories.style";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
const Stories = ({ data }) => {
  const { activeTheme } = useSelector((state) => state.theme);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      handleCloseModal();
    }, 6000);
  }, [modalVisible]);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // When i click on each person in the Story section, i open a modal that will show the image.
  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onBackdropPress={false}
        onSwipeComplete={false}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <Pressable onPress={handleCloseModal}>
            <SafeAreaView style={styles.modal}>
              <LottieView
                style={{ left: 10, height: 6 }}
                autoPlay
                source={require("../../assets/progresBar.json")}
              />
              <Image
                style={styles.modalImage}
                source={{ uri: data.item.stories[0].storiesUrl }}
              />
            </SafeAreaView>
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
