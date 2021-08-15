import React, { useContext, useMemo, useState } from "react";
import GarmDisplay from "./GarmDisplay";
import { GarmsContext } from "../context/GarmContext";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";

//  This container will filter and show either owned or wanted garments
//  add state and selector to pick between owned and wanted
//  2 conditional renders GarmDisplay. One maps through owned garms, other through wanted garms.

const GarmsContainer = () => {
  // closetSelect state is used to show either owned or wanted items.
  const [closetSelect, setClosetSelect] = useState("own");
  const { garms, deleteGarm, toggleOwn } = useContext(GarmsContext);
  // these memos update when the toggleOwn function is run.
  const ownedGarms = useMemo(() => {
    return garms.filter((val) => val.garm_own === 1);
  }, [garms, closetSelect]);
  const wantedGarms = useMemo(() => {
    return garms.filter((val) => val.garm_own === 0);
  }, [garms, closetSelect]);
  return (
    <div className="flex rowWrap flexCenter">
      <div className="select flex100">
        <FormControl>
          <InputLabel id="closetSelectLabel">Show:</InputLabel>
          <Select
            labelId="closetSelectLabel"
            id="closetSelect"
            value={closetSelect}
            onChange={(e) => setClosetSelect(e.target.value)}
          >
            <MenuItem value="own">Owned</MenuItem>
            <MenuItem value="want">Wanted</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* expected outcome w/ hardcoded garm state: 3 wanted, 5 owned */}
      {garms.length === 0 ? (
        <Typography variant="h6" component="h3">
          You don't have any garms! Once you add some, you'll see them here.
        </Typography>
      ) : null}
      {closetSelect === "own"
        ? ownedGarms.map((val) => (
            <GarmDisplay
              key={val.garm_id}
              garm={val}
              deleteGarm={deleteGarm}
              toggleOwn={toggleOwn}
              wantedGarms={wantedGarms}
              ownedGarms={ownedGarms}
            />
          ))
        : wantedGarms.map((val) => (
            <GarmDisplay
              key={val.garm_id}
              garm={val}
              deleteGarm={deleteGarm}
              toggleOwn={toggleOwn}
              ownedGarms={ownedGarms}
              wantedGarms={wantedGarms}
            />
          ))}
    </div>
  );
};

export default GarmsContainer;
