import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { arrowWhite } from "../../assets/CDN"
import styles from "./styles";

export default function EventPage() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.globalView}>
      <View style={styles.topbar}>
        <View style={styles.datahora}>
          <Text style={styles.data}>02/MAR</Text>
          <Text style={styles.hora}>19:00</Text>
        </View>
        <TouchableOpacity style={styles.botaoVoltar} onPress={() => {navigation.goBack()}}>
          <Text style={styles.textoBotao}>Voltar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewCentral}>
        <Text style={styles.textoCentral}>
          Criando interfaces muito malucas com o Figma!
        </Text>
        <Text style={styles.infoCentral}>
          Você pode criar interfaces malucas que dispertam sua criativade.
          Usando de recursos do próprio figma, como seus plugins.
        </Text>
        <View style={styles.byView}>
          <Text style={styles.byText}>Organizado por:</Text>
          <Text style={styles.name}> Comunidade Ballerini</Text>
        </View>
      </View>
      <View style={styles.evento}>
        <Text style={styles.eventText}>Link do evento</Text>
        <View style={styles.linkView}>
          <Text style={styles.linkText}>meet.google/12345</Text>
          <View style={styles.buttons}>
            <TouchableOpacity style={styles.btnNotificacao} onPress={() => {}}>
              <View style={styles.notificacoes}></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnGo} onPress={() => {}} >
              <View  style={styles.goToLink}>
                <Image source={require(arrowWhite)} />
              </View>
            </TouchableOpacity>
          </View>  
        </View>
      </View>
    </SafeAreaView>
  );
}
