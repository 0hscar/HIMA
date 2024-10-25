import React from "react"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './home/HomeScreen'
import CreateNewScreen from "./createNew/CreateNewScreen"

const Tab = createBottomTabNavigator()

const AppNavigation = () => (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarActiveTintColor: 'red',      // Active tab text color
            tabBarInactiveTintColor: 'white',      // Inactive tab text color
            tabBarStyle: {                        // Customize tab bar container
                backgroundColor: '#f8f8f8',         // Background color of the tab bar
                paddingBottom: 1,                   // Padding at the bottom of the tab bar
                borderTopWidth: 1,                  // Add a border at the top of the tab bar
                borderTopColor: '#ccc',             // Color of the border
                height: 60,                         // Height of the tab bar
            },
            tabBarLabelStyle: {                   // Customize label style
                fontSize: 14,
                fontWeight: 'bold',
            },
            tabBarIconStyle: {                    // Customize icon style
                width: 24,
                height: 24,
            },
            tabBarBadgeStyle: {                   // Style for badge (number notifications)
                backgroundColor: 'red',
                color: 'white',
                fontSize: 12,
            },
            tabBarItemStyle: {                    // Customize each tab item container
                margin: 5,
                borderRadius: 10,
                backgroundColor: '#fa883c',
            },
            headerShown: false,                   // Disable the header for all tabs
            tabBarShowLabel: true,                // Show or hide the tab labels
            tabBarShowIcon: false,                 // Show or hide the icons
            tabBarLabelPosition: 'below-icon',    // Label position: 'beside-icon' or 'below-icon'
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
            name="placeholder"
            component={HomeScreen} //to change
            options={{
                title: "placeholder",

            }}
        />

        <Tab.Screen
            name="Create"
            component={CreateNewScreen}
            options={{
                title: "Create new"
            }}
        />


    </Tab.Navigator>


)


export default AppNavigation