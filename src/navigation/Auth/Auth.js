import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../screens/Login/SignIn/SignIn";
import SignUp from "../../screens/Login/SignUp/SignUp";
const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default Auth;
