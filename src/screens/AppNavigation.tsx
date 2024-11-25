import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home/HomeScreen";
import CreateNewScreen from "./createNew/CreateNewScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HouseDetailsScreen from "./houseDetails/HouseDetailsScreen";

export type RootStackParamList = {
  MainTabs: undefined;
  HouseDetails: { houseName: string; houseData: any } | undefined; //TODO: Define proper data type
};

export type TabParamList = {
  Home: undefined;
  Create: undefined;
};

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
        headerShown: true, // Disable the header for all tabs
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
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainTabs" component={TabNavigator} />
    <Stack.Screen name="HouseDetails" component={HouseDetailsScreen} />
  </Stack.Navigator>

  // <Tab.Navigator
  //   screenOptions={() => ({
  //     tabBarActiveTintColor: "red", // Active tab text color
  //     tabBarInactiveTintColor: "white", // Inactive tab text color
  //     tabBarStyle: {
  //       // Customize tab bar container
  //       backgroundColor: "#f8f8f8", // Background color of the tab bar
  //       paddingBottom: 1, // Padding at the bottom of the tab bar
  //       borderTopWidth: 1, // Add a border at the top of the tab bar
  //       borderTopColor: "#ccc", // Color of the border
  //       height: 60, // Height of the tab bar
  //     },
  //     tabBarLabelStyle: {
  //       // Customize label style
  //       fontSize: 14,
  //       fontWeight: "bold",
  //     },
  //     tabBarIconStyle: {
  //       // Customize icon style
  //       width: 24,
  //       height: 24,
  //     },
  //     tabBarBadgeStyle: {
  //       // Style for badge (number notifications)
  //       backgroundColor: "red",
  //       color: "white",
  //       fontSize: 12,
  //     },
  //     tabBarItemStyle: {
  //       // Customize each tab item container
  //       margin: 5,
  //       borderRadius: 10,
  //       backgroundColor: "#2e7eb8",
  //     },
  //     headerShown: true, // Disable the header for all tabs
  //     tabBarShowLabel: true, // Show or hide the tab labels
  //     tabBarShowIcon: false, // Show or hide the icons
  //     tabBarLabelPosition: "below-icon", // Label position: 'beside-icon' or 'below-icon'
  //   })}
  // >
  //   <Tab.Screen
  //     name="Home"
  //     component={HomeScreen}
  //     options={{
  //       title: "Home",
  //       // More stuff here
  //     }}
  //   />
  //   <Tab.Screen
  //     name="Create"
  //     component={CreateNewScreen}
  //     options={{
  //       title: "Create new",
  //     }}
  //   />
  // </Tab.Navigator>
);

export default AppNavigation;

// // EXAMPLE FOR TEXT
// // AppNavigation.tsx
// import React from "react"
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import HomeScreen from "./home/HomeScreen"
// const Tab = createBottomTabNavigator()
// const AppNavigation = () => (
//     <Tab.Navigator
//         screenOptions={() => ({
//             // Inställningar för navigationsfältet
//             // Som exempel så dessa inställningar ändrar på färgen i knappen beroende på
//             // om det är den aktiva sidan.
//             tabBarActiveTintColor: 'red',
//             tabBarInactiveTintColor: 'white',
//         })}
//     >
//         <Tab.Screen
//             // Inställningar för specifika klickbara “knappen”, t.ex. till vilken sida
//             // den skall navigera till
//             name="Home"// Vad det står på knappen
//             component={HomeScreen} // Denna knapp tar en till hem skärmen
//         />
//         <Tab.Screen
//         // Samma som ovan
//             name="Home2"
//             component={HomeScreen} // Samma så att den inte skall visa errors för exemplet
//         />
//     </Tab.Navigator>
// )
// export default AppNavigation
