import { CiUser } from "react-icons/ci";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const UserIcon = () => {
  const { toggleDropdown, isOpen, dropdownRef } = useAppContext();
  return (
    <div>
      <CiUser
        className="h-10 w-10 bg-blue-200 rounded-full p-1 text-black cursor-pointer"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div
          className="absolute right-0 top-8 bg-white text-black p-3 rounded-xl"
          ref={dropdownRef}>
          <ul className="flex flex-col items-center justify-center gap-1">
            <li>
              <Link>Profile</Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <Link to="/">Sign Out</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default UserIcon;
