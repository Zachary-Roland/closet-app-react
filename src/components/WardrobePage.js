import React from "react";
import GarmsContainer from "./GarmsContainer";

const Wardrobe = () => {
  return (
    <>
      <h1>My Garms!</h1>
      {/* Within garmscontainer choose between owned or wanted items
      Similar to the filter comp from our TODO app. */}
      <GarmsContainer></GarmsContainer>
    </>
  );
};

export default Wardrobe;
