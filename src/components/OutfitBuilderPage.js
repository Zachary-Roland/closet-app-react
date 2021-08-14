// Imports for React
import React, { useEffect } from "react";
// Imports for Material UI
import { Slide, CircularProgress, Paper, Typography } from "@material-ui/core";
import useFetch from "../hooks/useFetch";

const OutfitBuilder = ({ setValue }) => {
  const { data, loading, error } = useFetch();
  useEffect(() => {
    setValue(2);
  }, []);
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Paper className="margin10 compCenter">
        <Typography variant="h3" component="h1">
          Here's some random inspiration!
        </Typography>
        <Typography variant="h6" component="h1">
          Eventually you'll be able to build an outfit here...
        </Typography>
        {loading && <CircularProgress />}
        {data && <img src={data.urls.small}></img>}
      </Paper>
    </Slide>
  );
};

export default OutfitBuilder;
