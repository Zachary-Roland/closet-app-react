import React, { useContext, useMemo, useState } from "react";
import GarmDisplay from "./GarmDisplay";
import { GarmsContext } from "../context/GarmContext";

//  This container will filter and show either owned or wanted garments
//  add state and selector to pick between owned and wanted
//  2 conditional renders GarmDisplay. One maps through owned garms, other through wanted garms.

const GarmsContainer = () => {
  // closetSelect state is used to show either owned or wanted items.
  const [closetSelect, setClosetSelect] = useState("own");
  const { garms, deleteGarm, toggleOwn } = useContext(GarmsContext);
  // TODO these memos need to update when the toggleOwn function is run.
  // ! Currently they update but are not moved into the other array..
  const ownedGarms = useMemo(() => {
    return garms.filter((val) => val.own === true);
  }, [garms]);
  const wantedGarms = useMemo(() => {
    return garms.filter((val) => val.own === false);
  }, [garms]);
  return (
    <>
      <div>
        <label>Show: </label>
        <select
          name="closetSelect"
          defaultValue="own"
          value={closetSelect}
          onChange={(e) => setClosetSelect(e.target.value)}
        >
          <option value="own">Owned</option>
          <option value="want">Wanted</option>
        </select>
      </div>
      {/* expected outcome w/ hardcoded garm state: 3 wanted, 5 owned */}
      {closetSelect === "own"
        ? ownedGarms.map((val) => (
            <GarmDisplay
              key={val.id}
              garm={val}
              deleteGarm={deleteGarm}
              toggleOwn={toggleOwn}
            />
          ))
        : wantedGarms.map((val) => (
            <GarmDisplay
              key={val.id}
              garm={val}
              deleteGarm={deleteGarm}
              toggleOwn={toggleOwn}
            />
          ))}
    </>
  );
};

export default GarmsContainer;
