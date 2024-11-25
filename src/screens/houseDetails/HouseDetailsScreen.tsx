import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import { textStyles, DetailsStyles, buttonStyles } from "../../styles";
import { Pressable } from "react-native";
import { HouseDetailsRouteProp } from "./types";
import { HouseDetailsNavigationProp } from "./types";
import ViewDetails from "../../components/ViewDetails";
import EditDetails from "../../components/EditDetails";
import * as Storage from "../../functions/storage";
import { eventEmitter } from "../../components/CreateHouse";

type HouseDetailsProps = {
  navigation: HouseDetailsNavigationProp;
  route: HouseDetailsRouteProp;
};

const HouseDetailsScreen: React.FC<HouseDetailsProps> = ({
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

  useEffect(() => {
    const handleHouseUpdated = () => {
      console.log("House updated, fetching new data");
      fetchHouseData();
    };
    eventEmitter.on("houseAdded", handleHouseUpdated);

    return () => {
      eventEmitter.removeListener("houseAdded", handleHouseUpdated);
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
    </ScrollView>
  );
};

export default HouseDetailsScreen;
