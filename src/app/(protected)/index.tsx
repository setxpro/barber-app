import { View, Text, Button } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home() {
    
    const { signOut } = useAuth();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Button title="LOGOUT" onPress={() => signOut()}/>
            <Text style={{fontFamily: 'light'}}>Home</Text>
        </View>
    )
}