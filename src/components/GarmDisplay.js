import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useFetch from "../hooks/useFetch";
import { UserContext } from "../context";

const GarmDisplay = ({ garm, deleteGarm, toggleOwn }) => {
  const { callAPI: deleteGarmCall } = useFetch("DELETE");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user_id } = useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="margin10 garmCard">
      <CardHeader
        action={
          <>
            <IconButton
              aria-label="settings"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Add a Need</MenuItem>
              <MenuItem
                onClick={async () => {
                  let res = await deleteGarmCall("/api/garms/delete", {
                    user_id,
                    garm_id: garm.garm_id,
                  });
                  deleteGarm(res.data);
                  handleClose();
                }}
              >
                Delete Garm
              </MenuItem>
              {garm.garm_own === 0 ? (
                <MenuItem
                  onClick={() => {
                    toggleOwn(garm.garm_id, garm.garm_own);
                    handleClose();
                  }}
                >
                  Mark as "Owned"
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    toggleOwn(garm.garm_id, garm.garm_own);
                    handleClose();
                  }}
                >
                  Mark as "Wanted"
                </MenuItem>
              )}
            </Menu>
          </>
        }
        title={garm.garm_title}
        subheader={`${garm.garm_brand} - $${garm.garm_cost} (${garm.garm_condition})`}
      ></CardHeader>
      <CardMedia image={garm.garm_url} component="img" className="cardImg" />
      {/* <img
        src={garm.img}
        alt={`${garm.title}, ${garm.brand}, ${garm.condition}`}
        className="cardImg"
      ></img> */}
    </Card>
  );
};

export default GarmDisplay;
