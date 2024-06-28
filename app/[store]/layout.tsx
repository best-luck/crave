import { StoreContextProvider } from "@src/contexts/StoreContext";
import { ReactNode } from "react";
import Banner from "@src/components/layout/banner";
import { getEcommerceConfig } from "@src/lib/treez/config";
import { setSessionData } from "@src/lib/session/setSession";

export default async function Layout({ children, params }: { children: ReactNode, params: { store: string } }) {

  const res = await getEcommerceConfig(params.store);
  if (res.config) {
    setSessionData("store", params.store);
  }

  return (
    <StoreContextProvider store={res.config}>
      {children}
    </StoreContextProvider>
  );
}