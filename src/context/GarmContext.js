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
        if (val.garm_id === id) {
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
      if (own === 0) {
        edit(id, "garm_own", 1);
      }
      if (own === 1) {
        edit(id, "garm_own", 0);
      }
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
