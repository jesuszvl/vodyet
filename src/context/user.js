import { createContext, useContext, useState } from "react";

const Context = createContext();

export function UserProvider({ children }) {
  const [loggedUser, setLoggedUser] = useState(null);
  return (
    <Context.Provider value={[loggedUser, setLoggedUser]}>
      {children}
    </Context.Provider>
  );
}

export function useUserContext() {
  return useContext(Context);
}
