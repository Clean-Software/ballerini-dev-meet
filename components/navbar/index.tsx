import { Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("LoadingPage" as any);
        }}
      >
        <View>
          <Text>LoadingPage</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("EventPage" as any);
        }}
      >
        <View>
          <Text>EventPage</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("ChooseEvent" as any);
        }}
      >
        <View>
          <Text>ChooseEvent</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Navbar;
