import React from "react";
import { ScrollView, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopicCard from "../../components/topicCard";
import styles from "./styles";
export default function ChooseEvent() {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.globalView}>
        <View style={styles.topbar}>
          <Text style={styles.topTitle}>
            Que tipo de evento{`\n`}você procura?
          </Text>
          <Text style={styles.topSubtitle}>
            Selecione a categoria que{`\n`}mais te agrada!
          </Text>
        </View>
        <View style={styles.topicCards}>
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
