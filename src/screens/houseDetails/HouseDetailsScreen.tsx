import React from "react";
import { Text, View } from "react-native";
import { textStyles } from "../../styles";
import { Pressable } from "react-native";
import { HouseDetailsRouteProp } from "./types";
import { HouseDetailsNavigationProp } from "./types";
import ViewDetails from "../../components/ViewDetails";

type HouseDetailsProps = {
  navigation: HouseDetailsNavigationProp;
  route: HouseDetailsRouteProp;
};

const HouseDetailsScreen: React.FC<HouseDetailsProps> = ({
  navigation,
  route,
}) => {
  const { houseName, houseData } = route.params || {};

  return (
    <View>
      {/* <PropertyList/> */}
      {/* Needs to be updated without reloading the app */}
      <ViewDetails houseDetails={houseData} />

      {/* TODO: MAKE FANCY */}
      <Pressable onPress={() => navigation.goBack()}>
        <Text>Go back</Text>
      </Pressable>
      {/* TODO: Show upcoming expiring date, example: Air filter cleaning in ... */}
      {/* TODO: Create in features the show proporties with limited info until clicked open */}
    </View>
  );
};

export default HouseDetailsScreen;
