import { SQLiteProvider } from "expo-sqlite";
import { createContext, useContext, useState } from "react";
import { initializeDatabase } from "../../database/initializeDatabase";

type ChildrenType = {
    children: React.JSX.Element;
}

type DataType = {
    data: boolean;
}

export const DataContext = createContext({} as DataType);

export function DataProvider({children}: ChildrenType) {

    const [data, setData] = useState<boolean>(false)

    return (
        <DataContext.Provider value={{data}}>
        <SQLiteProvider databaseName="barber.db" onInit={initializeDatabase}>
            {children}
        </SQLiteProvider>
        </DataContext.Provider>
    )
}

export function useData() {

    const context = useContext(DataContext);

    if (!context) {
        throw new Error("useData must be used within a DataProvider")
    }

    return context;
}