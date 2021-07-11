import "./App.css";
// Imports for React
import React, { useContext, useState, useStyles } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// Imports for Material UI
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
// Imports for Context
import { UserContext } from "./context";
// Imports for Components
import ProtectedRoute from "./shared/ProtectedRoute";
import Login from "./components/Login";
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
  // Local value state used for Tabs Navigation
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // bringing in User context
  const { user, logout } = useContext(UserContext);
  return (
    <Router>
      <nav>
        <AppBar position="sticky">
          {!user && (
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              variant="fullWidth"
            >
              <Tab
                label="Login"
                to="/login"
                component={NavLink}
                {...a11yProps(0)}
              />
            </Tabs>
          )}
          {user && (
            <Tabs
              value={value}
              indicatorColor="secondary"
              // textColor="white"
              variant="fullWidth"
            >
              <Tab
                label="Add Garm"
                to="/addGarm"
                component={NavLink}
                {...a11yProps(1)}
              />
              <Tab
                label="My Garms"
                to="/myGarms"
                component={NavLink}
                {...a11yProps(2)}
              />
              <Tab
                label="Fits"
                to="/fitBuilder"
                component={NavLink}
                {...a11yProps(3)}
              />
              <Tab
                label="Logout"
                to="/login"
                component={NavLink}
                onClick={() => {
                  logout();
                }}
                {...a11yProps(4)}
              />
            </Tabs>
          )}
        </AppBar>
      </nav>
      <main>
        <Switch>
          <ProtectedRoute path="/login" reqUser={false} loggedInUser={user}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/addGarm" reqUser={true}>
            {/* <TabPanel value={value} index={0}> */}
            <AddGarm />
            {/* </TabPanel> */}
          </ProtectedRoute>
          <ProtectedRoute path="/myGarms" reqUser={true}>
            {/* <TabPanel value={value} index={1}> */}
            <Wardrobe />
            {/* </TabPanel> */}
          </ProtectedRoute>
          <ProtectedRoute path="/fitBuilder" reqUser={true}>
            {/* <TabPanel value={value} index={2}> */}
            <OutfitBuilder />
            {/* </TabPanel> */}
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
