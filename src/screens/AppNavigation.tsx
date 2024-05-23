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
            tabBarItemStyle:{
                backgroundColor: "lightblue", //placeholders
                color: "black",
            },
            tabBarHideOnKeyboard: true,
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
            name="create"
            component={HomeScreen} //To change
            options={{
                title: "Create new"
            }}
        />


    </Tab.Navigator>        


)


export default AppNavigation