import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Alert, SafeAreaView } from "react-native";
import {
  textStyles,
  DetailsStyles,
  buttonStyles,
  screenStyles,
  listStyles,
} from "../../styles";
import { Pressable } from "react-native";
import ViewDetails from "../../components/ViewDetails";
import EditDetails from "../../components/EditDetails";
import * as Storage from "../../functions/storage";
import { eventEmitter } from "../../components/CreateHouse";
import { Platform } from "react-native";
import { HouseDetailsScreenProps } from "../../types/navigation";
import BackButton from "components/BackButton";
import ConfButton from "components/ConfigurableButton";

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

  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.headerContainer}>
        <Text style={textStyles.titleText}>House Information</Text>
        <BackButton navigation={navigation} />
      </View>
      <View style={screenStyles.centeredContent}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <View>
            {isEditing ? (
              <EditDetails
                houseDetails={currentHouseDetails}
                onSave={() => {
                  setIsEditing(false);
                  fetchHouseData();
                  // Optionally refresh the data or navigate back
                }}
              />
            ) : (
              <ViewDetails houseDetails={currentHouseDetails} />
            )}
          </View>
        </ScrollView>
        <ConfButton
          style={
            !isEditing
              ? buttonStyles.editButton
              : buttonStyles.stopEditingButton
          }
          onPress={() => setIsEditing(!isEditing)}
          text={isEditing ? "Cancel Editing" : "Edit Details"}
        />

        <ConfButton
          style={buttonStyles.deleteButton}
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
          text={"Delete"}
        />
      </View>
    </SafeAreaView>
  );
};

export default HouseDetailsScreen;
