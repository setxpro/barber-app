import { createContext, useContext, useEffect } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";

type FontType = {
    loaded: boolean;
}

const FontContext = createContext({} as FontType);

export function FontProvider({ children }:any) {

    const [loaded, error] = useFonts({
        regular: require("../../assets/fonts/Montserrat-Regular.ttf"),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),
        medion: require("../../assets/fonts/Montserrat-Medium.ttf"),
        thin: require("../../assets/fonts/Montserrat-Thin.ttf"),
        extralight: require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    })


    if (!loaded && !error) {
        return <ActivityIndicator size="large"/>
    }

    return (
        <FontContext.Provider value={{ loaded }}>{children}</FontContext.Provider>
    );
}

export function useFont() {
    const context = useContext(FontContext);
    
    if(!context) {
        throw new Error("useFont must be used within a FontProviderr");
    }

    return context;
}