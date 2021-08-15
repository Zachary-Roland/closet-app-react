import React, { createContext, useState, useCallback } from "react";

export const GarmsContext = createContext(null);

export function GarmsProvider(props) {
  const [garms, setGarms] = useState([]);
  const addGarm = useCallback((toAdd) => {
    setGarms((curr) => [...curr, toAdd]);
  }, []);
  const deleteGarm = useCallback((id) => {
    setGarms((curr) => curr.filter((val) => val.garm_id !== id));
  }, []);
  const edit = useCallback((id, key, newVal) => {
    setGarms((curr) => {
      return curr.map((val) => {
        if (val.id === id) {
          let copy = { ...val };
          // console.log(copy);
          copy[key] = newVal;
          // console.log(copy);
          //   console.log(newVal, copy, copy[key]);
          //   return (copy[key] = newVal);
          return copy;
        }
        return val;
      });
    });
  }, []);
  const toggleOwn = useCallback(
    (id, own) => {
      edit(id, "own", !own);
    },
    [edit]
  );
  //! version of edit function to change the name of a garment NYI
  // const changeName = useCallback(
  //   (id, newName) => {
  //     edit(id, "name", newName);
  //   },
  //   [edit]
  // );

  return (
    <GarmsContext.Provider
      value={{ garms, setGarms, addGarm, deleteGarm, toggleOwn }}
    >
      {props.children}
    </GarmsContext.Provider>
  );
}
