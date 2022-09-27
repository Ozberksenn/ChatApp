import { NavigationContainer } from "@react-navigation/native";
import Content from "./src/navigation/Content/Content";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Content />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
}
