import React from "react"
import { Text, View, FlatList } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenProp } from './types'
import { textStyles } from "../../styles";

interface HomeScreenProps {
    navigation: StackNavigationProp<HomeScreenProp>
}

// Dummy data
const data = [
    {adress: "1st Street"},
    {adress: "2nd Streed"},
    {adress: "3rd Street"}
]

// Example for screenshot
interface MyProps {
    message: string
}

const MyMessageComponent: React.FC<MyProps> = ({ message }) => {
    return (
        <View>
            <Text>{message}</Text>
        </View>
    )
}



const PropertyList = () => {
    return (
        <View>
            <FlatList
                data={data}
                style={{
                    backgroundColor: "darkgrey"
                }}
                renderItem={({item}) => <Text style={textStyles.propertyText}>{item.adress}</Text>} 
            />
        </View>
    )
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text style={textStyles.titleText}>Properties</Text>
            <PropertyList/>
            {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
        </View>
    )

}


export default HomeScreen