import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Home";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
       <Route path="/players" element={<Players />} />
    </Routes>
  );
}
export default App;
