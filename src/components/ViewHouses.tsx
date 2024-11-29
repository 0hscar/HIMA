import React, { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  DetailsStyles,
  buttonStyles,
  listStyles,
  screenStyles,
  textStyles,
} from "../styles";
import * as Storage from "../functions/storage";
import { eventEmitter } from "./CreateHouse";
import { HomeScreenNavigationProp } from "../types/navigation";
import ConfButton from "./ConfigurableButton";

// TODO: Move to seperate types.ts?

type ViewHousesProps = {
  navigation: HomeScreenNavigationProp;
};

const ViewHouses: React.FC<ViewHousesProps> = ({ navigation }) => {
  const [testHouses, setTestHouses] = useState<{
    [key: string]: string | null;
  }>({});
  const [houseDetails, setHouseDetails] = useState<any>(null);
  const [visibleHouse, setVisibleHouse] = useState<string | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  useEffect(() => {
    fetchHouses();

    const handleHouseAdded = () => {
      console.log("New house added! / Edited house Updating view houses");
      fetchHouses();
    };

    // event listener
    eventEmitter.on("houseAdded", handleHouseAdded);
    eventEmitter.on("houseEdited", handleHouseAdded);

    // Listener cleanup
    return () => {
      eventEmitter.removeListener("houseAdded", handleHouseAdded);
      eventEmitter.removeListener("houseEdited", handleHouseAdded);
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
    const houseData = testHouses[houseName];

    if (houseData) {
      try {
        const parsedHouseData = JSON.parse(houseData);

        navigation.navigate("HouseInformation", {
          houseName: houseName,
          houseData: parsedHouseData,
        });
      } catch (error) {
        console.error("Error parsing house data:", error);
      }
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

  return (
    <View style={screenStyles.centeredContent}>
      {!testHouses ? (
        <Text style={textStyles.smallTitleText}>Create your first house</Text>
      ) : (
        Object.keys(testHouses).map((houseName) => (
          <View key={houseName}>
            <TouchableOpacity
              style={listStyles.item}
              onPress={() => handleHouseClick(houseName)}
            >
              <Text style={listStyles.itemTitle}>{houseName}</Text>
            </TouchableOpacity>
          </View>
        ))
      )}

      {__DEV__ && (
        <View>
          <ConfButton
            style={buttonStyles.deleteButton}
            onPress={Storage.removeAll}
            text={"DEV Remove all houses"}
          />
        </View>
      )}
    </View>
  );
};

export default ViewHouses;
