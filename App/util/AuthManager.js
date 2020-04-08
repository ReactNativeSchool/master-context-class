import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckedAuth(true);
      setSignedIn(Math.random() < 0.5);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const signIn = () => {
    setSignedIn(true);
  };
  const signOut = () => {
    setSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ checkedAuth, isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
