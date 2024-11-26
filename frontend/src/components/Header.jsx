import { CiSearch } from "react-icons/ci";

import UserIcon from "./UserIcon";

const Header = () => {
  return (
    <header className="flex items-center gap-2 justify-between">
      <div className="flex items-center rounded-full">
        <CiSearch className="h-10 w-10 border border-gray-500 rounded-full p-1 text-white ml-1 cursor-pointer" />

        <input
          type="text"
          className=" border-none outline-none bg-transparent w-28 p-1 bg-white hidden"
        />
      </div>
      <h2 className="text-2xl">Splitty</h2>
      <UserIcon />
    </header>
  );
};
export default Header;
