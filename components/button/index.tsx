import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";
import styles from "./styles";

interface ButtonProps {
  image: string;
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
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles(size, backgroundColor).button, style]}
      onPress={onPress}
    >
      <SvgUri width={size} height={size} uri={image} />
    </TouchableOpacity>
  );
};

export default Button;
