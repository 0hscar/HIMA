import React from "react"
import { Text, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenProp } from './types'


interface HomeScreenProps {
    navigation: StackNavigationProp<HomeScreenProp>
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
 
    return (
        <View>
            <Text>Home screen</Text>

        </View>
    )

}

export default HomeScreen