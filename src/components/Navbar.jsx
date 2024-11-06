import { GoHomeFill } from "react-icons/go";
import { IoWallet } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className=" w-full h-16 flex items-center justify-between  relative">
      <div className="absolute border-t border-gray-400 h-1 w-[125px] top-3 right-0"></div>
      <div className="absolute border-t border-gray-400 h-1 w-[125px] border-opacity-45 top-2 "></div>
      <div className="w-8 h-8 mt-3">
        <GoHomeFill className="h-7 w-7 text-yellow-200" />
      </div>
      <div className="w-8 h-8 mt-3 ">
        <IoWallet className="h-7 w-7 text-yellow-200" />
      </div>
      <div className="w-16 h-16 relative  flex justify-center ">
        <CiCirclePlus className="absolute border-t  rounded-full -top-8 h-24 w-24 text-yellow-200" />
      </div>
      <div className="w-8 h-8 mt-3">
        <HiUserGroup className="h-7 w-7 text-yellow-200" />
      </div>
      <div className="w-8 h-8 mt-3">
        <FaBell className="h-7 w-7  text-yellow-200" />
      </div>
    </div>
  );
};

export default Navbar;
