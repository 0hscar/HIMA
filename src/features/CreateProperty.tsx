import React, { useEffect, useState } from "react"
import { Alert, Button, Pressable, Text, TextInput, View } from "react-native"
import * as Storage from "../features/storage"
import { HouseInfo } from "../propertyInfoSelection";
import { buttonStyles, divStyles, dropdownStyles, textStyles } from "../styles";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import Icon from "react-native-vector-icons/MaterialIcons";

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
    }, [multiSelectItems])


    // Handlers for Textinputs
    const handleInputChange = (text: string, id: number) => {
        const updatedItems = toSaveItems.map(item =>
            item.id === id ? { ...item, value: text } : item
        )
        setToSaveItems(updatedItems)
    }
    const handleSave = async (propertyName: string) => {
        try {
            const dataToSave = {
                [propertyName]: toSaveItems.reduce((acc, item) => { // Set custom "userName" for user
                    acc[item.name] = item.value
                    return acc
                }, {} as Record<string, string>)
            }
            await Storage.setItem("TestHome2", JSON.stringify(dataToSave))
        } catch (error) {
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

        function setSavedSelcted() {
            setMultiSelectItems(selected)
        }

        return (
            <SectionedMultiSelect
                items={HouseInfo}
                IconRenderer={Icon} // TODO FIX
                uniqueKey="name" //From Item select what to save in the array for storage, name -> "Freezer"
                modalAnimationType="slide"
                colors={{ primary: '#fa883c' }}
                hideSearch={true}
                readOnlyHeadings={true}
                subKey="items"
                close-on-select="false"
                headerComponent={<MultiSelectHeader />}
                footerComponent={<MultiSelectFooter itemCount={selected?.length} />}
                onSelectedItemsChange={setSelected}
                selectedItems={selected}
                onConfirm={setSavedSelcted}
                styles={{ // move to style.ts
                    selectToggle: {
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 23,
                        marginBottom: 20,
                    },
                    selectToggleText: {
                        textAlign: "center"
                    },
                    subItemText: {
                        textAlign: "center",
                        // justifyContent: "center"
                    },
                    selectedSubItemText: {
                        color: "#fa883c"
                    },
                    itemText: {
                        textAlign: "center",
                        paddingLeft: 40

                    },
                    confirmText: {
                        backgroundColor: "#fa883c"
                    },


                }}
            // TODO: Fix confirm button styling

            ></SectionedMultiSelect>
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
                    if (address) {
                        if (!address.value || address.value.trim() === "") {
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

                }}
            >
                <Text style={buttonStyles.buttonText}>Save</Text>
            </Pressable>
        </View>
    )
}

export default CreateProperty