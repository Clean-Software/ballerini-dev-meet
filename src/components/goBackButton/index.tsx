import { useNavigation } from "@react-navigation/native";
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { SvgUri } from "react-native-svg";
import { arrowWhiteSvg } from "../../assets/CDN/svg";
import styles from "./styles";

interface GoBackButtonProps {
  style?: StyleProp<ViewStyle>;
}

const GoBackButton = ({
  style,
}: GoBackButtonProps) => {
    const navigation = useNavigation();

    const handleGoBack = () => { 
        navigation.goBack();
    }

  return (
    <TouchableOpacity onPress={handleGoBack}>
      <View style={[styles.container, style]}>
        <SvgUri style={styles.icon} uri={arrowWhiteSvg} width={32} />
        <Text style={styles.text}>Voltar</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBackButton;
