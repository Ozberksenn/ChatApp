import {
  View,
  TouchableOpacity,
  Image,
  Text,
  Modal,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import styles from "./Stories.style";
import { useSelector } from "react-redux";
const Stories = ({ data }) => {
  const { activeTheme } = useSelector((state) => state.theme);
  const [modalVisible, setModalVisible] = useState(false);

  // Story kısmında her bir kişiye tıkladığımızda görseli göstereceğimiz bir modal açıyoruz.
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
                source={{
                  uri: "https://p4.wallpaperbetter.com/wallpaper/763/323/685/marlon-brando-photoshopped-the-godfather-wallpaper-preview.jpg",
                }}
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
