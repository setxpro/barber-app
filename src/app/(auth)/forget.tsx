import { Text, View, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
import ProgressLine from "../components/progressLine/ProgressLine";

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
      <ProgressLine step="1" />
      <View style={styles.content}>
        <Text style={styles.text}>Esqueci minha senha</Text>

        <Button title="Enviar" onPress={() => router.push("/hashCode")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "light",
    fontSize: 20,
    color: "blueviolet",
  },
  content: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
