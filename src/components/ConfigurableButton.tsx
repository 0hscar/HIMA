import React from "react";
import { Pressable, Text } from "react-native";
import { buttonStyles } from "styles";
import { ConfButtonProps } from "types/navigation";

const ConfButton: React.FC<ConfButtonProps> = ({ text, style, onPress }) => {
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>{text}</Text>
    </Pressable>
  );
};
export default ConfButton;
