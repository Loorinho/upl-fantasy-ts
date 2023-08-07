import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-2">Sidebar</div>
        <div className="col-span-6">Content</div>
      </div>
    </>
  );
};

export default Layout;
