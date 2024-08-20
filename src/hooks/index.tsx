import { AuthProvider } from "./Auth";
import { FontProvider } from "./Font";

type ChildrenType = {
    children: React.JSX.Element;
}

export function AppProvider({children}: ChildrenType) {
    return <FontProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </FontProvider>;
}