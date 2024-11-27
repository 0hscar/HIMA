import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import * as Storage from "../functions/storage";
import { HouseInfo, SubItem } from "../houseInfoSelection";
import {
  buttonStyles,
  divStyles,
  dropdownStyles,
  textStyles,
  CreateStyles,
  SectionedMultiSelectStyle,
  futureColors,
} from "../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { EventEmitter } from "events";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { CreateNewScreenNavigationProp } from "../types/navigation";

interface CreateHouseProps extends ItemProps {
  navigation: CreateNewScreenNavigationProp;
}

interface ItemCount {
  itemCount: number | undefined;
}
interface ItemProps {
  passedItems?: string[];
}

interface ToSaveInfo {
  id: number;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
}
const eventEmitter = new EventEmitter();
// TODO: create the creator with selected valeus
const CreateHouse: React.FC<CreateHouseProps> = ({ navigation }) => {
  //TODO: CHANGE NAME TO SAME AS FILE
  const [toSaveItems, setToSaveItems] = useState<ToSaveInfo[]>([]);
  const [multiSelectItems, setMultiSelectItems] = useState<string[]>([]);

  useEffect(() => {
    const createSaveItems = (selectedNames: string[]) => {
      return selectedNames.map((selectedName) => {
        // Find the matching item by searching through all categories and their items
        let matchingItem: SubItem | undefined;

        // Search through each category
        HouseInfo.forEach((category) => {
          const found = category.items.find(
            (item) => item.name === selectedName,
          );
          if (found) {
            matchingItem = found;
          }
        });

        return {
          id: matchingItem?.id || 0,
          name: selectedName,
          value: "",
          placeholder: matchingItem?.placeholder || "Enter value",
          type: matchingItem?.type,
        } as ToSaveInfo;
      });
    };

    const generatedItems = createSaveItems(multiSelectItems);
    setToSaveItems(generatedItems);
  }, [multiSelectItems]);

  const handleInputChange = (text: string, id: number) => {
    setToSaveItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (item.type === "numeric") {
            const numericValue = text.replace(/[^0-9.]/g, "");
            // Only 1 decimal point
            const validNumeric =
              numericValue.split(".").length > 2
                ? numericValue.substring(0, numericValue.lastIndexOf("."))
                : numericValue;
            return { ...item, value: validNumeric };
          }
          return { ...item, value: text };
        }
        return item;
      }),
    );
  };

  const handleSave = async (propertyName: string) => {
    try {
      const hasEmptyRequiredFields = toSaveItems.some((item) => !item.value);

      if (hasEmptyRequiredFields) {
        Alert.alert("Error", "Please fill in all required fields");
        return;
      }
      const dataToSave = {
        [propertyName]: toSaveItems.reduce(
          (acc, item) => {
            // Numeric strings --> numbers
            if (item.type === "numeric") {
              acc[item.name] = item.value ? parseFloat(item.value) : 0;
            } else {
              acc[item.name] = item.value;
            }
            return acc;
          },
          {} as Record<string, string | number>,
        ),
      };

      await Storage.setItem(propertyName, JSON.stringify(dataToSave));
      eventEmitter.emit("houseAdded");
      setMultiSelectItems([]);

      navigation.navigate("Home");
    } catch (error) {
      console.log("Error saving data", error);
      Alert.alert("Error", "Failed to save data");
    }
  };

  // Component in the same file to easily uppdate selected items and create the property
  const MultiSelectComponent: React.FC = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const MultiSelectHeader = () => {
      return <View style={dropdownStyles.multiSelectHeader}></View>;
    };
    const MultiSelectFooter: React.FC<ItemCount> = ({ itemCount }) => {
      return (
        <View>
          <Text style={SectionedMultiSelectStyle.headerText}>
            {itemCount} Item(s) selected
          </Text>
        </View>
      );
    };

    function setSavedSelcted() {
      setMultiSelectItems(selected);
    }

    return (
      <ScrollView>
        <SectionedMultiSelect
          items={HouseInfo}
          IconRenderer={Icon as any} // TODO FIX properly
          uniqueKey="name" //From Item select what to save in the array for storage, name -> "Freezer"
          modalAnimationType="slide"
          // colors={{ primary: "black" }}
          hideSearch={false}
          readOnlyHeadings={true}
          subKey="items"
          selectText="Select information"
          close-on-select="false"
          headerComponent={<MultiSelectHeader />}
          footerComponent={<MultiSelectFooter itemCount={selected?.length} />}
          onSelectedItemsChange={setSelected}
          selectedItems={selected}
          onConfirm={setSavedSelcted}
          styles={SectionedMultiSelectStyle}
          // TODO: Fix confirm button styling: EDIT Works on phone
        ></SectionedMultiSelect>
      </ScrollView>
    );
  };

  return (
    <View style={divStyles.container}>
      <MultiSelectComponent></MultiSelectComponent>
      {/* FIX STYLING */}
      {/* FIX SO SCROLLING WORKS PROPERLY */}
      <ScrollView>
        {toSaveItems.map((item) => (
          <View key={item.id}>
            <Text style={textStyles.smallTitleText}>{item.name}</Text>

            <TextInput
              // Set style, move to style.ts
              style={CreateStyles.inputField}
              value={item.value}
              placeholder={item.placeholder || "Enter value"}
              placeholderTextColor={futureColors.textSecondary}
              keyboardType={item.type === "numeric" ? "numeric" : "default"}
              onChangeText={(text) => handleInputChange(text, item.id)}
            />
          </View>
        ))}
      </ScrollView>

      {toSaveItems.length > 0 && (
        <Pressable
          style={buttonStyles.saveButton}
          onPress={() => {
            console.log("Button pressed");
            const address = toSaveItems.find((i) => i.name === "Address");
            console.log("Address found");

            if (Platform.OS === "web") {
              // WEB SAVE, Alerts doesn't work on web
              if (!address) {
                console.log("No address field");
                return;
              }
              if (!address.name || address.value.trim() === "") {
                console.log("Invalid address");
                return;
              }
              handleSave(address.value);
            } else {
              // MOBILE SAVE, with alerts
              if (!address) {
                Alert.alert("No address field", "You have to choose address", [
                  {
                    text: "OK",
                    style: "cancel",
                  },
                ]);
              } else {
                if (!address.name || address.value.trim() === "") {
                  Alert.alert(
                    "Invalid Address",
                    "Address cannot be empty, please enter a valid address",
                    [
                      {
                        text: "OK",
                        style: "cancel",
                      },
                    ],
                  );
                } else {
                  Alert.alert(
                    "Confirm Save",
                    `Do you want to save this house at ${address.value}?`,
                    [
                      {
                        text: "Cancel",
                        style: "cancel",
                      },
                      {
                        text: "Save",
                        onPress: () => handleSave(address.value),
                      },
                    ],
                  );
                }
              }
            }
          }}
        >
          <Text style={buttonStyles.saveButtonText}>Save</Text>
        </Pressable>
      )}
    </View>
  );
};
export { eventEmitter };
export default CreateHouse;
