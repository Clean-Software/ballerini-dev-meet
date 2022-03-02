import { View, Text, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCard from "../../components/eventCard";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function EventPage() {
  const navigation = useNavigation();
    
  return (
    <SafeAreaView style={styles.globalView}>
      <View style={styles.topbar}>
        <View>
          <Text style={styles.title}>
              Eventos{'\n'}
              disponíveis
          </Text>
          <Text style={styles.subtitle}>
            Selecione o evento desejado.{'\n'}
            E espere sua data!
          </Text>
        </View>

        <TouchableHighlight  underlayColor='transparent' onPress={() => {
          navigation.goBack();
        }}>
          <View style={styles.botaoVoltar}>
            <Image style={styles.iconBotao} source={{
              uri: 'https://res.cloudinary.com/dcy5jian9/image/upload/v1646193820/Arrow-White_vapvlb.png'
            }} />
            <Text style={styles.textoBotao}>
              Voltar
            </Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.eventCards}>
        <EventCard key={"1"} data="02/MAR" hora="19:00" title="Criando interfaces muito malucas com o Figma!" description="Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins." author="Comunidade Ballerini" url="#" />

        <EventCard key={"2"} data="01/MAR" hora="10:00" title="Entendendo o Z-Pattern" description="Conheça como o olho humano observa um website a partir dos conceitos hierarquicos do Z-Pattern." author="Comunidade Ballerini" url="#" />
      </View>
      <Text style={styles.semMaisEventos}>
        Sem mais eventos...
      </Text>
    </SafeAreaView>
  );
}
