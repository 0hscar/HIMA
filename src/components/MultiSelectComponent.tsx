import React, { useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { divStyles, dropdownStyles, textStyles } from "../styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Item } from "../propertyInfoSelection"

// dummy data

// interface DataProps {
//     // data: { label: string, value: string}[]
//     data: [ {name: string, id: number, items: [{name: string, id: number}]} ]
// }

interface DataProps {
    items: Item[]
}

interface ItemCount {
    itemCount: number | undefined
}


const MultiSelectComponent: React.FC<DataProps> = ({items}) => {
    const [selected, setSelected] = useState<Item[]>()
    const [isFocus, setIsFocus] = useState(false)
    console.log(selected) // To be removed




    const MultiSelectHeader = () => {
        return (
            <View style={dropdownStyles.multiSelectHeader}></View>
        )
    }
    const MultiSelectFooter: React.FC<ItemCount> = ({itemCount}) => {
        return (
            <View>
                <Text style={textStyles.multiSelectFooterText}>{itemCount} Item(s) selected</Text>
            </View>
        )
    }





    return (
        <View style={divStyles.container}>
            <View>
                <SectionedMultiSelect
                items={items}
                IconRenderer={Icon} // TODO FIX
                // style={[dropdownStyles.multiSelect]}
                uniqueKey="id"
                modalAnimationType="slide"
                colors={{primary: '#c98422'}}
                hideSearch={true}
                readOnlyHeadings={true}
                subKey="items"
                headerComponent={<MultiSelectHeader/>}
                footerComponent={<MultiSelectFooter itemCount={selected?.length}/>}
                onSelectedItemsChange={setSelected}
                selectedItems={selected}
            />

            </View>
            
            {/* <MultiSelect
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
            ></MultiSelect> */}


        </View>
    )

}


export default MultiSelectComponent