import { useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggleUserMenu, setToggleUserMenu] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <CiSearch className="text-xl" />
      </div>
      <div className=" bg-slate-400 rounded-full w-8 h-8 flex items-center justify-center relative">
        <CiUser
          className="text-3xl p-1 cursor-pointer"
          onClick={() => setToggleUserMenu(!toggleUserMenu)}
        />
        {toggleUserMenu && (
          <div className="absolute bg-white text-black top-10 right-0 rounded-xl p-1 w-20">
            <ul className="flex flex-col justify-center items-center gap-2 text-sm">
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
              <li>
                <Link to="/landingpage">Signout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
