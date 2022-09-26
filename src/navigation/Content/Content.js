import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../Auth/Auth";
import TabBar from "../TabBar/TabBar";
const Stack = createNativeStackNavigator();

const Content = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabBar"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="TabBar" component={TabBar} />
    </Stack.Navigator>
  );
};

export default Content;
