import { View, Text, ScrollView, ToastAndroid, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import ButtonGo from "../../components/button"
import {arrowWhiteSvg, arrowOrangeSvg} from "../../assets/CDN/svg"

import styles from "./styles";
import GoBackButton from "../../components/goBackButton";
import type { IEventCardProps } from "../../@types/event";
import * as Clipboard from 'expo-clipboard';
import { Feather } from "@expo/vector-icons"; 

interface EventPagePropsInterface {
  route: {
    params: {
      event: IEventCardProps;
    };
  };
}

interface ICountdownProps { 
  days: string;
  hours: string;
  minutes: string;
  percentage: number;
}

export default function EventPage({ route } : EventPagePropsInterface) {
  const [event, setEvent] = useState<IEventCardProps>({} as IEventCardProps);

  const [countdownDate, setCountdownDate] = useState<ICountdownProps>({
    days: "00",
    hours: "00",
    minutes: "00",
    percentage: 0,
  });

  const copyToClipboard = (url : string) => {
    Clipboard.setString(url);
  };

  function handleCopyLinkClick() {
    ToastAndroid.show("O link foi copiado!", ToastAndroid.SHORT);
    copyToClipboard(event.link);
  }

  const handleCountdown = () => { 
    const { event } = route.params;
    setEvent(event);

    const timestamp_future = event.timestamp;
    const now = new Date().getTime();
    const createdAt = event.createdAt;

    var delta = Math.abs(timestamp_future - now) / 1000;

    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    
    var percentage = -(((createdAt - now) / ( timestamp_future - createdAt)) * 100);

    setCountdownDate({
      days: `${String(days).padStart(2, "0")}`,
      hours: `${String(hours).padStart(2, "0")}`,
      minutes: `${String(minutes).padStart(2, "0")}`,
      percentage,
    });
  };

  useEffect(() => {
    handleCountdown();

    const coutdownInterval = setInterval(handleCountdown, 1000 * 60);

    return () => clearInterval(coutdownInterval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.globalView}>
        <View style={styles.topbar}>
          <View>
            <Text style={styles.data}>{event.data}</Text>
            <Text style={styles.hora}>{event.hora}</Text>
          </View>
          <GoBackButton />
        </View>
        <View style={styles.viewCentral}>
          <Text style={styles.textoCentral}>{event.title}</Text>
          <Text style={styles.infoCentral}>{event.description}</Text>
          <View style={styles.byView}>
            <Text style={styles.byText}>Organizado por:</Text>
            <Text style={styles.name}>{event.author}</Text>
          </View>
        </View>
        <View style={styles.evento}>
          <Text style={styles.eventText}>Link do evento</Text>
          <View style={styles.linkView}>
            <TouchableOpacity
              style={styles.linkText}
              onPress={handleCopyLinkClick}
            >
              <Text style={styles.linkText}>{event.link}</Text>
            </TouchableOpacity>
            <View style={styles.buttons}>
              <ButtonGo
                icon={{
                  type: Feather,
                  name: "bell",
                  color: "#FFFFFF",
                }}
                size={19}
                backgroundColor={"rgba(255, 255, 255, 0.2)"}
                style={{ borderRadius: 8 }}
              />
              <ButtonGo
                image={arrowWhiteSvg}
                size={19}
                backgroundColor={"rgba(4, 211, 97, 0.2)"}
                style={{ borderRadius: 8 }}
                onPress={handleCopyLinkClick}
              />
            </View>
          </View>
        </View>
        <View style={styles.progressContainerView}>
          <View>
            <Text
              style={{
                fontFamily: "Rajdhani-Bold",
                color: "#fff",
                fontSize: 25,
                display: countdownDate.percentage < 100 ? "flex" : "none",
              }}
            >
              Tempo até o evento
            </Text>
            <View style={styles.contentInner}>
              {countdownDate.percentage < 100 ? (
                <View style={styles.time}>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.number}>{countdownDate.days}</Text>
                    <View style={{ alignSelf: "center" }}>
                      <Text style={styles.label}>DAY(s)</Text>
                    </View>
                  </View>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.number}>{countdownDate.hours}</Text>
                    <View style={{ alignSelf: "center" }}>
                      <Text style={styles.label}>HOURS(s)</Text>
                    </View>
                  </View>

                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={styles.number}>{countdownDate.minutes}</Text>
                    <View style={{ alignSelf: "center" }}>
                      <Text style={styles.label}>MIN(s)</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  <Text style={styles.eventIsHappening}>
                    O Evento já está rolando! 🎉
                  </Text>
                </>
              )}
            </View>
          </View>
          <View style={styles.parentBarView}>
            <View
              style={[
                styles.sonBarView,
                {
                  width: `${countdownDate.percentage}%`,
                  backgroundColor:
                    countdownDate.percentage < 100 ? "#FF5100" : "#04D361",
                },
              ]}
            ></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
