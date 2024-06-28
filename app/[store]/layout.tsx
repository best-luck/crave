import { StoreContextProvider } from "@src/contexts/StoreContext";
import { ReactNode } from "react";
import Banner from "@src/components/layout/banner";
import { getEcommerceConfig } from "@src/lib/treez/config";

export default async function Layout({ children, params }: { children: ReactNode, params: { store: string } }) {

  const res = await getEcommerceConfig(params.store);

  return (
    <StoreContextProvider store={res.config}>
      {children}
    </StoreContextProvider>
  );
}