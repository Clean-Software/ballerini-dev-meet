import { createElement } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";
import styles from "./styles";
interface ButtonProps {
  image?: string;
  icon?: {
    type: any;
    name: string;
    color?: string;
  };
  onPress?: () => void;
  backgroundColor?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Button = ({
  onPress,
  image,
  backgroundColor,
  size = 40,
  style,
  icon,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles(size, backgroundColor).button, style]}
      onPress={onPress}
    >
      {image && <SvgUri width={size} height={size} uri={image} />}
      {icon &&
        createElement(icon.type, {
          style: styles(size, backgroundColor).icon,
          size,
          name: icon.name,
          color: icon.color,
        })}
    </TouchableOpacity>
  );
};

export default Button;
