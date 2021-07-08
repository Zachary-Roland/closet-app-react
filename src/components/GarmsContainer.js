import React, { useContext, useMemo, useState } from "react";
import GarmDisplay from "./GarmDisplay";
import { GarmsContext } from "../context/GarmContext";

// ! This container will filter and show either owned or wanted garments
// TODO add state and selector to pick between owned and wanted
// TODO 2 conditional renders GarmDisplay. One maps through owned garms, other through wanted garms.

const GarmsContainer = () => {
  // ! the map function will be simlilar to this function from the todo app
  // ! but for owned key instead of ID
  // const faveIds = useMemo(() => {
  //   return favorites.map((val) => val.id);
  // }, [favorites]);
  const [closetSelect, setClosetSelect] = useState("own");
  const { garms } = useContext(GarmsContext);
  const ownedGarms = useMemo(() => {
    return garms.filter((val) => val.own === "true");
  }, [garms]);
  const wantedGarms = useMemo(() => {
    return garms.filter((val) => val.own === "false");
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
        ? ownedGarms.map(() => <GarmDisplay />)
        : wantedGarms.map(() => <GarmDisplay />)}
    </>
  );
};

export default GarmsContainer;
