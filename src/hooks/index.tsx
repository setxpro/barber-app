import { AuthProvider } from "./Auth";
import { DataProvider } from "./Data";
import { FontProvider } from "./Font";

type ChildrenType = {
  children: React.JSX.Element;
};

export function AppProvider({ children }: ChildrenType) {
  return (
    <FontProvider>
      <DataProvider>
        <AuthProvider>{children}</AuthProvider>
      </DataProvider>
    </FontProvider>
  );
}
