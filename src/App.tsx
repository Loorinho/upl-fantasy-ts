import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";
import Managers from "./components/managers/Managers";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/players" element={<Players />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/managers" element={<Managers />} />
      </Route>
    </Routes>
  );
}
export default App;
