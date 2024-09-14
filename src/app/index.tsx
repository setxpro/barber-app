import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Image, Alert } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { Link } from 'expo-router';

export default function App() {

  const { signIn } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {

    if (username === "" || password === "") {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }
      await signIn(username, password);
      router.replace("/")
  }

  return (
    <View style={styles.container}>

          <Image
            style={styles.image}
            source={{ uri: 'https://avatars.githubusercontent.com/u/179177467?s=400&u=02639f871fb8350f676245f299fa6078660e0a6d&v=4' }} 
            resizeMode="cover"
          />

        <View style={styles.textBox}>
          <Text style={styles.text}>Soluções Digitais</Text>
        </View>

        <View style={styles.inputBox}>
            <Ionicons name='person' size={20} color={'#747474'}/>
            <TextInput placeholder='Username' value={username} onChangeText={setUsername} style={styles.formInput}/>
        </View>

        <View style={styles.inputBox}>
            <Ionicons name='lock-closed' size={20} color={'#747474'}/>
            <TextInput placeholder='Senha' secureTextEntry value={password} onChangeText={setPassword} style={styles.formInput}/>
        </View>
        
        <TouchableOpacity activeOpacity={0.8} style={styles.formButton} onPress={handleSignIn}>
            <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <View style={styles.subContainer}>
        <Pressable style={styles.subButton} onPress={() => router.push("/forget")}>
            <Text style={styles.subTextButton}>Esqueci a minha senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
            <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>

        </View>


        {/* SOCIAL AREA */}
        <View style={styles.lineContainer}>
          <View style={styles.line}></View>
            <Text style={styles.lineText}>ou entre com</Text>
          <View style={styles.line}></View>
        </View>

        <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton}>
            <Ionicons name='logo-facebook' size={36} color={'#2142ff'}/>
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Ionicons name='logo-google' size={36} color={'#ff2121'}/>
          </Pressable>
        </View>
        {/* <Button title='Signin' onPress={() => handleSignIn("patrick.anjos", "123456")}/> */}

        <View style={styles.subContainer}>
        <Pressable style={[styles.subButton, {alignItems: 'center', margin: 'auto'}]}>
            <Text style={styles.subTextButton}>Preciso de Ajuda</Text>
        </Pressable>
        </View>

        {/* <Button title='SAIR DO APP' onPress={() => BackHandler.exitApp()}/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'bold'
  },
  image: {
    height: 200,
    width: 200, // Adicionei largura
    backgroundColor: '#0553',
   // borderRadius: 100, // Para imagem circular
  },
  textBox: {
    paddingVertical: 20
  },
  text: {
    fontFamily: 'light',
    fontSize: 36,
    color: '#444AAA'
  },
  inputBox: {
    borderColor: '#7a7a7a',
    borderWidth: 1,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    paddingHorizontal: 10,
    margin: 10,
    overflow: 'hidden'
  },
  formInput: {
    fontSize: 22,
    width: '100%',
    padding: 10,
  },
  formButton: {
    backgroundColor: '#444DDD',
    width: '80%',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 18,
    marginVertical: 10
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 5
  },
  subButton: {
    padding: 10
  },
  subTextButton: {
    color: '#444DDD',
  },
  lineContainer: {
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
    // overflow: 'hidden'
  },
  lineText: {
    color: '#444AAA',
    fontSize: 16
  },
  line: {
    width: '35%',
    height: 1,
    backgroundColor: '#444AAA',
    marginVertical: 10
  },
  socialContainer: {
      paddingVertical: 20,
      flexDirection: 'row',
      gap: 20
  },
  socialButton: {
    
  },
});
