import AsyncStorage from "@react-native-async-storage/async-storage"

export const SaveItem = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
        console.log("saved")
    } catch (error) {
        console.log("Save item error", error)
    }
}

export const ReadItem = async (key: any) => {
    try {
        const result = await AsyncStorage.getItem(key)
        return result
    } catch (error) {
        console.log("Read item error", error)
    }
}