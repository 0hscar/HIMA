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
    {adress: "String1"},
    {adress: "String2"},
    {adress: "String3"}
]

const PropertyList = () => {
    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Text style={textStyles.baseText}>{item.adress}</Text>} 
            />

        </View>
    )
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <View>
            <Text style={textStyles.titleText}>Properties</Text>
            <PropertyList></PropertyList>

        </View>
    )

}


export default HomeScreenq