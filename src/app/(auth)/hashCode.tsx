import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import ProgressLine from "../components/progressLine/ProgressLine";

export default function HashCode() {
  const [hash, setHash] = useState("");

  const handleHashCode = () => {};

  return (
    <View style={styles.container}>
      <ProgressLine step="2"/>
      <View style={styles.content}>
        <Text style={styles.text}>Validar Código de confirmação</Text>
        <View style={styles.inputBox}>
          <MaterialIcons name="security" size={20} color={"#747474"} />
          <TextInput
            placeholder="Código"
            keyboardType="numeric"
            value={hash}
            onChangeText={setHash}
            style={styles.formInput}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.formButton}
          onPress={handleHashCode}
        >
          <Text style={styles.textButton}>Validar</Text>
        </TouchableOpacity>
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
  inputBox: {
    borderColor: "#7a7a7a",
    borderWidth: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
    margin: 10,
    overflow: "hidden",
  },
  formInput: {
    fontSize: 22,
    width: "100%",
    padding: 10,
  },
  formButton: {
    width: "100%",
    backgroundColor: "#444DDD",
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 18,
    marginVertical: 10,
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  }
});
