import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiImage } from "moti";
import { LOGO, Pattern } from "../../assets/CDN";
import styles from "./styles";

export default function LoadingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <MotiImage
        from={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ type: "timing", duration: 1000, loop: true }}
        style={styles.pattern}
        source={{
          uri: Pattern,
        }}
      />
      <Image
        style={styles.image}
        source={{
          uri: LOGO,
        }}
      />
    </SafeAreaView>
  );
}
