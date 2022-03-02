import { View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

interface ButtonProps { 
    image: string;
    onPress?: () => void;
    backgroundColor?: string;
    size?: number;
}

const Button = ({ onPress, image, backgroundColor, size = 40 }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={styles(size, backgroundColor).button}
      onPress={onPress}
    >
      <Image
        style={styles(size, backgroundColor).buttonLogo}
        source={{
          uri: image,
        }}
      />
    </TouchableHighlight>
  );
};

export default Button;
