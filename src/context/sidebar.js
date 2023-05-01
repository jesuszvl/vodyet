import { createContext, useContext, useState } from "react";

const Context = createContext();

export function SidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Context.Provider value={[showSidebar, setShowSidebar]}>
      {children}
    </Context.Provider>
  );
}

export function useSidebarContext() {
  return useContext(Context);
}
