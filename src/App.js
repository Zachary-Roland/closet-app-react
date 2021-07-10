import "./App.css";
import React, { useState, useStyles } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  NavLink,
  // Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
import AddGarm from "./components/AddGarmPage";
import OutfitBuilder from "./components/OutfitBuilderPage";
import Wardrobe from "./components/WardrobePage";

// Not sure what a11yProps does but it is needed for the Tabs
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [value, setValue] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //     backgroundColor: theme.palette.background.paper,
  //   },
  // }));
  return (
    <Router>
      <nav>
        <AppBar position="sticky">
          <Tabs
            value={value}
            indicatorColor="primary"
            // textColor="white"
            variant="fullWidth"
          >
            <Tab
              label="Add Garm"
              to="/addGarm"
              component={NavLink}
              {...a11yProps(0)}
            />
            <Tab
              label="My Garms"
              to="/myGarms"
              component={NavLink}
              {...a11yProps(1)}
            />
            <Tab
              label="Fits"
              to="/fitBuilder"
              component={NavLink}
              {...a11yProps(2)}
            />
          </Tabs>
          {/* <NavLink
            activeClassName="active"
            className="link text-center"
            to="/addGarm"
          >
            Add Garm
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/myGarms"
          >
            My Garms
          </NavLink>
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/fitBuilder"
          >
            Fit Builder
          </NavLink> */}
        </AppBar>
      </nav>
      <main>
        <Switch>
          <Route path="/addGarm">
            {/* <TabPanel value={value} index={0}> */}
            <AddGarm />
            {/* </TabPanel> */}
          </Route>
          <Route path="/myGarms">
            {/* <TabPanel value={value} index={1}> */}
            <Wardrobe />
            {/* </TabPanel> */}
          </Route>
          <Route path="/fitBuilder">
            {/* <TabPanel value={value} index={2}> */}
            <OutfitBuilder />
            {/* </TabPanel> */}
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
