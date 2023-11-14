import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from 'react-redux';
import ScreenMain from "./src/views/ScreenMain";
import store from "./src/redux/store";


export default function App() {
  return (
    <Provider store={store}>
      <ScreenMain />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
