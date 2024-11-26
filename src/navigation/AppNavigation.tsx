import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CreateNewScreen from "../screens/createNew/CreateNewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HouseDetailsScreen from "../screens/houseDetails/HouseDetailsScreen";
import { RootStackParamList, TabParamList } from "../types/navigation";
import { NavStyles, futureColors, tabStyles } from "styles";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: futureColors.accent,
        tabBarInactiveTintColor: futureColors.secondary,
        tabBarStyle: NavStyles.navbar,
        tabBarLabelStyle: NavStyles.navbarText,
        tabBarIconStyle: {
          width: 24,
          height: 24,
        },
        tabBarBadgeStyle: {
          backgroundColor: futureColors.accent,
          color: futureColors.error,
          fontSize: 12,
        },
        tabBarItemStyle: {
          margin: 5,
          borderWidth: 2,
          borderRadius: 10,
          borderColor: `${futureColors.highlight}40`, // 40 is opacity
          // borderTopColor: futureColors.primary,
          // borderLeftColor: futureColors.highlight,
          // borderRightColor: futureColors.shadow,
          // borderBottomColor: futureColors.shadow,
          // backgroundColor: futureColors.primary,
          // Remove borderRadius for more retro look
        },
        headerShown: false,
        headerStyle: NavStyles.navbar,
        headerTitleStyle: NavStyles.navbarText,
        headerTintColor: futureColors.primary,
        tabBarShowLabel: true,
        tabBarShowIcon: false,
        tabBarLabelPosition: "below-icon",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          // More stuff here
        }}
      />
      <Tab.Screen
        name="Create"
        component={CreateNewScreen}
        options={{
          title: "Create new",
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerTitleStyle: NavStyles.navTitle,
    }}
  >
    <Stack.Screen name="HIMA" component={TabNavigator} />
    <Stack.Screen name="HouseInformation" component={HouseDetailsScreen} />
  </Stack.Navigator>
);
export default AppNavigation;
