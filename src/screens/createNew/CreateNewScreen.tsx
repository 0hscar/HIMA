import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import MultiSelectComponent from "../../components/MultiSelectComponent";
import { items } from "../../propertyInfoSelection";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CreateProperty from "../../features/CreateProperty"
import { ReadItem } from "../../features/storage"

// const selectedItems = (): Promise<void | Element | null> => {
//     return (
//         AsyncStorage.getItem("tempSelected").then(
//             value => {
//                 if (value) {
//                     return (
//                         <View>
//                             <Text>POW</Text>
//                         </View>
//                     )
//                 } else {
//                     return null
//                 }
//             }
//         ).catch(error => {
//             console.log("Error at selectedItems: ", error)
//         })
//     )
// }

const TestComp = () => {
    
    // Move to CreateProperty.tsx
    const [selectedItems, setSelctedItems] = useState()

    // FIx this stuff so it doesnt infinite loop
    
    console.log(selectedItems)
    return (
        <View>
            <Text></Text>
        </View>
    )
    
}

// Main screen
const CreateNewScreen: React.FC = () => {

    const [selectedItems, setSelctedItems] = useState<object>()


    useEffect(() => {

        const setItems = () => {
            ReadItem("tempSelected").then(res => {
                if (res) {
                    const selected = JSON.parse(res) // Reminder: res = string, JSON.parse(res) = object
                    console.log("selcted in if", typeof(selected))
                    if (selected != selectedItems) {
                        console.log("SelectedItems changed")
                        setSelctedItems(selected)
                    }
    
                } else {
                    console.log("Invalid response from ReadItem")
                }
            }).catch(error => {
                console.log("Failed to readItem", error)
            })
        }
    
        setItems()

    }, [selectedItems])
    
    // setSelctedItems([401, 202, 301])s


    // Move to CreateProperty.tsx
//     // Works but overloads it, constant refresh
//     ReadItem("tempSelected").then(res => {
//         if (res) {
//             const selected = JSON.parse(res)
//             console.log("selcted in if", selected)
//             setSelctedItems(selected)
//         } else {
//             console.log("Invalid response from ReadItem")
//         }
//     }).catch(error => {
//         console.log("Failed to readItem", error)
//     })

// console.log(selectedItems)

    // console.log(selectedItems)
    // console.log("Test1 log", test1(AsyncStorage.getItem("tempSelected")))
    // console.log("straight console asyncstor", AsyncStorage.getItem("tempSelected"))
    // console.log("Straight from AsyncStorage", typeof (AsyncStorage.getItem("tempSelected")))
    // console.log(test())
    // console.log(" Via Test functiuon", test(AsyncStorage.getItem("tempSelected")))

    // const test = selectedItems

    return (
        <View>
            {/* TODO: Create components */}
            <Text style={textStyles.titleText}>Create new property</Text>
            <Text style={textStyles.smallTitleText}>Select information</Text>
            <MultiSelectComponent items={items}></MultiSelectComponent>

            {/* TODO: FIX THIS SHIT PERKELE  */}
            <CreateProperty items={selectedItems}></CreateProperty>

        </View>
    )
}

export default CreateNewScreen