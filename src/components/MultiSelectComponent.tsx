import React, { useState } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"
import { dropdownStyles, textStyles } from "../styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { Item } from "../propertyInfoSelection"
import * as Storage from "../features/storage"

interface DataProps {
    items: Item[]
}

interface ItemCount {
    itemCount: number | undefined
}

const MultiSelectComponent: React.FC<DataProps> = ({ items }) => {
    const [selected, setSelected] = useState<Item[]>()
    const [isFocus, setIsFocus] = useState(false)


    const MultiSelectHeader = () => {
        return (
            <View style={dropdownStyles.multiSelectHeader}></View>
        )
    }
    const MultiSelectFooter: React.FC<ItemCount> = ({ itemCount }) => {
        return (
            <View>
                <Text style={textStyles.multiSelectFooterText}>{itemCount} Item(s) selected</Text>
            </View>
        )
    }

    function setSavedSelcted(){
        Storage.setItem("tempSelected", JSON.stringify(selected)) // To doable to have straight in "onConfirm"
        console.log(selected)
    }

    return (
        <SectionedMultiSelect
            items={items}
            IconRenderer={Icon} // TODO FIX
            // style={[dropdownStyles.multiSelect]}
            uniqueKey="name" //From Item select what to save in the array for storage, name -> "Freezer"
            modalAnimationType="slide"
            colors={{ primary: '#c98422' }}
            hideSearch={true}
            readOnlyHeadings={true}
            subKey="items"
            headerComponent={<MultiSelectHeader />}
            footerComponent={<MultiSelectFooter itemCount={selected?.length} />}
            onSelectedItemsChange={setSelected}
            selectedItems={selected}
            onConfirm={setSavedSelcted}
            // TODO: Fix confirm button styling

        ></SectionedMultiSelect>
    )

}


export default MultiSelectComponent