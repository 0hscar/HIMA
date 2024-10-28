import { StyleSheet } from "react-native";

// TODO: Create solid styling for everything
export const textStyles = StyleSheet.create({
    baseText: {
        fontFamily: "sans-serif"
    },
    titleText: {
        fontFamily: "sans-serif",
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 10
    },
    smallTitleText: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10
    },
    smallTitleTextCenter: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center"
    },
    propertyText: {
        fontFamily: "sans-serif",
        color: "black",
        marginTop: 10,

    },
    multiSelectFooterText: {
        padding: 12,
        marginTop: 12,
    }

})

export const buttonStyles = StyleSheet.create({
    saveButton: {
        backgroundColor: "#2e7eb8",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        shadowRadius: 5,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        marginTop: 5,

    },
    buttonText: {
        color: "white",
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 5,
    }
})

export const divStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 24
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
    }, 
    multiSelectHeader: {
        height: 24,
        backgroundColor: "lightgray",



    },
    
})

export const NavStyles = StyleSheet.create({
    navbar: {
        backgroundColor: "red"
    }
})