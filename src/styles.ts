import { StyleSheet } from "react-native";

// TODO: Create solid styling for everything
export const textStyles = StyleSheet.create({
    baseText: {
        fontFamily: "Couchin"
    },
    titleText: {
        fontFamily: "Couchin",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 10
    },
    smallTitleText: {
        fontFamily: "Couchin",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    propertyText: {
        fontFamily: "Couchin",
        color: "black",
        marginTop: 10,

    }

})


export const dropdownStyles = StyleSheet.create({
    multiSelect: {
        borderColor: "gray",
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
    }
})
