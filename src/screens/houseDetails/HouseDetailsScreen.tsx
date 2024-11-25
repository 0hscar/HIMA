import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../AppNavigation";
import { RouteProp } from "@react-navigation/native";
import { Pressable } from "react-native";
// interface HomeScreenProps {
//     navigation: StackNavigationProp<HomeScreenProp>
// }

type HouseDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HouseDetails"
>;

type HouseDetailsRouteProp = RouteProp<RootStackParamList, "HouseDetails">;

type HouseDetailsProps = {
  navigation: HouseDetailsNavigationProp;
  route: HouseDetailsRouteProp;
};

// GET NAVIGATION HERE TO WORK
const HouseDetailsScreen: React.FC<HouseDetailsProps> = ({
  navigation,
  route,
}) => {
  const { testId } = route.params || {};

  return (
    <View>
      <Text style={textStyles.titleText}>Your Homes</Text>
      {/* <PropertyList/> */}
      {/* Needs to be updated without reloading the app */}
      <Text>TESTING SCREEN</Text>
      {testId && <Text>Test ID: {testId}</Text>}
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable>
      {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
      {/* TODO: Create in features the show proporties with limited info until clicked open */}
    </View>
  );
};

export default HouseDetailsScreen;
