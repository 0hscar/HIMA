import React from "react"
import { Text, View } from "react-native"
interface ItemProps {
    items: Object | undefined
}
// TODO: create the creator with selected valeus
const CreateProperty: React.FC<ItemProps> = ({ items }) => {
    
    
    return (
        
        <View>
            <Text>POW{JSON.stringify(items)}</Text>
        </View>
    )
}

export default CreateProperty