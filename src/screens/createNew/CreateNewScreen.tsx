import React, { useState } from "react";
import { Text, View } from "react-native";
import { useAsyncStorage } from "@react-native-async-storage/async-storage"
import { textStyles } from "../../styles";
import MultiSelectComponent from "../../components/MultiSelectComponent";
import { selectableData } from "../../propertyInfoSelection";

const CreateNewScreen: React.FC = () => {
    const [createData, setCreateData] = useState({})

    return(
        <View>
            {/* TODO: Create components */}
            <Text style={textStyles.titleText}>Create new property</Text>
            <Text style={textStyles.smallTitleText}>Basic information</Text>
            <MultiSelectComponent data={selectableData.basicInformation}></MultiSelectComponent> 

            <Text style={textStyles.smallTitleText}>Household appliances</Text>
            <MultiSelectComponent data={selectableData.houseHoldAppliances}></MultiSelectComponent> 
            
            <Text style={textStyles.smallTitleText}>Service</Text>
            <MultiSelectComponent data={selectableData.serviceNeeds}></MultiSelectComponent>  
            {/* Might be redundant/changed */}

            <Text style={textStyles.smallTitleText}>Ongoing costs</Text>
            <MultiSelectComponent data={selectableData.onGoingCosts}></MultiSelectComponent> 
            
            {/* Created Components */}



        </View>
    )
}

export default CreateNewScreen