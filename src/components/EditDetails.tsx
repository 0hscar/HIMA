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
import { HouseInfo } from "houseInfoSelection";
import {
  EditDetailsProps,
  HouseDetail,
  CategorizedDetails,
} from "../types/component";

const EditDetails: React.FC<EditDetailsProps> = ({ houseDetails, onSave }) => {
  const [editedDetails, setEditedDetails] = useState(houseDetails);

  const organizeByCategory = (details: HouseDetail): CategorizedDetails => {
    const categorized: CategorizedDetails = {};

    HouseInfo.forEach((category) => {
      const categoryDetails: { [key: string]: any } = {};

      category.items.forEach((item) => {
        const detailKey = Object.keys(details).find(
          (key) => key.toLowerCase() === item.name.toLowerCase(),
        );

        if (detailKey && details[detailKey] !== undefined) {
          categoryDetails[detailKey] = details[detailKey];
        }
      });

      if (Object.keys(categoryDetails).length > 0) {
        categorized[category.name] = categoryDetails;
      }
    });

    const mappedFields = HouseInfo.flatMap((category) =>
      category.items.map((item) => item.name.toLowerCase()),
    );

    const otherFields = Object.entries(details).filter(
      ([key]) => !mappedFields.includes(key.toLowerCase()),
    );

    if (otherFields.length > 0) {
      categorized["Other"] = Object.fromEntries(otherFields);
    }

    return categorized;
  };

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

      eventEmitter.emit("houseEdited"); // Trigger refresh of house list
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
      {Object.entries(editedDetails).map(([houseName, details]) => {
        const categorizedDetails = organizeByCategory(details);

        return (
          <View key={houseName} style={DetailsStyles.detailsContainer}>
            <Text style={DetailsStyles.houseName}>{houseName}</Text>

            {Object.entries(categorizedDetails).map(
              ([category, categoryDetails]) => (
                <View key={category} style={DetailsStyles.categoryContainer}>
                  <Text style={DetailsStyles.categoryLabel}>{category}</Text>

                  {Object.entries(categoryDetails as Record<string, any>)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([key, value]) => (
                      <View key={key} style={DetailsStyles.detailRow}>
                        <Text style={DetailsStyles.detailLabel}>{key}: </Text>
                        <TextInput
                          style={[
                            DetailsStyles.value,
                            houseDetails[houseName][key] !==
                            editedDetails[houseName][key]
                              ? DetailsStyles.editedInput
                              : DetailsStyles.notEditedInput,
                          ]}
                          value={
                            typeof value === "string" ||
                            typeof value === "number"
                              ? value.toString()
                              : typeof value === "object"
                                ? JSON.stringify(value)
                                : ""
                          }
                          keyboardType={
                            HouseInfo.flatMap((category) =>
                              category.items.find(
                                (item) =>
                                  item.name.toLowerCase() === key.toLowerCase(),
                              ),
                            ).find((item) => item)?.type === "numeric"
                              ? "numeric"
                              : "default"
                          }
                          onChangeText={(newValue) =>
                            handleValueChange(houseName, key, newValue)
                          }
                        />
                      </View>
                    ))}
                </View>
              ),
            )}
            <Pressable
              style={buttonStyles.saveButton}
              onPress={() => handleSave(houseName)}
            >
              <Text style={buttonStyles.buttonText}>Save Changes</Text>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default EditDetails;
