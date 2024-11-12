import { MdHomeFilled } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className=" w-full h-16 flex items-center justify-between  relative">
      <div className="absolute border-t border-opacity-45 border-yellow-200 h-1 w-[120px] top-2 right-0"></div>
      <div className="absolute border-t border-yellow-200 h-1 w-[120px] border-opacity-45 top-2 "></div>
      <div className="w-8 h-8 mt-3">
        <MdHomeFilled
          className="h-9 w-9 p-1 
          cursor-pointer text-yellow-200 rounded-full hover:shadow-md hover:shadow-yellow-200"
        />
      </div>
      <div className="w-8 h-8 mt-3 ">
        <IoWallet
          className="h-9 w-9 p-1 
          cursor-pointer text-yellow-200 rounded-full hover:shadow-md hover:shadow-yellow-200"
        />
      </div>
      <div className="w-16 h-16 relative  flex justify-center ">
        <CiCirclePlus className="absolute  cursor-pointer rounded-full -top-8 h-24 w-24 text-yellow-200 hover:shadow-md hover:shadow-yellow-200" />
      </div>
      <div className="w-8 h-8 mt-3">
        <HiUserGroup
          className="h-9 w-9 p-1 
          cursor-pointer text-yellow-200 rounded-full hover:shadow-md hover:shadow-yellow-200"
        />
      </div>
      <div className="w-8 h-8 mt-3">
        <Link className="cursor-pointer">
          <FaBell
            className="h-9 w-9 p-1
          cursor-pointer text-yellow-200 rounded-full hover:shadow-md hover:shadow-yellow-200"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
