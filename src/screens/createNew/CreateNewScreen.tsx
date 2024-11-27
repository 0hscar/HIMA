import React from "react";
import { Platform, Text, View, SafeAreaView } from "react-native";
import { textStyles, screenStyles } from "../../styles";
import CreateHouse from "../../components/CreateHouse";
import { CreateNewScreenProps } from "../../types/navigation";

// Main screen
const CreateNewScreen: React.FC<CreateNewScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      {/* TODO: Create components */}
      <View style={screenStyles.headerContainer}>
        <Text style={textStyles.titleText}>Book creation</Text>
      </View>
      {/* Storage works, pass selected items to CreateProperty and there save the completed property to Storage */}
      <CreateHouse navigation={navigation} />
    </SafeAreaView>
  );
};

export default CreateNewScreen;
