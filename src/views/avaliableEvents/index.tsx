import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCard from "../../components/eventCard";
import { useState, useEffect } from "react";
import SkeletonLoading from "../../components/SkeletonLoading";
import { IEventCardProps } from "../../@types/event";
import Topbar from "../../components/Topbar";
import { Events } from "../../services/api";
import styles from "./styles";

export default function AvaliableEvents() {
  const [events, setEvents] = useState<IEventCardProps[]>([]);

  useEffect(() => {
    Events.index().then(setEvents);
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView style={styles.globalView}>
        <Topbar
          title={`Eventos\ndisponíveis`}
          description={`Selecione o evento desejado.\nE espere sua data!`}
        />
        <SkeletonLoading
          isLoading={!events.length}
          length={4}
          style={{ width: "100%" }}
        >
          <View style={styles.eventCards}>
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </View>
        </SkeletonLoading>
        <Text style={styles.semMaisEventos}>Sem mais eventos...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
