import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../Auth/Auth";
import TabBar from "../TabBar/TabBar";
import UpdateAccount from "../../screens/Main/Settings/UpdateAccount/UpdateAccount";
import ChatDetail from "../../screens/Main/Chats/ChatDetail/ChatDetail";
const Stack = createNativeStackNavigator();

const Content = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
      <Stack.Screen name="ChatDetail" component={ChatDetail} />
    </Stack.Navigator>
  );
};

export default Content;
