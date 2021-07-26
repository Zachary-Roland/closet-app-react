import "./App.css";
// Imports for React
import React, { useContext, useEffect, useState, useStyles } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// Imports for Material UI
import "@fontsource/roboto";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import a11yProps from "./shared/A11yProps";
import TabPanel from "./shared/TabPanel";
import { AppBar, Tabs, Tab, Box, Typography } from "@material-ui/core";
// Imports for Context
import { GarmsContext, UserContext, NeedsContext } from "./context";
// Imports for Components
import ProtectedRoute from "./shared/ProtectedRoute";
import Login from "./components/Login";
import AddGarm from "./components/AddGarmPage";
import OutfitBuilder from "./components/OutfitBuilderPage";
import Wardrobe from "./components/WardrobePage";
import useFetch from "./hooks/useFetch";

const oliveAqua = createTheme({
  palette: {
    primary: {
      light: "#60ad5e",
      main: "#2e7d32",
      dark: "#005005",
      contrastText: "#fff",
    },
    secondary: {
      light: "#42a5f5",
      main: "#42a5f5",
      dark: "#0077c2",
      contrastText: "#000",
    },
  },
});
function App() {
  const { callAPI: getGarms } = useFetch("GET");
  // Local value state used for Tabs Navigation
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // bringing in User context
  const { user, logout, user_id } = useContext(UserContext);
  const { clearGarms, setGarms } = useContext(GarmsContext);
  const { setNeeds, clearNeeds } = useContext(NeedsContext);

  useEffect(() => {
    if (user_id === null) {
      return;
    }
    async function call() {
      const res = await getGarms("/api/garms/user");
      if (!res.success) {
        return console.error(res.error);
      }
      setGarms(res.data);
    }
    call();
  }, [user_id]);

  return (
    <ThemeProvider theme={oliveAqua}>
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
                    clearGarms();
                    clearNeeds();
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
    </ThemeProvider>
  );
}

export default App;
