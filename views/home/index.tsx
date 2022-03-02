import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import Navbar from "../../components/navbar";

export default function Home() {
  return (
    <View style={styles.container}>
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
            uri: "https://res.cloudinary.com/dcy5jian9/image/upload/v1646193820/person_x5ciqo.png",
          }}
        />
      </View>
      <Navbar />
      <TouchableHighlight style={styles.button}>
        <Image
          style={styles.buttonLogo}
          source={{
            uri: "https://res.cloudinary.com/dcy5jian9/image/upload/v1646193820/Arrow-White_vapvlb.png",
          }}
        />
      </TouchableHighlight>
    </View>
  );
}
