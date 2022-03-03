import { Text, View, TouchableHighlight } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Navbar = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any, any>>();

  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("LoadingPage");
        }}
      >
        <View>
          <Text>LoadingPage</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("EventPage");
        }}
      >
        <View>
          <Text>EventPage</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("ChooseEvent");
        }}
      >
        <View>
          <Text>ChooseEvent</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate("AvaliableEvents");
        }}
      >
        <View>
          <Text>avaliableEvents</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Navbar;
