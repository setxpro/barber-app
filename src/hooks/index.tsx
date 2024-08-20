import { FontProvider } from "./Font";

export function AppProvider({children}: any) {
    return <FontProvider>{children}</FontProvider>;
}