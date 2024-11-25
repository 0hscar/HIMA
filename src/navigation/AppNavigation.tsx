import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home/HomeScreen";
import CreateNewScreen from "../screens/createNew/CreateNewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HouseDetailsScreen from "../screens/houseDetails/HouseDetailsScreen";
import { RootStackParamList, TabParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "red", // Active tab text color
        tabBarInactiveTintColor: "white", // Inactive tab text color
        tabBarStyle: {
          // Customize tab bar container
          backgroundColor: "#f8f8f8", // Background color of the tab bar
          paddingBottom: 1, // Padding at the bottom of the tab bar
          borderTopWidth: 1, // Add a border at the top of the tab bar
          borderTopColor: "#ccc", // Color of the border
          height: 60, // Height of the tab bar
        },
        tabBarLabelStyle: {
          // Customize label style
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarIconStyle: {
          // Customize icon style
          width: 24,
          height: 24,
        },
        tabBarBadgeStyle: {
          // Style for badge (number notifications)
          backgroundColor: "red",
          color: "white",
          fontSize: 12,
        },
        tabBarItemStyle: {
          // Customize each tab item container
          margin: 5,
          borderRadius: 10,
          backgroundColor: "#2e7eb8",
        },
        headerShown: false, // Disable the header for all tabs
        tabBarShowLabel: true, // Show or hide the tab labels
        tabBarShowIcon: false, // Show or hide the icons
        tabBarLabelPosition: "below-icon", // Label position: 'beside-icon' or 'below-icon'
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
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="HIMA" component={TabNavigator} />
    <Stack.Screen name="HouseInformation" component={HouseDetailsScreen} />
  </Stack.Navigator>
);
export default AppNavigation;
