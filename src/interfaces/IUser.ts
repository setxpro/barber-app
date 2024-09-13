export interface IUser {
        id: number | null;
        name: string | null;
        email: string | null;
        username: string | null;
        password: string | null;
        role: string | null;
}

export interface UserResponse {
        authenticated: boolean;
        user: IUser | null;
        role: string;
}