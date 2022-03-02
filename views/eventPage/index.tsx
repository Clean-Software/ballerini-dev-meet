import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import ButtonGo from "../../components/button"
import {arrowWhiteSvg, arrowOrangeSvg} from "../../assets/CDN/svg"

import styles from "./styles";
import GoBackButton from "../../components/goBackButton";
import type { IEventCardProps } from "../../@types/event";

interface EventPagePropsInterface {
  route: {
    params: {
      event: IEventCardProps;
    };
  };
}

export default function EventPage({ route } : EventPagePropsInterface) {
  const [event, setEvent] = useState<IEventCardProps>({} as IEventCardProps);

  useEffect(() => {
    setEvent(route.params?.event);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.globalView} >
        <View style={styles.topbar}>
          <View>
            <Text style={styles.data}>{event.data}</Text>
            <Text style={styles.hora}>{event.hora}</Text>
          </View>
          <GoBackButton />
        </View>
        <View style={styles.viewCentral}>
          <Text style={styles.textoCentral}>
            {event.title}
          </Text>
          <Text style={styles.infoCentral}>
            {event.description}
          </Text>
          <View style={styles.byView}>
            <Text style={styles.byText}>Organizado por:</Text>
            <Text style={styles.name}>{event.author}</Text>
          </View>
        </View>
        <View style={styles.evento}>
          <Text style={styles.eventText}>Link do evento</Text>
          <View style={styles.linkView}>
            <Text style={styles.linkText}>{event.link}</Text>
            <View style={styles.buttons}>
              <ButtonGo
                image={arrowOrangeSvg}
                size={19}
                backgroundColor={"rgba(255, 255, 255, 0.2)"}
                style={{ borderRadius: 8 }}
              />
              <ButtonGo
                image={arrowWhiteSvg}
                size={19}
                backgroundColor={"rgba(4, 211, 97, 0.2)"}
                style={{ borderRadius: 8 }}
              />
            </View>
          </View>
        </View>
        <View style={styles.progressContainerView}>
          <View>
            <Text style={{ fontFamily: "Rajdhani-Bold", color: "#fff", fontSize: 25 }}>
              Tempo até o evento
            </Text>
            <View style={styles.time}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.number}>02</Text>
                <View style={{ alignSelf: "center" }}>
                  <Text style={styles.label}>DAY(s)</Text>
                </View>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.number}>12</Text>
                <View style={{ alignSelf: "center" }}>
                  <Text style={styles.label}>HOURS(s)</Text>
                </View>
              </View>

              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={styles.number}>30</Text>
                <View style={{ alignSelf: "center" }}>
                  <Text style={styles.label}>MIN(s)</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.parentBarView}>
            <View style={styles.sonBarView}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
