import { Text, View, Image, TouchableHighlight, SafeAreaView } from "react-native";
import { person, arrowWhite } from "../../assets/CDN";
import Button from "../../components/button";
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
      <Button image={arrowWhite} backgroundColor="#FF5100" />
    </SafeAreaView>
  );
}
