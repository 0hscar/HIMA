import React, { useEffect, useState } from "react"
import { Alert, ScrollView, Platform, Pressable, Text, TextInput, View } from "react-native"
import * as Storage from "../functions/storage"
import { HouseInfo } from "../houseInfoSelection";
import { buttonStyles, divStyles, dropdownStyles, textStyles, SectionedMultiSelectStyle } from "../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { EventEmitter } from "events";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

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
const eventEmitter = new EventEmitter()
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
    }, [multiSelectItems])


    // Handlers for Textinputs
    const handleInputChange = (text: string, id: number) => {
        const updatedItems = toSaveItems.map(item =>
            item.id === id ? { ...item, value: text } : item
        )
        setToSaveItems(updatedItems)
    }
    const handleSave = async (propertyName: string) => {

        if (Platform.OS === 'web') {
            try {
                const dataToSave = {
                    devName: toSaveItems.reduce((acc, item) => { // Set custom "userName" for user
                        acc[item.name] = item.value
                        return acc
                    }, {} as Record<string, string>)
                }
                await Storage.setItem(propertyName, JSON.stringify(dataToSave)) // not currently working
                console.log("Web Saved")
                eventEmitter.emit("houseAdded")
                setMultiSelectItems([])

            } catch (error) {
                console.log("Error to save data", error)
            }
        } else {
            try {
                const dataToSave = {
                    [propertyName]: toSaveItems.reduce((acc, item) => { // Set custom "userName" for user
                        acc[item.name] = item.value
                        return acc
                    }, {} as Record<string, string>)
                }
                await Storage.setItem(propertyName, JSON.stringify(dataToSave))
                eventEmitter.emit("houseAdded")
                setMultiSelectItems([])
            } catch (error) {
                console.log("Error to save data", error)
            }
        }
    }

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

        function setSavedSelcted() {
            setMultiSelectItems(selected)
        }


        return (
            <ScrollView>
                <SectionedMultiSelect
                    items={HouseInfo}
                    IconRenderer={Icon} // TODO FIX
                    uniqueKey="name" //From Item select what to save in the array for storage, name -> "Freezer"
                    modalAnimationType="slide"
                    colors={{ primary: '#fa883c' }}
                    hideSearch={false}
                    readOnlyHeadings={true}
                    subKey="items"
                    selectText="Select information"
                    close-on-select="false"
                    headerComponent={<MultiSelectHeader />}
                    footerComponent={<MultiSelectFooter itemCount={selected?.length} />}
                    onSelectedItemsChange={setSelected}
                    selectedItems={selected}
                    onConfirm={setSavedSelcted}
                    styles={SectionedMultiSelectStyle}
                // TODO: Fix confirm button styling: EDIT Works on phone 

                ></SectionedMultiSelect>
            </ScrollView>

        )
    }

    return (
        <View style={divStyles.container}>
            <MultiSelectComponent></MultiSelectComponent>
            {/* FIX STYLING */}
            {toSaveItems.map((item) => (
                <View key={item.id}>

                    <Text style={textStyles.smallTitleText}>{item.name}</Text>
                    <TextInput
                        // Set style, move to style.ts
                        style={{
                            height: 35,
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderRadius: 5,

                        }}
                        value={item.value}
                        placeholder="Model / Name / "
                        onChangeText={(text) => handleInputChange(text, item.id)}
                    />
                </View>
            ))}
            <Pressable
                style={buttonStyles.saveButton}
                onPress={() => {
                    Alert.alert(
                        "Test Alert",
                        "This is a simple test alert.",
                        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                    );
                }}
            >
                <Text style={buttonStyles.buttonText}>Test Alert</Text>
            </Pressable>
            <Pressable
                style={buttonStyles.saveButton}
                onPress={() => {
                    console.log("Button pressed") // error checking
                    const address = toSaveItems.find(i => i.name === "Address")
                    console.log("Address found")
                    if (!address) { // Otherwise it may be undefined
                        Alert.alert(
                            "No address field",
                            "You have to choose address",
                            [
                                {
                                    text: "OK",
                                    style: "cancel"
                                }
                            ]
                        )
                    } else {
                        if (!address.name || address.value.trim() === "") {
                            Alert.alert(
                                "Invalid Address",
                                "Address cannot be empty, please enter a valid address",
                                [
                                    {
                                        text: "OK",
                                        style: "cancel"
                                    }
                                ]
                            )
                        } else {
                            Alert.alert(
                                "Confirm Save",
                                "Do you want to save this property at ${address.value}?",
                                [
                                    {
                                        text: "Cancel",
                                        style: "cancel",
                                    },
                                    {
                                        text: "Save",
                                        onPress: () => handleSave(address.value),
                                    }
                                ]
                            )
                        }
                    }

                }

                }
            >
                <Text style={buttonStyles.buttonText}>Save</Text>
            </Pressable>
        </View >
    )
}
export { eventEmitter }
export default CreateProperty