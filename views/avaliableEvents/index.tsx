import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import EventCard from "../../components/eventCard";
import GoBackButton from "../../components/goBackButton";
import { useState, useEffect } from "react";
import SkeletonLoading from "../../components/SkeletonLoading";
import { IEventCardProps, IEventPost } from "../../@types/event";
import styles from "./styles";
import Topbar from "../../components/Topbar";


var meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro"
];

export default function AvaliableEvents() {
  const [events, setEvents] = useState([] as IEventCardProps[]);

  // TODO: Refactor this useEffect
  useEffect(() => {
    axios.get("https://gitcdn.link/cdn/Ballerini-Server/dev-meet-backend/main/events.json").then(res => {
      const eventsRaw = res.data["events"] as IEventPost[];
      const sorttedEventsRaw =  eventsRaw.sort((a, b) => {
        return new Date(a.dataInicio).getTime() - new Date(b.dataInicio).getTime();
      });
      const events: IEventCardProps[] = sorttedEventsRaw.map((event) => {
        const date = new Date(event.dataInicio);
        const createdAt = new Date(event.dataPublicacao).getTime();

        return {
          data: `${String(date.getDate()).padStart(2, "0")}/${String(
            meses[date.getMonth()]
          )
            .toUpperCase()
            .slice(0, 3)}`,
          hora: `${String(date.getHours()).padStart(2, "0")}:${String(
            date.getMinutes()
          ).padStart(2, "0")}`,
          title: event.titulo,
          description: event.descricao,
          author: event.organizador,
          link: event.link,
          timestamp: date.getTime(),
          createdAt,
        };
      });
      setEvents(events);
    })
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
              <EventCard key={event.title} {...event} />
            ))}
          </View>
        </SkeletonLoading>
        <Text style={styles.semMaisEventos}>Sem mais eventos...</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
