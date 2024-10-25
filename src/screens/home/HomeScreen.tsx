import React, { useEffect, useState } from "react"
import { Text, View, FlatList } from "react-native"
import { StackNavigationProp } from "@react-navigation/stack";
import { HomeScreenProp } from './types'
import { textStyles } from "../../styles";
import * as Storage from "../../features/storage"

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

const HomeScreen: React.FC<HomeScreenProps> = ({  }) => {
    const [loadedHouses, setLoadedHouses] = useState<string[]>()

    useEffect(() => {
        loadHouses()
    }, [])

    const loadHouses = async () => {
        try {
            // Currently testing form
            const storedHouses = await Storage.getItem("TestHome2")
            if (storedHouses !== null) {
                setLoadedHouses(storedHouses)
            }
        } catch (error) {
            console.log("Failed to load Stored Houses", error)
        }
    }

    console.log(loadedHouses)

    return (
        <View>
            <Text style={textStyles.titleText}>Properties</Text>
            {/* <PropertyList/> */}
            <Text>{JSON.stringify(loadedHouses)}</Text>
            {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
        </View>
    )

}


export default HomeScreen