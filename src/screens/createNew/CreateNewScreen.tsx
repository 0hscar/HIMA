import React, { useState } from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import MultiSelectComponent from "../../components/MultiSelectComponent";
import { items } from "../../propertyInfoSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getSelected = async(): Promise<string | undefined> => {
    try {
        const value = await AsyncStorage.getItem("tempSelected")
        if (value !== null) {
            console.log(typeof(value))
            return value
        } else {
            console.log("No value")
        }
    }
    catch (error) {

    }
}

const test = async() => {
    return await AsyncStorage.getItem("tempSelected")
}

const CreateNewScreen: React.FC = () => {

    // To be removed
    // console.log(AsyncStorage.getItem("test"))
    // console.log(AsyncStorage.getItem("tempSelected"))

    // AsyncStorage.clear()
    const tempSelected = getSelected
    console.log(test())
    console.log(tempSelected())

    const testVar = "atiogjgi"

    return (
        <View>
            {/* TODO: Create components */}
            <Text style={textStyles.titleText}>Create new property</Text>
            <Text style={textStyles.smallTitleText}>Select information</Text>
            <MultiSelectComponent items={items}></MultiSelectComponent>
 
            {/* TODO: FIX THIS SHIT PERKELE  */}
            {/* {tempSelected == String &&
                <Text>TJoNG</Text>
            } */}


        </View>
    )
}

export default CreateNewScreen