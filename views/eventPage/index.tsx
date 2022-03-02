import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableHighlight, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonGo from "../../components/button"
import {arrowWhiteSvg, arrowOrangeSvg} from "../../assets/CDN/svg"

import styles from "./styles";

export default function EventPage() {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.globalView}>
        <View style={styles.topbar}>
          <View style={styles.datahora}>
            <Text style={styles.data}>02/MAR</Text>
            <Text style={styles.hora}>19:00</Text>
          </View>
          {/* <TouchableOpacity style={styles.botaoVoltar} onPress={() => {navigation.goBack()}}>
            <Text style={styles.textoBotao}>Voltar</Text>
          </TouchableOpacity> */}
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
              <ButtonGo image={arrowOrangeSvg} size={19} backgroundColor={'rgba(255, 255, 255, 0.2)'} style={{borderRadius: 8}} />
              <ButtonGo image={arrowWhiteSvg} size={19} backgroundColor={'rgba(4, 211, 97, 0.2)'} style={{borderRadius: 8}} />
            </View>  
          </View>
        </View>
        <View style={styles.progressContainerView}>
          <View style={styles.progressText}>
            <Text style={{fontWeight: "bold", color: "#fff", fontSize: 25}}>Tempo até o evento</Text>
            <View style={styles.time}>

              <View style={{display: "flex", flexDirection: "row"}}>
                <Text style={styles.number}>
                  02
                </Text>
                <View style={{alignSelf: "center"}}>
                  <Text style={styles.label}>
                    DAY(s)
                  </Text>
                </View>
              </View>

              <View style={{display: "flex", flexDirection: "row"}}>
                <Text style={styles.number}>
                  12
                </Text>
                <View style={{alignSelf: "center"}}> 
                  <Text style={styles.label}>
                    HOURS(s)
                  </Text>
                </View>
              </View>

              <View style={{display: "flex", flexDirection: "row"}}>
                <Text style={styles.number}>
                  30
                </Text>
                <View style={{alignSelf: "center"}}>
                  <Text style={styles.label}>
                    MIN(s)
                  </Text>
                </View>
              </View>
              
            </View>
          </View>
          <View style={styles.parentBarView}>
            <View style={styles.sonBarView}>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
