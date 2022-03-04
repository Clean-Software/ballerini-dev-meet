import { Text, TouchableOpacity, View } from "react-native";
import { SvgUri } from "react-native-svg";
import { ITopic } from "../../@types/topic";
import { imageDicionary } from "./helper";
import styles from "./styles";

interface TopicCardProps {
  selected?: boolean;
  topic: ITopic;
  onPress: () => void;
}

const TopicCard = ({ topic, selected, onPress }: TopicCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles(selected).container}>
        <SvgUri uri={imageDicionary(selected)[topic.icon]} />
        <Text numberOfLines={3} style={styles(selected).title}>{topic.text}</Text>
        <Text numberOfLines={2} style={styles(selected).footer}>
          {topic.eventsCount} evento{topic.eventsCount !== 0 && "s"}{" "}
          <Text style={styles(selected).footerFounded}>encontrados</Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;
