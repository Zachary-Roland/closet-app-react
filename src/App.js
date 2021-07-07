import "./App.css";
import AddGarm from "./components/AddGarmPage";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import GarmDisplay from "./components/GarmDisplay";
import GarmsContainer from "./components/GarmsContainer";
import OutfitBuilder from "./components/OutfitBuilderPage";
import Wardrobe from "./components/WardrobePage";

function App() {
  return (
    <Router>
      <nav>
        <NavLink
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
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route path="/addGarm">
            <AddGarm />
          </Route>
          <Route path="/myGarms">
            <Wardrobe />
          </Route>
          <Route path="/fitBuilder">
            <OutfitBuilder />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
