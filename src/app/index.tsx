import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../hooks/Auth';

export default function App() {

  const { signIn, signOut, user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Application</Text>
      {user ? <Button title='Signout' onPress={() => signOut()}/> : <Button title='Signin' onPress={() => signIn("patrick.anjos", "123456")}/>}
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
