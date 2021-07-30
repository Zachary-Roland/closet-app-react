import React, { createContext, useState, useCallback } from "react";

export const NeedsContext = createContext(null);

export function NeedsProvider(props) {
  const [needs, setNeeds] = useState([]);
  const addNeed = useCallback(() => {
    setNeeds();
  }, []);
  const deleteNeed = useCallback(() => {
    setNeeds();
  }, []);
  return (
    <NeedsContext.Provider value={{ needs, setNeeds, addNeed, deleteNeed }}>
      {props.children}
    </NeedsContext.Provider>
  );
}
