import { TouchableOpacity } from "react-native";
import { SvgUri } from "react-native-svg";
import styles from "./styles";

interface ButtonProps { 
  image: string;
  onPress?: () => void;
  backgroundColor?: string;
  size?: number;
}

const Button = ({ onPress, image, backgroundColor, size = 40 }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles(size, backgroundColor).button}
      onPress={onPress}
    >
      <SvgUri width={size} height={size} uri={image} />
    </TouchableOpacity>
  );
};

export default Button;
