import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import { personSvg, arrowWhiteSvg } from "../../assets/CDN";
import Button from "../../components/button";
import styles from "./styles";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  const handleNext = () => {
    navigation.navigate("ChooseEvent");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            Olá, Dev <Text style={styles.exclamacao}>!</Text>
          </Text>
          <Text style={styles.subtitle}>
            Encontre o seu{"\n"}
            <Text style={styles.orangeBackground}> próximo </Text> evento de
            {"\n"}programação!
          </Text>
        </View>
        <SvgUri width={"100%"} uri={personSvg} />
      </View>
      <Button
        onPress={handleNext}
        image={arrowWhiteSvg}
        backgroundColor="#FF5100"
        style={{ marginTop: 40 }}
      />
    </SafeAreaView>
  );
}
