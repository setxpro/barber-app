import { Text, View } from "react-native";
import { styles } from "./styles";

type ProgressType = {
    step: string;
}

export default function ProgressLine({ step }: ProgressType) {
  return (
    <View style={styles.stepContent}>
      <View style={styles.line}></View>
      <View style={styles.stepTextArea}>
        <Text>{step}</Text>
      </View>
      <View style={styles.line}></View>
    </View>
  );
}
