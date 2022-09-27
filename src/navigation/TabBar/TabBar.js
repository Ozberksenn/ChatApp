import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "../../screens/Main/Chats/Chats";
import Contacts from "../../screens/Main/Contacts/Contacts";
import Settings from "../../screens/Main/Settings/Settings";
import CustomTabBar from "../../components/CustomTabBar/CustomTabBar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/UserSlice";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getLocal();
  }, []);

  const getLocal = async () => {
    // local datadan verileri çektik ve userSlice'a yazdırdık. Çünkü kullanıcı otomatik giriş yaptığında verilerin reduxta tutulması gerekiyor.
    const value = await AsyncStorage.getItem("user");
    const local = value ? JSON.parse(value) : null;
    dispatch(signUp(local));
  };
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
