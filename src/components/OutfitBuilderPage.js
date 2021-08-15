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
      <Paper className="margin10 compCenter margin10 flex rowWrap flexCenter">
        <div className="margin10 flex100 flex flexCenter">
          <Typography variant="h4" component="h4">
            This is the Fit Builder!
          </Typography>
        </div>
        <Typography
          variant="body1"
          style={{ margin: "20px", maxWidth: "350px" }}
        >
          Eventually you'll be able to combine your added garms into groups to
          create outfits!
        </Typography>
        {loading && <CircularProgress />}
        {data && <img src={data.urls.small}></img>}
      </Paper>
    </Slide>
  );
};

export default OutfitBuilder;
