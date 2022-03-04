import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ITopic } from "../../@types/topic";
import { arrowWhiteSvg } from "../../assets/CDN";
import Button from "../../components/button";
import TopicCard from "../../components/topicCard";
import { Topics } from "../../services/api/topics";
import styles from "./styles";

export default function ChooseEvent() {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ITopic>();

  useEffect(() => { 
    Topics.index().then(setTopics);
  }, []);

  const handleNext = () => {
    navigation.navigate("AvaliableEvents", { topic: selectedTopic });
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.globalView}>
        <View style={styles.topbar}>
          <Text style={styles.topTitle}>
            Que tipo de evento{`\n`}você procura?
          </Text>
          <Text style={styles.topSubtitle}>
            Selecione a categoria que{`\n`}mais te agrada!
          </Text>
        </View>
        <ScrollView style={styles.topicCardsScroll}>
          <View style={styles.topicCards}>
            {topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                selected={selectedTopic?.id === topic.id}
                disabled={selectedTopic && selectedTopic.id !== topic.id}
                onPress={() => setSelectedTopic(topic)}
              />
            ))}
          </View>
        </ScrollView>
        {selectedTopic && (
          <View style={styles.nextButtonView}>
            <Text style={styles.nextButtonText}>Próximo</Text>
            <Button
              image={arrowWhiteSvg}
              backgroundColor="#04D361"
              onPress={handleNext}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
