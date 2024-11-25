import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../AppNavigation";
import { StackNavigationProp } from "@react-navigation/stack";

export type HouseDetailsRouteProp = RouteProp<
  RootStackParamList,
  "HouseInformation"
>;
export type HouseDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HouseInformation"
>;
