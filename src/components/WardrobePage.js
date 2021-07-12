// Imports for React
import React from "react";
// Imports for Components
import GarmsContainer from "./GarmsContainer";
// Imports for Material UI
import { Paper, Typography, Slide } from "@material-ui/core";

const Wardrobe = () => {
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Paper className="margin10 compCenter">
        <Typography variant="h3" component="h1">
          My Garms!
        </Typography>
        {/* Within garmscontainer choose between owned or wanted items
      Similar to the filter comp from our TODO app. */}
        <GarmsContainer></GarmsContainer>
      </Paper>
    </Slide>
  );
};

export default Wardrobe;
