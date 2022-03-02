import { View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";

interface ButtonProps { 
    image: string;
    onPress?: () => void;
    backgroundColor?: string;
}

const Button = ({ onPress, image, backgroundColor }: ButtonProps) => {
  return (
    <TouchableHighlight
      style={styles(backgroundColor).button}
      onPress={onPress}
    >
      <Image
        style={styles(backgroundColor).buttonLogo}
        source={{
          uri: image,
        }}
      />
    </TouchableHighlight>
  );
};

export default Button;
