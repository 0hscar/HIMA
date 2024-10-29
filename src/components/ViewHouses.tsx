import React, { useEffect, useState } from "react"
import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { buttonStyles, textStyles } from "../styles"
import * as Storage from "../functions/storage"
import { eventEmitter } from "./CreateHouse"

const ViewHouses: React.FC = () => {
    const [testHouses, setTestHouses] = useState<{ [key: string]: string | null }>({});
    const [houseDetails, setHouseDetails] = useState<any>(null);
    const [visibleHouse, setVisibleHouse] = useState<string | null>(null);
    const [editingField, setEditingField] = useState<string | null>(null);
    const [editedValue, setEditedValue] = useState<string>('');

    useEffect(() => {
        fetchHouses();

        const handleHouseAdded = () => {
            console.log("New house added! Updating view houses");
            fetchHouses();
        };

        // event listener
        eventEmitter.on("houseAdded", handleHouseAdded);

        // Listener cleanup
        return () => {
            eventEmitter.removeListener("houseAdded", handleHouseAdded);
        };
    }, []);

    const fetchHouses = async () => {
        const allHouses = await Storage.getAllHouses();
        if (allHouses !== null) {
            setTestHouses(allHouses);
        }
        console.log("All houses fetched", allHouses);
    };

    const handleHouseClick = (houseName: string) => {
        console.log("House ", houseName, "Clicked");
        // Doesnt close previous and open the newly clicked at the same time
        if (visibleHouse) {
            setVisibleHouse(null)
        } else {
            setVisibleHouse(houseName)

        }

        // Parse the JSON string to get house details
        const houseDataString = testHouses[houseName];
        if (houseDataString) {
            try {
                const parsedHouseData = JSON.parse(houseDataString);
                setHouseDetails(parsedHouseData);
            } catch (error) {
                console.error("Error parsing house data:", error);
                setHouseDetails(null);
            }
        } else {
            setHouseDetails(null);
        }
    };

    const handleEditClick = (key: string, value: string) => {
        setEditingField(key);
        setEditedValue(value);
    };

    const handleSaveEdit = (houseName: string) => {
        if (houseDetails && editingField) {
            // Update the house details with the edited value
            const updatedHouseDetails = {
                ...houseDetails[houseName],
                [editingField]: editedValue
            };

            // Save the updated details back to storage
            const updatedDataToSave = {
                [houseName]: updatedHouseDetails
            };

            Storage.setItem(houseName, JSON.stringify(updatedDataToSave));
            eventEmitter.emit("houseAdded"); // Emit event to notify others

            // Reset editing states
            setEditingField(null);
            setEditedValue('');
            setHouseDetails(updatedHouseDetails); // Update state to reflect changes
        }
    };

    return (
        <View >
            {
                Object.keys(testHouses).map((houseName) => (
                    <View key={houseName} style={{ marginBottom: 15 }}>
                        <TouchableOpacity
                            style={{
                                padding: 10,
                                backgroundColor: "#f0f0f0",
                                borderRadius: 5,
                                justifyContent: "center",
                            }}
                            onPress={() => handleHouseClick(houseName)}
                        >
                            <Text style={textStyles.houseHeaderText}>{houseName}</Text>
                        </TouchableOpacity>

                        {visibleHouse === houseName && houseDetails && (
                            <View style={{ paddingLeft: 10, marginTop: 5 }}>
                                {houseDetails[houseName] && typeof houseDetails[houseName] === 'object' ? (
                                    Object.entries(houseDetails[houseName]).map(([key, value]) => (
                                        <View key={key} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            {editingField === key ? (
                                                <>
                                                    <TextInput
                                                        value={editedValue}
                                                        onChangeText={setEditedValue}
                                                        style={{
                                                            borderWidth: 1,
                                                            borderColor: '#ccc',
                                                            padding: 5,
                                                            flex: 1,
                                                            marginRight: 5
                                                        }}
                                                    />
                                                    <Pressable
                                                        style={buttonStyles.saveButton}
                                                        onPress={() => handleSaveEdit(houseName)}
                                                    >
                                                        <Text>Save</Text>
                                                    </Pressable>
                                                </>
                                            ) : (
                                                <>
                                                    <TouchableOpacity onPress={() => handleEditClick(key, typeof value === 'string' ? value : '')}>

                                                        <Text style={textStyles.houseDetailsText}>
                                                            {key}: {typeof value === 'string' ? value : 'N/A'}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </>
                                            )}
                                        </View>
                                    ))
                                ) : (
                                    <Text>No house details available.</Text>
                                )}
                            </View>
                        )}
                    </View>
                ))
            }
        </View >
    );
};

export default ViewHouses;