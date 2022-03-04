import * as Clipboard from 'expo-clipboard';
import { useEffect, useState } from "react";
import { ScrollView, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ICountdown } from "../../@types/date";
import type { IEventCardProps } from "../../@types/event";
import { arrowWhiteSvg } from "../../assets/CDN/svg";
import ButtonGo from "../../components/button";
import GoBackButton from "../../components/goBackButton";
import ToggleNotificationButton from "../../components/toggleNotificationButton";
import { getCountdown } from "../../utils/date";
import styles from "./styles";
interface EventPagePropsInterface {
  route: {
    params: {
      event: IEventCardProps;
    };
  };
}

export default function EventPage({ route } : EventPagePropsInterface) {
  const [event, setEvent] = useState<IEventCardProps>({} as IEventCardProps);

  const [countdownDate, setCountdownDate] = useState<ICountdown | undefined>();

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

    const countdown = getCountdown(new Date(event.createdAt), new Date(event.timestamp));

    setCountdownDate(countdown);
  };

  useEffect(() => {
    handleCountdown();

    const coutdownInterval = setInterval(handleCountdown, 1000 * 60);

    return () => clearInterval(coutdownInterval);
  }, []);

  if (!countdownDate) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.globalView}>
        <View style={styles.topbar}>
          <View>
            <Text style={styles.data}>{event.data}</Text>
            <Text style={styles.hora}>{event.time}</Text>
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
             <ToggleNotificationButton />
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
            <View>
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
