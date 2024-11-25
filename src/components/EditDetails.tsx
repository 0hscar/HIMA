import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  Platform,
} from "react-native";
import { DetailsStyles, buttonStyles } from "../styles";
import * as Storage from "../functions/storage";
import { eventEmitter } from "./CreateHouse";

interface EditDetailsProps {
  houseDetails: {
    [houseName: string]: HouseDetail;
  };
  onSave?: () => void;
}

interface HouseDetail {
  [key: string]: string | number | Object;
}

const EditDetails: React.FC<EditDetailsProps> = ({ houseDetails, onSave }) => {
  const [editedDetails, setEditedDetails] = useState(houseDetails);

  const handleValueChange = (
    houseName: string,
    key: string,
    newValue: string,
  ) => {
    setEditedDetails((prev) => ({
      ...prev,
      [houseName]: {
        ...prev[houseName],
        [key]: newValue,
      },
    }));
  };

  const handleSave = async (houseName: string) => {
    try {
      await Storage.setItem(houseName, JSON.stringify(editedDetails));

      if (Platform.OS === "web") {
        console.log("Changes saved successfully");
        onSave?.();
      } else {
        Alert.alert("Success", "Changes saved successfully", [
          {
            text: "OK",
            onPress: () => onSave?.(),
          },
        ]);
      }

      eventEmitter.emit("houseAdded"); // Trigger refresh of house list
    } catch (error) {
      console.error("Error saving changes:", error);
      if (Platform.OS === "web") {
        console.error("Failed to save changes");
      } else {
        Alert.alert("Error", "Failed to save changes");
      }
    }
  };

  return (
    <View>
      {Object.entries(editedDetails).map(([houseName, details]) => (
        <View key={houseName} style={DetailsStyles.detailsContainer}>
          <Text style={DetailsStyles.houseName}>{houseName}</Text>
          {Object.entries(details).map(([key, value]) => (
            <View key={key} style={DetailsStyles.detailRow}>
              <Text style={DetailsStyles.label}>{key}: </Text>
              <TextInput
                style={[DetailsStyles.value, DetailsStyles.input]}
                value={
                  typeof value === "string" || typeof value === "number"
                    ? value.toString()
                    : typeof value === "object"
                      ? JSON.stringify(value)
                      : ""
                }
                onChangeText={(newValue) =>
                  handleValueChange(houseName, key, newValue)
                }
              />
            </View>
          ))}
          <Pressable
            style={buttonStyles.saveButton}
            onPress={() => handleSave(houseName)}
          >
            <Text style={buttonStyles.buttonText}>Save Changes</Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default EditDetails;
