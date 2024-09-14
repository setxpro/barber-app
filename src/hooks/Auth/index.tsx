import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { useUsersDb } from "../../database/useUsersDatabase";
import { Alert } from "react-native";

type ChildrenType = {
    children: React.JSX.Element;
}

type AuthType = {
    user: IUser | null;
    signIn: (username: string, password: string) => Promise<void>;
    signOut: () => void;
}

const AuthContext = createContext({} as AuthType);

export function AuthProvider({children}: ChildrenType) {

    const [user, setUser] = useState<IUser | null>(null!);
    const { authUser } = useUsersDb();

    const signIn = async (username: string, password: string) => {

        console.log("Trying..." + username)

        const response = await authUser(username, password)

        console.log("RESPOMSE : " + response)

        if (!response) {
            // setUser({
            //     id: 0,
            //     name: null,
            //     email: null,
            //     username: null,
            //     password: null,
            //     role: null
            // })
            Alert.alert("Erro", "Usuário ou senha inválidos")
            return;
        }

        const user = {
            id: response?.id,
            name: response.name, 
            email: response.email, 
            username: response.username, 
            password: response.password, 
            role: response.role
        }

        setUser(user)

        console.log({
            authenticated: true,
            user: user,
            role: user?.role,
        })
    }

    const signOut = () => {
        setUser(null);
    }

    useEffect(() => {
        console.log("Auth " + JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}