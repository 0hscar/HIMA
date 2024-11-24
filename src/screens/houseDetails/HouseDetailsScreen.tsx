import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";

// interface HomeScreenProps {
//     navigation: StackNavigationProp<HomeScreenProp>
// }

// GET NAVIGATION HERE TO WORK
const HouseDetailsScreen: React.FC = () => {
  return (
    <View>
      <Text style={textStyles.titleText}>Your Homes</Text>
      {/* <PropertyList/> */}
      {/* Needs to be updated without reloading the app */}
      <Text>TESTING SCREEN</Text>
      {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
      {/* TODO: Create in features the show proporties with limited info until clicked open */}
    </View>
  );
};

export default HouseDetailsScreen;
