import React from "react";
import { Platform, Text, View } from "react-native";
import { textStyles } from "../../styles";
import CreateHouse from "../../components/CreateHouse";

// Main screen
const CreateNewScreen: React.FC = () => {
  return (
    <View>
      {/* TODO: Create components */}
      {/* Center Titletext */}
      <Text style={textStyles.titleText}>Book creation</Text>

      {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}
      <CreateHouse />

      {Platform.OS === "web" ? (
        <Text>This is displayed on the web!</Text>
      ) : (
        <Text>This should display on mobile!</Text>
      )}
    </View>
  );
};

export default CreateNewScreen;
