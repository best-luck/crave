"use client";

import { TREEZ_CONFIG_TYPE } from "@src/lib/types/treez/config";
import { ReactNode, createContext, useContext, useEffect, useState } from "react";

const initialState: TREEZ_CONFIG_TYPE = {
  brands: [],
  categories: [],
  shortName: "",
  pickupAddresses: []
};

const StoreContext = createContext<TREEZ_CONFIG_TYPE>(initialState);

export function StoreContextProvider({ children, store } : { children: ReactNode, store: TREEZ_CONFIG_TYPE }) {
  const [config, setConfig] = useState<TREEZ_CONFIG_TYPE>(store);

  return (
    <StoreContext.Provider value={config}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStoreContext() {
  const context = useContext(StoreContext);
  return context;
}

export default StoreContext;