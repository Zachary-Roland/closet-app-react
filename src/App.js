import "./App.css";
import AddGarm from "./components/AddGarmPage";
import GarmDisplay from "./components/GarmDisplay";
import GarmsContainer from "./components/GarmsContainer";
import OutfitBuilder from "./components/OutfitBuilderPage";
import Wardrobe from "./components/WardrobePage";

function App() {
  return (
    <>
      <AddGarm />
      <GarmDisplay />
      <GarmsContainer />
      <OutfitBuilder />
      <Wardrobe />
    </>
  );
}

export default App;
