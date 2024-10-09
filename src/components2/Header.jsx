import { FaBell } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span>
          <img src={logo} alt="" className="h-7 w-7 p-0 " />
        </span>
        <h1 className="text-2xl text-center py-2"> Splitty</h1>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-slate-300 bg-opacity-45 p-4 rounded-full ">
          <FaBell className="text-1xl text-white" />
        </span>
        <img src={avatar} alt="" width="50" className="rounded-full" />
      </div>
    </nav>
  );
};
export default Header;
