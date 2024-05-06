import React from "react"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './home/HomeScreen'

const Tab = createBottomTabNavigator()

const AppNavigation = () => (
    <Tab.Navigator
        screenOptions={() => ({
            tabBarStyle: {
                backgroundColor: "grey",
            
            },
            tabBarHideOnKeyboard: true,
        })}
    >
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                title: "Home LOL",
                // More stuff here
            }}
        />



    </Tab.Navigator>        


)


export default AppNavigation