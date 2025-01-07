import { Link } from "react-router-dom";
import UserIcon from "./UserIcon";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex items-center gap-2 justify-between">
      <Link to="/home">
        <h2 className="text-2xl">Splitty</h2>
      </Link>
      <div className="relative flex items-center justify-center bg-white p-1 rounded-md">
        <input
          className="bg-transparent ml-4 outline-none  w-[85%] text-black"
          placeholder="Search"
        />
        <CiSearch className="absolute text-2xl top-1 text-blue-500 left-0 " />
      </div>
      <UserIcon />
    </header>
  );
};
export default Header;
