import { useSQLiteContext } from "expo-sqlite";
import { IUser } from "../interfaces/IUser";

export const useUsersDb = () => {

    const database = useSQLiteContext();

    return ({
        authUser: async (username: string, password: string) => {
    
            console.log("username: " + username + " - password: " + password)
    
            try {
                const result = await database.getFirstAsync(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`) as IUser;
                console.log(result)
                return result;
            } catch (error) {
                console.error(error)
                throw error
            }
            
        }
    })
}