import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../Auth/Auth";
import TabBar from "../TabBar/TabBar";
import UpdateAccount from "../../screens/Main/Settings/UpdateAccount/UpdateAccount";
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
    </Stack.Navigator>
  );
};

export default Content;
