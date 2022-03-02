import React from "react";
import { SafeAreaView } from "react-native";
import { LOGO, Pattern } from "../../assets/CDN";
import { View, Image } from "react-native";
import styles from "./styles";

export default function LoadingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.linesPattern}>
        <Image
          style={styles.image}
          source={{
            uri: Pattern,
          }}
        />
        <View style={styles.logo}></View>
        <Image
          style={styles.image}
          source={{
            uri: LOGO,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
