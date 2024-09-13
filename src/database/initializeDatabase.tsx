import { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
    try {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT NOT NULL UNIQUE,
                username TEXT NOT NULL,
                password TEXT NOT NULL DEFAULT 'Mudar@123',
                role TEXT NOT NULL DEFAULT 'USER',
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME
            );
            
            INSERT OR REPLACE INTO users (name, email, username, password, role) VALUES (
                'Patrick',
                'patrick.anjos@gmail.com',
                'patrick.anjos',
                'Mudar@123',
                'ADMIN'
            );

            INSERT OR REPLACE INTO users (name, email, username, password, role) VALUES (
                'Heitor',
                'heitor.alves@gmail.com',
                'heitor.alves',
                'Mudar@123',
                'USER'
            );

            INSERT OR REPLACE INTO users (name, email, username, password, role) VALUES (
                'Miguel',
                'miguel.alves@gmail.com',
                'miguel.alves',
                'Mudar@123',
                'BASIC'
            );

        `);
    } catch (err) {
        console.log(err)
    }
}