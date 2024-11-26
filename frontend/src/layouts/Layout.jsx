import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#445761] w-screen h-screen flex items-center justify-center p-20 text-white">
      <div className="bg-black h-full min-w-[350px] min-h-[650px] md:min-h-[550px] md:min-w-[700px] rounded-[40px] p-5 relative ">
        <Outlet />
        <Navbar />
      </div>
    </div>
  );
};
export default Layout;
