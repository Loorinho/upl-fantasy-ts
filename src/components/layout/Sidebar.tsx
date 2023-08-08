import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="flex justify-center items-center flex-col h-40 bg-gray-200">
        <p>Loor Jacobson</p>
        <p>Administrator</p>
      </div>
      <div className="nav_items flex justify-center flex-col">
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/managers">Managers</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/log">League Table</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
