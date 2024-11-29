import {
  CompositeNavigationProp,
  NavigationProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { GestureResponderEvent } from "react-native";

export type RootStackParamList = {
  HIMA: undefined; // CHANGE TO SOME LOGO AT SOMEPOINT?
  HouseInformation: { houseName: string; houseData: any }; //TODO: Define proper data type
};

export type TabParamList = {
  Home: undefined;
  Create: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Home">,
  StackNavigationProp<RootStackParamList>
>;

export type CreateNewScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Create">,
  StackNavigationProp<RootStackParamList>
>;

export type HouseDetailsRouteProp = RouteProp<
  RootStackParamList,
  "HouseInformation"
>;
export type HouseDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "HouseInformation"
>;

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export interface CreateNewScreenProps {
  navigation: CreateNewScreenNavigationProp;
}

export interface HouseDetailsScreenProps {
  navigation: HouseDetailsNavigationProp;
  route: HouseDetailsRouteProp;
}

export interface BackButtonProps {
  navigation: NavigationProp<any>;
  text?: string;
  style?: object;
}

export interface ConfButtonProps {
  text?: string;
  style?: object;
  onPress?: () => Promise<void | {} | undefined> | void;
}
