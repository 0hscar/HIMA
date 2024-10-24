import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import MultiSelectComponent from "../../components/MultiSelectComponent";
import { HouseInfo } from "../../propertyInfoSelection";
import CreateProperty from "../../features/CreateProperty"
import * as Storage from "../../features/storage"


// Main screen
const CreateNewScreen: React.FC = () => {

    const [selectedItems, setSelctedItems] = useState<object>()
    const [testItems, setTestItems] = useState<string | undefined>()

    // Storage.getItems at Home page to view owned properties.
    // Storage.setItems at CreateProperty.tsx
    
    // Testing stuff?
    // Fetches items IDs
    useEffect(() => {
        loadItems()
    }, [])

    const loadItems = async () => {
        try {
            const storedItem = await Storage.getItem("tempSelected")
            if (storedItem !== null) {
                setTestItems(storedItem)
            }
        } catch (error) {
            console.log("Failed to load items", error)
        }
    }
    
    console.log(testItems)

    return (
        <View>
            {/* TODO: Create components */}
            <Text style={textStyles.titleText}>Create new property</Text>
            <Text style={textStyles.smallTitleText}>Select information</Text>
            <MultiSelectComponent items={HouseInfo}></MultiSelectComponent>

            {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}

            <CreateProperty items={selectedItems}></CreateProperty>
            
            <Text>{testItems}</Text> 
            {/* This works, show it at home screen or something to see owned property */} 

        
        </View>
    )
}

export default CreateNewScreen