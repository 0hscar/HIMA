import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import ViewHouses from "../../components/ViewHouses";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList, TabParamList } from "../AppNavigation";

// interface HomeScreenProps {
//     navigation: StackNavigationProp<HomeScreenProp>
// }

// Move to types.ts
export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<RootStackParamList>
>;

type HomeScreenProps = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text style={textStyles.titleText}>Your Homes</Text>
      {/* <PropertyList/> */}
      {/* Needs to be updated without reloading the app */}
      <ViewHouses navigation={navigation}></ViewHouses>
      {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
      {/* TODO: Create in features the show proporties with limited info until clicked open */}
    </View>
  );
};

export default HomeScreen;
