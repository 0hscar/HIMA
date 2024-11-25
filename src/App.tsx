import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
// import { Text, View } from 'react-native';
// import { divStyles } from './styles';

// Location example imports

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation />

      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
