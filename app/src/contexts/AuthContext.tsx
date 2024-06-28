"use client";

import { getEcommerceConfig } from "@src/lib/treez/config";
import { TREEZ_CONFIG_TYPE } from "@src/lib/types/treez/config";
import { USER_TYPE } from "@src/lib/types/treez/customer";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface AUTH_CONTEXT_DATA {
  user: USER_TYPE | null | undefined;
}

const initialState: AUTH_CONTEXT_DATA = {
  user: null
};

const AuthContext = createContext<AUTH_CONTEXT_DATA>(initialState);

export function AuthContextProvider({ children, user } : { children: ReactNode, user: USER_TYPE | null | undefined }) {
  const [data, setData] = useState<AUTH_CONTEXT_DATA>({
    user
  });

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(AuthContext);
  return context;
}

export default AuthContext;