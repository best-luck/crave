import { ReactNode } from "react";
import { StoreContextProvider } from '@src/contexts/StoreContext';
import { AuthContextProvider } from '@src/contexts/AuthContext';
import { CartContextProvider } from '@src/contexts/CartContext';
import { getEcommerceConfig } from '@src/lib/treez/config';
import { getSessionData } from '@src/lib/session/getSession';
import { headers } from 'next/headers';
import PublicLayout from "@src/components/layout/publicLayout";

export default async function Layout({ children }: { children: ReactNode }) {

  const headerList = headers();
  const pathname = headerList.get("x-path");
  const store = pathname?.startsWith("/craveannarbor")?"craveannarbor":"cravemonroe";
  const session = await getSessionData();
  const res = await getEcommerceConfig(store);


  return (
    <StoreContextProvider store={res.config}>
      <CartContextProvider store={store}>
        <AuthContextProvider user={session.user?session.user[store]:null}>
          <PublicLayout>
            {children}
          </PublicLayout>
        </AuthContextProvider>
      </CartContextProvider>
    </StoreContextProvider>
  )
}