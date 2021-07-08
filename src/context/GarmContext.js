import React, { createContext, useState, useCallback } from "react";

export const GarmsContext = createContext(null);

export function GarmsProvider(props) {
  const [garms, setGarms] = useState([
    {
      title: "Peace Pants",
      type: "bottoms",
      brand: "Story MFG",
      cost: 450,
      condition: "new",
      season: "SS",
      id: "1",
      img: "./images/peacepants.webp",
    },
    {
      title: "Straight Leg Denim",
      type: "bottoms",
      brand: "Studio D'Artisan",
      cost: 300,
      condition: "vintage",
      season: "FW",
      id: "2",
      img: "./images/jeans.jpg",
    },
    {
      title: "Olive Chore Coat",
      type: "outerwear",
      brand: "Paynter Jacket Co.",
      cost: 195,
      condition: "vintage",
      season: "FW",
      id: "3",
      img: "./images/paynterjacket.webp",
    },
    {
      title: "Polite Pullover",
      type: "outerwear",
      brand: "Story MFG",
      cost: 400,
      condition: "new",
      season: "FW",
      id: "4",
      img: "./images/politepullover.webp",
    },
    {
      title: "Maritime Shirt",
      type: "top",
      brand: "Taylor Stitch",
      cost: 125,
      condition: "used",
      season: "all",
      id: "5",
      img: "./images/denimshirt.jpg",
    },
    {
      title: "White T-Shirt",
      type: "top",
      brand: "Taylor Stitch",
      cost: 45,
      condition: "used",
      season: "all",
      id: "6",
      img: "./images/whitetee.jpg",
    },
    {
      title: "Work Boots",
      type: "footwear",
      brand: "Oak Street Boots",
      cost: 295,
      condition: "new",
      season: "FW",
      id: "7",
      img: "./images/boots.jpg",
    },
    {
      title: "White High-tops",
      type: "footwear",
      brand: "Converse",
      cost: 75,
      condition: "new",
      season: "all",
      id: "8",
      img: "./images/converse.jpg",
    },
  ]);
  const addGarm = useCallback((toAdd) => {
    setGarms((curr) => [...curr, toAdd]);
  }, []);
  const deleteGarm = useCallback((id) => {
    setGarms((curr) => curr.filter((val) => val.id !== id));
  }, []);
  return (
    <GarmsContext.Provider value={{ garms, addGarm, deleteGarm }}>
      {props.children}
    </GarmsContext.Provider>
  );
}
