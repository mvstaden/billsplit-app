import { FaUserGroup, FaWallet } from "react-icons/fa6";
import { FaBell, FaHome } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <footer className="absolute bottom-0 left-0 p-3  w-full">
      <nav className=" relative p-3">
        <div className="flex justify-between ">
          <div className="absolute border-t opacity-40 border-gray-400 w-[136px] -left-2 -top-1"></div>
          <div className="absolute border-t opacity-40 border-gray-400 w-[136px] -right-2 -top-1"></div>

          <span>
            <Link to="/home">
              <FaHome className="w-6 h-6 text-gray-600 cursor-pointer" />
            </Link>
          </span>
          <span>
            <FaWallet className="w-6 h-6 text-gray-600 cursor-pointer" />
          </span>
          <span className="">
            <Link to="/add-Friend">
              <GoPlus className=" absolute rounded-full bg-[#FFDD62] p-3 left-[41%] -top-8 text-black cursor-pointer h-16 w-16" />
            </Link>
          </span>
          <span>
            <Link to="/friends">
              <FaUserGroup className="cursor-pointer w-6 h-6 text-gray-600" />
            </Link>
          </span>
          <span>
            <FaBell className="w-6 h-6 text-gray-600 cursor-pointer" />
          </span>
        </div>
      </nav>
    </footer>
  );
};
export default Navbar;
