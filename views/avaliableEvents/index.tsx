import { View, Text, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function EventPage() {
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

        <TouchableHighlight  underlayColor='transparent' onPress={() => {}}>
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
      <View>
      </View>
    </SafeAreaView>
  );
}
