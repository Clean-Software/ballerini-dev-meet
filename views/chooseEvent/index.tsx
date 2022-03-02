import { SafeAreaView } from "react-native";
import Topbar from "../../components/Topbar";
import styles from "./styles";

export default function ChooseEvent() {
  return (
    <SafeAreaView style={styles.container}>
      <Topbar
        title={`Que tipo de evento\nvocê procura?`}
        description={`Selecione a categoria que mais te agrada!`}
      />
    </SafeAreaView>
  );
}
