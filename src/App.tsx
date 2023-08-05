import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";
import Players from "./components/players/Players";
import CreatePlayer from "./components/players/CreatePlayer";
import Teams from "./components/teams/Teams";
import CreateTeam from "./components/teams/CreateTeam";
import Managers from "./components/managers/Managers";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
       <Route path="/players" element={<Players />} />
       <Route path="/players/create" element={<CreatePlayer />} />
       <Route path="/teams" element={<Teams />} />
       <Route path="/teams/create" element={<CreateTeam />} />
      <Route path="/managers" element={<Managers />} />
    </Routes>
  );
}
export default App;
