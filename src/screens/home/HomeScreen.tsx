import React from "react"
import { Text, View } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenProp } from './types'
import { textStyles } from "../../styles";
import ViewHouses from "../../features/ViewHouses";

// interface HomeScreenProps {
//     navigation: StackNavigationProp<HomeScreenProp>
// }

const HomeScreen: React.FC = () => {
    
    return (
        <View>
            <Text style={textStyles.titleText}>Properties</Text>
            {/* <PropertyList/> */}
            {/* Needs to be updated without reloading the app */}
            <ViewHouses></ViewHouses>
            {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
            {/* TODO: Create in features the show proporties with limited info until clicked open */}
        </View>
    )

}


export default HomeScreen