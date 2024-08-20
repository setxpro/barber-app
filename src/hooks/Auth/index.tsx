import React, { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../../interfaces/IUser";
import { router } from "expo-router";

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

    const signIn = async (username: string, password: string) => {

        const user = {id: 1, name: 'Patrick', email: 'patrick.anjos@github.com.br', username, password}

        setUser(user)
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