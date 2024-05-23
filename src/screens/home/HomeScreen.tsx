import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenProp } from './types'
import { textStyles } from "../../styles";

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeScreenProp>
}


const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
 
    return (
        <View>
            <Text style={textStyles.titleText}>Properties</Text>
            

        </View>
    )

}




export default HomeScreen