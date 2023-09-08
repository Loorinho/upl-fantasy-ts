import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./features/login/Login";
import Register from "./features/registration/Register";
import Home from "./features/home/Home";
import Players from "./features/players/Players";
import Layout from "./components/layout/Layout";
import Teams from "./features/teams/Teams";
import Managers from "./features/managers/Managers";
import Table from "./features/tables/Table";
import FixturesList from "./features/fixtures/FixtureList";


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
        <Route path="/log" element={<Table />} />
        <Route path="/fixtures" element={<FixturesList />} />
      </Route>
    </Routes>
  );
}
export default App;
