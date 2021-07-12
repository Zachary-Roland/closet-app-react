import React, { useContext, useState } from "react";
import { GarmsContext } from "../context/GarmContext";
import {
  Paper,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  Radio,
  Button,
  Slide,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { InputAdornment } from "@material-ui/core";

const AddGarm = () => {
  // states for constructing Garm object
  const [garmName, setGarmName] = useState("");
  const [garmID, setGarmID] = useState(9);
  const [garmType, setGarmType] = useState("top");
  const [garmCondition, setGarmCondition] = useState("new");
  const [garmBrand, setGarmBrand] = useState("");
  const [garmPrice, setGarmPrice] = useState("");
  const [garmImg, setGarmImg] = useState("");
  const [garmSeason, setGarmSeason] = useState("all");
  const [garmOwn, setGarmOwn] = useState("true");
  // importing garm context
  const { garms, addGarm } = useContext(GarmsContext);
  const clearForm = () => {
    setGarmName("");
    setGarmType("top");
    setGarmBrand("");
    setGarmPrice("");
    setGarmCondition("new");
    setGarmSeason("all");
    setGarmImg("");
    setGarmOwn("true");
    setGarmID(garmID + 1);
  };
  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
      <Paper className="margin10">
        <form>
          {/* Form to input new garment info. Should include Name, Brand, Price Paid, Type, & Condition, and Season, and Owned/Want */}
          <div className="margin10">
            <Typography variant="h3" component="h1">
              Add a Garm!
            </Typography>
          </div>
          {/* Garment Name */}
          <div className="margin10">
            <TextField
              variant="outlined"
              label="Garment Name:"
              value={garmName}
              size="small"
              onChange={(e) => setGarmName(e.target.value)}
            />
          </div>
          {/* Brand */}
          <div className="margin10">
            <TextField
              variant="outlined"
              label="Brand:"
              value={garmBrand}
              onChange={(e) => setGarmBrand(e.target.value)}
              size="small"
            />
          </div>
          {/* Price */}
          <div className="margin10">
            <TextField
              variant="outlined"
              label="Price:"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              size="small"
              value={garmPrice}
              onChange={(e) => setGarmPrice(e.target.value)}
            />
          </div>
          {/* Type */}
          <div className="margin10">
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel id="garmTypeLabel">Garment Type:</InputLabel>
              <Select
                labelId="garmTypeLabel"
                id="garmType"
                value={garmType}
                onChange={(e) => setGarmType(e.target.value)}
              >
                <MenuItem value="top">Top</MenuItem>
                <MenuItem value="bottoms">Bottoms</MenuItem>
                <MenuItem value="outerwear">Outerwear</MenuItem>
                <MenuItem value="footwear">Footwear</MenuItem>
                <MenuItem value="accessories">Accessories</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Season */}
          <div className="margin10">
            <FormControl style={{ minWidth: 120 }}>
              <InputLabel id="garmSeasonLabel">Season:</InputLabel>
              <Select
                labelId="garmSeasonLabel"
                id="garmSeason"
                value={garmSeason}
                onChange={(e) => setGarmSeason(e.target.value)}
              >
                <MenuItem value="all">All Seasons</MenuItem>
                <MenuItem value="ss">Spring/Summer</MenuItem>
                <MenuItem value="fw">Fall/Winter</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Condition */}
          <div className="margin10">
            <FormControl component="fieldset">
              <FormLabel component="legend">Condition:</FormLabel>
              <RadioGroup
                aria-label="condition"
                name="condition"
                value={garmCondition}
                onChange={(e) => setGarmCondition(e.target.value)}
              >
                <FormControlLabel value="new" control={<Radio />} label="New" />
                <FormControlLabel
                  value="used"
                  control={<Radio />}
                  label="Used"
                />
                <FormControlLabel
                  value="vintage"
                  control={<Radio />}
                  label="Vintage"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Owned */}
          <div className="margin10">
            <FormControl component="fieldset">
              <FormLabel component="legend">Owned:</FormLabel>
              <RadioGroup
                aria-label="owned"
                name="owned"
                value={garmOwn}
                onChange={(e) => {
                  setGarmOwn(e.target.value);
                }}
              >
                <FormControlLabel
                  checked={garmOwn === "true" ? true : false}
                  value={true}
                  control={<Radio />}
                  label="I Own This"
                />
                <FormControlLabel
                  checked={garmOwn === "false" ? true : false}
                  value={false}
                  control={<Radio />}
                  label="I Want This"
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* Image Link */}
          <div className="margin10">
            <TextField
              variant="outlined"
              label="Link to an Image:"
              value={garmImg}
              size="small"
              onChange={(e) => setGarmImg(e.target.value)}
            />
          </div>
          {/* <Button
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
              id: "9",
              img: garmImg,
              own: garmOwn === "true" ? true : false,
            });
            clearForm();
            console.log(
              `Name: ${garmName}, Brand: ${garmBrand}, Price: ${garmPrice}, Type: ${garmType}, Condition: ${garmCondition}, Img: ${garmImg}, Own: ${garmOwn}`
            );
          }}
        >
          Add Garm!
        </Button> */}
        </form>
        <Fab
          style={{ margin: 10, position: "right" }}
          position="right"
          color="primary"
          aria-label="add"
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
              id: garmID,
              img: garmImg,
              own: garmOwn === "true" ? true : false,
            });
            clearForm();
            console.log(
              `Name: ${garmName}, Brand: ${garmBrand}, Price: ${garmPrice}, Type: ${garmType}, Condition: ${garmCondition}, Img: ${garmImg}, Own: ${garmOwn}. ID: ${garmID}`
            );
          }}
        >
          <AddIcon />
        </Fab>
      </Paper>
    </Slide>
  );
};

export default AddGarm;
