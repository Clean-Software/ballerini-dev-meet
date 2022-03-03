import { MotiView } from "moti";
import {  StyleProp, View, ViewStyle } from "react-native";
import styles from "./styles";

interface SkeletonLoadingProps {
  isLoading?: boolean;
  children?: any;
  style?: StyleProp<ViewStyle>;
  length: number;
}

const SkeletonLoading = ({
  style,
  isLoading,
  children,
  length,
}: SkeletonLoadingProps) => {
  if (isLoading) {
    return (
      <MotiView
        from={{ opacity: 0.4 }}
        animate={{ opacity: 0.6 }}
        transition={{ type: "timing", duration: 1000, loop: true }}
        style={[styles.container, style]}
      >
        {Array.apply(null, Array(length)).map((_, index) => (
          <View style={styles.skeletonContent} key={index} />
        ))}
      </MotiView>
    );
  }

  return children;
};

export default SkeletonLoading;
