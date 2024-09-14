import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

export default function Test() {
    const { signIn } = useAuth();

  const handleSignIn = async (username: string, password: string) => {
    try {
      await signIn(username, password);
      router.replace("/")
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Application</Text>
        <View>
            <Ionicons name='person' size={20} color={'#000'}/>
        </View>
        <Button title='Signin' onPress={() => handleSignIn("patrick.anjos", "Mudar@123")}/>
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
    text: {
      fontFamily: 'light',
      fontSize: 20
    }
  });
  