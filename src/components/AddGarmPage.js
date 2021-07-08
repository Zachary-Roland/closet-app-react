import React, { useContext, useState } from "react";
import { GarmsContext } from "../context/GarmContext";

const AddGarm = () => {
  const [garmName, setGarmName] = useState("");
  const [garmType, setGarmType] = useState("top");
  const [garmCondition, setGarmCondition] = useState("new");
  const [garmBrand, setGarmBrand] = useState("");
  const [garmPrice, setGarmPrice] = useState("");
  const [garmImg, setGarmImg] = useState("");
  const [garmSeason, setGarmSeason] = useState("all");
  const [garmOwn, setGarmOwn] = useState("true");
  const { garms, addGarm } = useContext(GarmsContext);
  const clearForm = () => {
    setGarmName("");
    setGarmType("top");
    setGarmBrand("");
    setGarmPrice("");
    setGarmCondition("new");
    setGarmSeason("all");
    setGarmImg("");
    setGarmOwn(true);
  };
  return (
    <>
      <form>
        {/* Form to input new garment info. Should include Name, Brand, Price Paid, Type, & Condition, and Season, and Owned/Want */}
        <h1>Add a Garm!</h1>
        {/* Garment Name */}
        <div>
          <label htmlFor="garmName">Garment Name: </label>
          <input
            id="garmName"
            value={garmName}
            placeholder={`"White Tee"`}
            onChange={(e) => setGarmName(e.target.value)}
          ></input>
        </div>
        {/* Brand */}
        <div>
          <label htmlFor="garmBrand">Brand: </label>
          <input
            id="garmBrand"
            value={garmBrand}
            placeholder={`"Hanes"`}
            onChange={(e) => setGarmBrand(e.target.value)}
          ></input>
        </div>
        {/* Price */}
        <div>
          <label htmlFor="garmPrice">Price: $</label>
          <input
            id="garmPrice"
            value={garmPrice}
            placeholder={`25`}
            onChange={(e) => setGarmPrice(e.target.value)}
          ></input>
        </div>
        {/* Type */}
        <div>
          <label htmlFor="garmType">Garment Type: </label>
          <select
            name="garmType"
            defaultValue="top"
            value={garmType}
            onChange={(e) => setGarmType(e.target.value)}
          >
            <option value="top">Top</option>
            <option value="bottom">Bottoms</option>
            <option value="outerwear">Outerwear</option>
            <option value="footwear">Footwear</option>
          </select>
        </div>
        {/* Season */}
        <div>
          <label htmlFor="garmSeason">Season: </label>
          <select
            name="garmSeason"
            value={garmSeason}
            defaultValue="all"
            onChange={(e) => setGarmSeason(e.target.value)}
          >
            <option value="all">All Seasons</option>
            <option value="SS">Spring/Summer</option>
            <option value="FW">Fall/Winter</option>
          </select>
        </div>
        {/* Condition */}
        <div>
          <input
            checked={garmCondition === "new"}
            id="new"
            type="radio"
            name="condition"
            value="new"
            onChange={(e) => setGarmCondition(e.target.value)}
          ></input>
          <label htmlFor="new">New</label>
          <input
            checked={garmCondition === "used"}
            id="used"
            type="radio"
            name="condition"
            value="used"
            onChange={(e) => setGarmCondition(e.target.value)}
          ></input>
          <label htmlFor="used">Secondhand</label>
          <input
            checked={garmCondition === "vintage"}
            id="vintage"
            type="radio"
            name="condition"
            value="vintage"
            onChange={(e) => setGarmCondition(e.target.value)}
          ></input>
          <label htmlFor="vintage">Vintage</label>
        </div>
        {/* Owned */}
        <div>
          <input
            checked={garmOwn === "true"}
            id="own"
            type="radio"
            name="owned"
            value="true"
            onChange={(e) => {
              console.log(garmOwn);
              setGarmOwn(e.target.value);
            }}
          ></input>
          <label htmlFor="own">I Own This</label>
          <input
            checked={garmOwn === "false"}
            id="want"
            type="radio"
            name="owned"
            value="false"
            onChange={(e) => {
              console.log(garmOwn);
              setGarmOwn(e.target.value);
            }}
          ></input>
          <label htmlFor="want">I Want This</label>
        </div>
        {/* Image Link */}
        <div>
          <label htmlFor="garmImg">Link to an Image: </label>
          <input
            id="garmImg"
            value={garmImg}
            placeholder={`Paste a URL here!`}
            onChange={(e) => setGarmImg(e.target.value)}
          ></input>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(garms);
            addGarm({
              title: garmName,
              type: garmType,
              brand: garmBrand,
              cost: garmPrice,
              condition: garmCondition,
              season: garmSeason,
              id: "1",
              img: garmImg,
              own: garmOwn,
            });
            clearForm();
            console.log(
              `Name: ${garmName}, Brand: ${garmBrand}, Price: ${garmPrice}, Type: ${garmType}, Condition: ${garmCondition}, Img: ${garmImg}, Own: ${garmOwn}`
            );
          }}
        >
          Add Garm!
        </button>
      </form>
    </>
  );
};

export default AddGarm;
