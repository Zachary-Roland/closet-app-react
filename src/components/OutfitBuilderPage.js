import React from "react";
import { Slide } from "@material-ui/core";

const OutfitBuilder = () => {
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <div>OutfitBuilder</div>
    </Slide>
  );
};

export default OutfitBuilder;
