import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [isSignedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCheckedAuth(true);
      if (Math.random() < 0.5) {
        signIn();
      } else {
        signOut();
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const signIn = () => {
    setSignedIn(true);
    setUser({
      name: "Spencer",
    });
  };
  const signOut = () => {
    setSignedIn(false);
    setUser();
  };

  return (
    <AuthContext.Provider
      value={{ checkedAuth, isSignedIn, signIn, signOut, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
