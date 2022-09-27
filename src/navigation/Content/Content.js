import React, { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../Auth/Auth";
import TabBar from "../TabBar/TabBar";
import UpdateAccount from "../../screens/Main/Settings/UpdateAccount/UpdateAccount";
import ChatDetail from "../../screens/Main/Chats/ChatDetail/ChatDetail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const Content = () => {
  const { userInfo } = useSelector((state) => state.user);
  const [localData, setLocalData] = useState();

  useEffect(() => {
    getLocal();
  }, [userInfo]);

  const getLocal = async () => {
    const value = await AsyncStorage.getItem("user");
    const local = value ? JSON.parse(value) : null;
    console.log("local Data", local);
    setLocalData(local);
  };

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!localData ? (
        <>
          <Stack.Screen name="Auth" component={Auth} />
        </>
      ) : (
        <>
          <Stack.Screen name="TabBar" component={TabBar} />
          <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
          <Stack.Screen name="ChatDetail" component={ChatDetail} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Content;
