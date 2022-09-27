import { NavigationContainer } from "@react-navigation/native";
import Content from "./src/navigation/Content/Content";
import { Provider } from "react-redux";
import store from "./src/redux/Store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Content />
      </NavigationContainer>
    </Provider>
  );
}
