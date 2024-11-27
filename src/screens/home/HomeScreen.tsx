import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { textStyles, screenStyles } from "../../styles";
import ViewHouses from "../../components/ViewHouses";
import { HomeScreenProps } from "../../types/navigation";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={screenStyles.safeArea}>
      <View style={screenStyles.headerContainer}>
        <Text style={textStyles.titleText}>Your Homes githubpush test</Text>
      </View>
      {/* <View> */}
      {/* <PropertyList/> */}
      {/* Needs to be updated without reloading the app */}
      <ViewHouses navigation={navigation}></ViewHouses>
      {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
      {/* TODO: Create in features the show proporties with limited info until clicked open */}
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
