import { BrowserRouter, Route, Routes } from "react-router";
import "./styles/App.css";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Home from "./pages/home";
import CharacterDetail from "./pages/CharacterDetail";
import LocationDetail from "./pages/LocationDetail";
import Episodes from "./pages/Episodes";
import EpisodeDetail from "./pages/EpisodeDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/characters/page/:page" element={<Characters/>}></Route>
      <Route path="/characters/page/detail/:id" element={<CharacterDetail />} />
      <Route path="/locations/page/:page" element={<Locations/>}></Route>
      <Route path="/locations/page/detail/:id" element={<LocationDetail/>}></Route>
      <Route path="/episodes/page/:page" element={<Episodes/>}></Route>
      <Route path="/episodes/page/detail/:id" element={<EpisodeDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
