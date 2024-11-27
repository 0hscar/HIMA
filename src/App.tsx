import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import AppNavigation from "./navigation/AppNavigation";
import { futureColors } from "styles";
// import { Text, View } from 'react-native';
// import { divStyles } from './styles';

// Location example imports

const CustomTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: futureColors.primary,
    text: futureColors.text,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={CustomTheme}>
      <AppNavigation />

      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
