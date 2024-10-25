import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import CreateProperty from "../../features/CreateProperty"





// Main screen
const CreateNewScreen: React.FC = () => {

    return (
        <View>
            {/* TODO: Create components */}
            <Text style={textStyles.titleText}>Create new property</Text>
            <Text style={textStyles.smallTitleText}>Select information</Text>
            {/* <MultiSelectComponent items={HouseInfo}></MultiSelectComponent> */}

            {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}

            <CreateProperty></CreateProperty>
            
            {/* <Text>{testItems}</Text>  */}
            {/* This works, show it at home screen or something to see owned property */} 

        
        </View>
    )
}

export default CreateNewScreen