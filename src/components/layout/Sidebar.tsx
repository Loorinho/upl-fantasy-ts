import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
  <div className="sidebar">
    <div className="flex justify-center items-center flex-col">
      <p>Loor Jacobson</p>
      <p>Administrator</p>
    </div>
    <div className="nav_items">
      <NavLink to="/players">Players</NavLink>
      <NavLink to="/managers">Managers</NavLink>
      <NavLink to="/teams">Teams</NavLink>
    </div>
  </div>
 );
};

export default Sidebar;
