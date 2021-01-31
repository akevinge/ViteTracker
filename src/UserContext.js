import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider
      value={{
        loggedIn1: [loggedIn, setLoggedIn],
        userId1: [userId, setUserId],
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
