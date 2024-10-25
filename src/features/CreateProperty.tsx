import React, { useEffect, useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import * as Storage from "../features/storage"
import { HouseInfo, Item } from "../propertyInfoSelection";
import { dropdownStyles, textStyles } from "../styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";


// interface DataProps {
//     items: Item[]
// }
interface ItemCount {
    itemCount: number | undefined
}
interface ItemProps {
    passedItems?: string[]
}

interface ToSaveInfo {
    id: number
    name: string
    value: string
}

// TODO: create the creator with selected valeus
const CreateProperty: React.FC<ItemProps> = () => {
    const [toSaveItems, setToSaveItems] = useState<ToSaveInfo[]>([])
    const [multiSelectItems, setMultiSelectItems] = useState<string[]>([])

    useEffect(() => {
        const generateItems = multiSelectItems.map((item, index) => ({
            id: index + 1,
            name: item,
            value: ""
        }))
        setToSaveItems(generateItems)
        // loadSelectedItems()    
    }, [multiSelectItems])
    

    // Handlers for Textinputs
    const handleInputChange = (text: string, id: number) => {
        const updatedItems = toSaveItems.map(item =>
            item.id === id ? { ...item, value: text } : item
        )
        setToSaveItems(updatedItems)
    }
    const handleSave = async () => {
        try {
            const dataToSave = {
                userName: toSaveItems.reduce((acc, item) => {
                    acc[item.name] = item.value
                    return acc
                }, {} as Record<string, string>)
            }
            await Storage.setItem("TestHome2", JSON.stringify(dataToSave))
        } catch (error){
            console.log("Error to save data", error)
        }
    }
    // Handlers for Textinputs

    // Component in the same file to easily uppdate selected items and create the property
    const MultiSelectComponent: React.FC = () => {
        const [selected, setSelected] = useState<string[]>([])
        
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
            setMultiSelectItems(selected)
        }
    
        return (
            <SectionedMultiSelect
                items={HouseInfo}
                IconRenderer={Icon} // TODO FIX
                // style={[dropdownStyles.multiSelect]}
                uniqueKey="name" //From Item select what to save in the array for storage, name -> "Freezer"
                modalAnimationType="slide"
                colors={{ primary: '#c98422' }}
                hideSearch={true}
                readOnlyHeadings={true}
                subKey="items"
                close-on-select="false"
                headerComponent={<MultiSelectHeader />}
                footerComponent={<MultiSelectFooter itemCount={selected?.length} />}
                onSelectedItemsChange={setSelected}
                selectedItems={selected}
                onConfirm={setSavedSelcted}
                // TODO: Fix confirm button styling
    
            ></SectionedMultiSelect>
        )
    }


    return (
        <View>
            <MultiSelectComponent></MultiSelectComponent>
            {/* FIX STYLING */}
            {toSaveItems.map((item) => (
                <View key={item.id}>
                    <Text>{item.name}</Text>
                    <TextInput
                        // Set style
                        value={item.value}
                        onChangeText={(text) => handleInputChange(text, item.id)}
                    />
                </View>
            ))}
            <Button title="Save" onPress={handleSave}/>
        </View>
    )
}

export default CreateProperty