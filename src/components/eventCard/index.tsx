import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";


import { arrowOrangeSvg } from "./../../assets/CDN/";

import { SvgUri } from 'react-native-svg';
import { IEventCardProps } from "../../@types/event";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const eventCard = (props: IEventCardProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  const handleNavigate = () => {
    navigation.navigate("EventPage", { event: props });
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleNavigate}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.data}>{props.data}</Text>
          <Text style={styles.line}>-</Text>
          <Text style={styles.hora}>{props.time}</Text>
        </View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.organizadoPor}>
          <View style={styles.organizadoPorLeft}>
            <Text style={styles.organizadoPorText}>Organizado por:</Text>
            <Text style={styles.organizadoPorNome}>{props.author}</Text>
          </View>
          <View>
            <SvgUri style={styles.arrow} uri={arrowOrangeSvg} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default eventCard;
