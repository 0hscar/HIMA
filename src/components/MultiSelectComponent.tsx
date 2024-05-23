import React, { useState } from "react";
import { View } from "react-native";
import { MultiSelect } from "react-native-element-dropdown";

import { dropdownStyles } from "../styles";

// dummy data

interface DataProps {
    data: { label: string, value: string}[]
}


const MultiSelectComponent: React.FC<DataProps> = ({data}) => {
    const [selected, setSelected] = useState<string[]>([])
    const [isFocus, setIsFocus] = useState(false)
    console.log(selected) // To be removed
    return (
        <View>
            <MultiSelect
                style={[dropdownStyles.multiSelect, isFocus && { borderColor: "red"}]} //Fix styling etc etc
                data={data}
                search
                labelField="label"
                valueField="value"
                value={selected}
                placeholder="Select items"
                searchPlaceholder="Search..."
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setSelected(item)
                }}
            ></MultiSelect>


        </View>
    )

}


export default MultiSelectComponent