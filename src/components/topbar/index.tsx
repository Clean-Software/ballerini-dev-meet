import { StyleProp, Text, View, ViewStyle } from "react-native";
import GoBackButton from "../goBackButton";
import styles from "./styles";

interface TopbarProps {
  title: string;
  description: string;
  style?: StyleProp<ViewStyle>;
}

const Topbar = ({ title, description, style }: TopbarProps) => (
  <View style={[styles.topbar, style]}>
    <View style={styles.top}>
      <Text style={styles.title}>
        {title}
      </Text>
      <GoBackButton />
    </View>
    <View>
      <Text style={styles.subtitle}>
        {description}
      </Text>
    </View>
  </View>
);

export default Topbar;
