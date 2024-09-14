import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack
            screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            animation: "slide_from_right",
        }}
        >
            <Stack.Screen name="forget" options={{ title: 'Esqueci minha senha' }} />
            <Stack.Screen name="hashCode" options={{ title: 'Código de confirmação' }} />
        </Stack>
    );
}