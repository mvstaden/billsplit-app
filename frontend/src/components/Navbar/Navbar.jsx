import { MdHomeFilled } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi2";
import { FaBell } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-b"></div>
      <div className="right-b"></div>
      <div className="navbar-links">
        <MdHomeFilled className="navbar-link" />
      </div>
      <div className="navbar-links">
        <IoWallet className="navbar-link" />
      </div>
      <div className="link-container">
        <CiCirclePlus className="link-add" />
      </div>
      <div className="navbar-links">
        <HiUserGroup className="navbar-link" />
      </div>
      <div className="navbar-links">
        <Link to="/">
          <FaBell className="navbar-link" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
