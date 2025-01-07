import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#445761] w-screen h-screen flex items-center justify-center p-20 text-white">
      <div className="bg-gradient-to-br from-[#1c2635] via-[#000000] to-[#1c2635] h-full w-[350px] min-h-[650px] rounded-[40px] p-5 relative ">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
