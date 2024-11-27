import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { buttonStyles } from "styles";

interface BackButtonProps {
  navigation: NavigationProp<any>;
  text?: string;
  style?: object;
}

const BackButton: React.FC<BackButtonProps> = ({
  navigation,
  text = "Back",
  style,
}) => {
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      style={[buttonStyles.backButton, style]}
    >
      <Text style={buttonStyles.buttonText}>{text}</Text>
    </Pressable>
  );
};
export default BackButton;
