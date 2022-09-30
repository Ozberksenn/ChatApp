import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import styles from "./Stories.style";
import { useSelector } from "react-redux";
const Stories = ({ data }) => {
  const { activeTheme } = useSelector((state) => state.theme);
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: data.item.profilPhoto }} />
        <Text style={[styles.name, { color: activeTheme.textColor }]}>
          {data.item.userName}
        </Text>
      </View>
    </View>
  );
};

export default Stories;
