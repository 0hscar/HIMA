// // style.ts
import { StyleSheet } from "react-native";

// export const textStyles = StyleSheet.create({
//     titleText: {
//         fontFamily: "sans-serif",
//         fontSize: 40,
//         fontWeight: "bold",
//     },
//     smallTitleText: {
//         fontFamily: "sans-serfi",
//         fontSize: 20,
//         fontWeight: "bold",
//     },
// })



// TODO: Create solid styling for everything
export const textStyles = StyleSheet.create({
    baseText: {
        fontFamily: "sans-serif"
    },
    titleText: {
        fontFamily: "sans-serif",
        fontSize: 40,
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
    houseHeaderText: {
        fontSize: 20,
        fontFamily: "sans-serif",
        fontWeight: "bold",

    },
    houseDetailsText: {
        fontFamily: "sans-serif",
        marginRight: 5,
        marginBottom: 15,

    },
    propertyText: {
        fontFamily: "sans-serif",
        color: "black",
        marginTop: 10,

    },
    multiSelectFooterText: {
        padding: 12,
        marginTop: 12,
    },
    houseTitle: {
        fontFamily: "sans-serif",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        textAlign: "center",
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
        // flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        padding: 24
    }
})


export const dropdownStyles = StyleSheet.create({
    multiSelect: {
        borderColor: "red",
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

export const SectionedMultiSelectStyle = StyleSheet.create({
    selectToggle: {
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 23,
        marginBottom: 20,
    },
    selectToggleText: {
        textAlign: "center",
        fontSize: 30,
        
    },
    subItemText: {
        textAlign: "center",
        fontSize: 20,
    },
    selectedSubItemText: {
        color: "#fa883c"
    },
    itemText: {
        textAlign: "center",
        paddingLeft: 40,
        fontSize: 30

    },
    confirmText: {
        backgroundColor: "#fa883c"
    },
    
})

export const NavStyles = StyleSheet.create({
    navbar: {
        backgroundColor: "red"
    }
})