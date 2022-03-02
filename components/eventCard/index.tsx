import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

import { SvgUri } from 'react-native-svg';

interface EventCardProps {
  data: string,
  hora: string,
  title: string,
  description: string,
  author: string,
  url: string,
}
const eventCard = (props : EventCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.data}>
          {props.data}
        </Text>
        <Text style={styles.line}>
          -
        </Text>
        <Text style={styles.hora}>
          {props.hora}
        </Text>
      </View>
      <Text style={styles.title}>
        {props.title}
      </Text>
      <Text style={styles.description}>
        {props.description}
      </Text>
      <View style={styles.organizadoPor}>
        <View style={styles.organizadoPorLeft}>
          <Text style={styles.organizadoPorText}>
            Organizado por:
          </Text>
          <Text style={styles.organizadoPorNome}>
            {props.author}
          </Text>
        </View>
        <Image source={{
          uri: 'https://res.cloudinary.com/dcy5jian9/image/upload/v1646193820/Arrow-Orange_s7p9mz.png'
        }}
        style={styles.arrow} />
      </View>
    </View>
  );
};

export default eventCard;
