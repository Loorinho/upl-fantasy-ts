import Header from "./Header";
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-2">Sidebar</div>
        <div className="col-span-6">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
