import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { textStyles, DetailsStyles, buttonStyles } from "../../styles";
import { Pressable } from "react-native";
import ViewDetails from "../../components/ViewDetails";
import EditDetails from "../../components/EditDetails";
import * as Storage from "../../functions/storage";
import { eventEmitter } from "../../components/CreateHouse";
import { Platform } from "react-native";
import { HouseDetailsScreenProps } from "../../types/navigation";

const HouseDetailsScreen: React.FC<HouseDetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const { houseName, houseData } = route.params;
  const [isEditing, setIsEditing] = useState(false);
  const [currentHouseDetails, setCurrentHouseDetails] = useState(houseData);

  const fetchHouseData = async () => {
    try {
      setCurrentHouseDetails(await Storage.getItem(houseName));
    } catch (error) {
      console.error("Error fetching specific house details", error);
    }
  };

  const handleDelete = () => {
    console.log("Delete handler activated");
    Storage.removeItem(houseName);
    eventEmitter.emit("houseAdded");
  };

  useEffect(() => {
    const handleHouseUpdated = () => {
      console.log("House updated, fetching new data");
      fetchHouseData();
    };
    eventEmitter.on("houseEdited", handleHouseUpdated);

    return () => {
      eventEmitter.removeListener("houseEdited", handleHouseUpdated);
    };
  }, [houseName]);

  // TODO: Add remove this house functionality
  return (
    <ScrollView>
      <View style={{ padding: 16 }}>
        {isEditing ? (
          <EditDetails
            houseDetails={houseData}
            onSave={() => {
              setIsEditing(false);
              fetchHouseData();
              // Optionally refresh the data or navigate back
            }}
          />
        ) : (
          <ViewDetails houseDetails={currentHouseDetails} />
        )}
        <Pressable
          style={buttonStyles.saveButton}
          onPress={() => setIsEditing(!isEditing)}
        >
          <Text style={buttonStyles.buttonText}>
            {isEditing ? "Cancel Editing" : "Edit Details"}
          </Text>
        </Pressable>
      </View>
      <Pressable onPress={() => navigation.goBack()}>
        <Text>DEV Go back</Text>
      </Pressable>
      <Pressable
        style={buttonStyles.saveButton}
        onPress={() => {
          console.log("Delete button pressed");
          if (Platform.OS === "web") {
            Storage.removeItem(houseName);
            navigation.goBack();
            eventEmitter.emit("houseAdded");
          } else {
            Alert.alert(
              "Confirm Delete",
              "Are you sure you want to delete this house?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "Save",
                  onPress: () => {
                    Storage.removeItem(houseName);
                    eventEmitter.emit("houseAdded");
                    navigation.goBack();
                  },
                },
              ],
            );
          }
        }}
      >
        <Text style={buttonStyles.buttonText}>Delete</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HouseDetailsScreen;
