import React from "react";
import { Slide } from "@material-ui/core";
import useFetch from "../hooks/useFetch";

const OutfitBuilder = () => {
  const { data, loading, error } = useFetch();
  return (
    <>
      {/* <Slide direction="right" in={true} mountOnEnter unmountOnExit> */}
      <div>OutfitBuilder</div>
      {data && <img src={data.urls.small}></img>}
      {/* </Slide> */}
    </>
  );
};

export default OutfitBuilder;
