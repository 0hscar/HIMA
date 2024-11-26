import React from "react";
import { Platform, Text, View, SafeAreaView } from "react-native";
import { textStyles, screenStyles } from "../../styles";
import CreateHouse from "../../components/CreateHouse";
import { CreateNewScreenProps } from "../../types/navigation";

// Main screen
const CreateNewScreen: React.FC<CreateNewScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View>
        {/* TODO: Create components */}
        {/* Center Titletext */}
        <Text style={textStyles.titleText}>Book creation</Text>

        {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}
        <CreateHouse navigation={navigation} />

        {Platform.OS === "web" ? (
          <Text>This is displayed on the web!</Text>
        ) : (
          <Text>This should display on mobile!</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CreateNewScreen;
