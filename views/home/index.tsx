import { Text, View, Image, TouchableHighlight, SafeAreaView } from "react-native";
import { person, arrowWhite } from "../../assets/CDN";
import Navbar from "../../components/navbar";
import styles from "./styles";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>
            Olá, Dev <Text style={styles.exclamacao}>!</Text>
          </Text>
          <Text style={styles.subtitle}>
            Encontre o seu <Text style={styles.orangeBackground}>próximo</Text>{" "}
            evento de programação!
          </Text>
          <Image
            style={styles.person}
            source={{
              uri: person,
            }}
          />
        </View>
        <Navbar />
        <TouchableHighlight style={styles.button}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: arrowWhite,
            }}
          />
        </TouchableHighlight>
    </SafeAreaView>
  );
}
