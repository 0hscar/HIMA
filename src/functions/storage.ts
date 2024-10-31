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
        return result != null ? JSON.parse(result) : null //Parse it Object
    } catch (error) {
        console.log("Get item error", error)
    }
}

export const getAllHouses = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()

        if (keys.length === 0){
            console.log("No keys found")
            return {}
        }

        const keyPairs = await AsyncStorage.multiGet(keys)

        const houses: { [key: string]: string | null } = {}
        keyPairs.forEach(([key, value]) => {
            houses[key] = value
        })

        console.log("All storage houses", houses)
        return houses
    } catch (error) {
        console.error("Error fetching all houses", error)
        return {}
    }
}

export const removeAll = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        if (keys.length === 0){
            console.log("No keys found")
            return {}
        }
        AsyncStorage.multiRemove(keys)


    } catch(error) {
        console.error("Failed to remove all", error)
    }
}