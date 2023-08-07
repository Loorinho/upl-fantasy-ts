import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";
import Managers from "./components/managers/Managers";
import Layout from "./components/layout/Layout";
import Table from "./components/tables/Table";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/managers" element={<Managers />} />
      </Route>
    </Routes>
  );
}
export default App;
