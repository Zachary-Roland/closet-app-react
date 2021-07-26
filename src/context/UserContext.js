import React, { createContext, useState, useCallback } from "react";

export const UserContext = createContext(null);

export function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [user_id, setUser_id] = useState(null);
  const login = useCallback((username, id) => {
    setUser(username);
    setUser_id(id);
  }, []);
  const logout = useCallback(() => {
    setUser(null);
    setUser_id(null);
  }, []);
  return (
    <UserContext.Provider value={{ user, user_id, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
