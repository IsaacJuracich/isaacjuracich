import React, { useState, useContext, useEffect } from "react";
import useUser from "../hooks/useUser";

const MyContext = React.createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function MyProvider({ children }) {
  const [isBlurred, setBlurred] = useState(false);

  return (
    <MyContext.Provider value={{ isBlurred, setBlurred }}>
      {children}
    </MyContext.Provider>
  );
}
