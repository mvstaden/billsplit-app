import { CiSearch, CiUser } from "react-icons/ci";
const Header = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <CiSearch className="text-xl" />
      </div>
      <div className=" bg-slate-400 rounded-full w-8 h-8 flex items-center justify-center">
        <CiUser className="text-3xl p-1 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
