import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-black w-[350px]  mx-auto text-white p-5 mt-2 rounded-2xl relative min-h-[676px]">
      <Outlet />
    </div>
  );
};
export default Layout;
