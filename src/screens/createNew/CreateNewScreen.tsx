import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import CreateProperty from "../../features/CreateProperty"


// Main screen
const CreateNewScreen: React.FC = () => {

    return (
        <View>
            {/* TODO: Create components */}
            {/* Center Titletext */}
            <Text style={textStyles.titleText}>Create new property</Text> 
            <Text style={textStyles.smallTitleTextCenter}>Select information</Text>

            {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}
            <CreateProperty></CreateProperty>
        </View>
    )
}

export default CreateNewScreen