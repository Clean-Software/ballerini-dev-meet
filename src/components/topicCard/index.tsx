import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

import { iPhoneXOrangeSvg } from "../../assets/CDN";

import { SvgUri } from "react-native-svg";

const TopicCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <SvgUri uri={iPhoneXOrangeSvg} />
        <Text style={styles.title}>Título do evento</Text>
        <Text style={styles.footer}>
          5 eventos <Text style={styles.footerFounded}>encontrados</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;
