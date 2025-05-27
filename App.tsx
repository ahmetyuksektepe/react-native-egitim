import * as React from "react";
import {
  NavigationContainer,
} from "@react-navigation/native";
import BottomNavigator from "./src/navigators/BottomNavigator";
import { SafeAreaView } from "react-native";




export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
    </SafeAreaView>
  );
}
