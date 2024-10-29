import { FaBell } from "react-icons/fa";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className=" flex justify-between h-14">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="h-7 w-7" />
        <h1 className="text-xl">Splity</h1>
      </div>

      <div className="flex items-center gap-2">
        <span className="bg-gray-400 p-2 bg-opacity-45 rounded-full">
          <FaBell className="  w-3 text-lg" />
        </span>
        <img src={avatar} alt="" className="w-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
