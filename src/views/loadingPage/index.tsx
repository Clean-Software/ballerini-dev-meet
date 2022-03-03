import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MotiView } from "moti";
import { LOGOSvg, PatternSvg } from "../../assets/CDN";
import styles from "./styles";
import { SvgUri } from "react-native-svg";

export default function LoadingPage() {
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 1.0 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ type: "timing", duration: 1000, loop: true }}
        style={styles.pattern}
      >
        <SvgUri uri={PatternSvg} />
      </MotiView>
      <SvgUri style={styles.image} uri={LOGOSvg} />
    </SafeAreaView>
  );
}
