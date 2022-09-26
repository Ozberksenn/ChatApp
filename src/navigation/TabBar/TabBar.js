import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "../../screens/Main/Chats/Chats";
import Contacts from "../../screens/Main/Contacts/Contacts";
import Settings from "../../screens/Main/Settings/Settings";
import CustomTabBar from "../../components/CustomTabBar/CustomTabBar";
const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabBar;
