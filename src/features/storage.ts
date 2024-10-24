import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const setItem = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
        Alert.alert("Success", "Saved successfully")
        console.log("Item Set")
    } catch (error) {
        console.log("Set item error", error)
    }
}

export const getItem = async (key: any) => {
    try {
        const result = await AsyncStorage.getItem(key)
        return result != null ? JSON.parse(result) : null //Parse it array
    } catch (error) {
        console.log("Get item error", error)
    }
}