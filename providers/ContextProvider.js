import React, { useState, useContext, useEffect } from "react";
import useUser from "../hooks/useUser";

const MyContext = React.createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const { user } = useUser({
    redirectTo: false,
    redirectIfFound: true,
  });
  useEffect(() => {
    if (user) setLoggedIn(true);
  }, [user]);

  return (
    <MyContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </MyContext.Provider>
  );
}
