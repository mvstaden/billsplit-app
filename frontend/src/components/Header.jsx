import { useEffect, useRef, useState } from "react";
import { CiSearch, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown
      }
    };

    // Attach listener when dropdown is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <header className="flex items-center gap-2 justify-between relative">
      <div className=" relative flex items-center  rounded-full">
        <CiSearch
          className="h-10 w-10 border border-gray-500 rounded-full p-1 text-white ml-1 cursor-pointer"
          onClick={handleToggleSearch}
        />
        {isSearchOpen && (
          <>
            <input
              type="text"
              placeholder="Search"
              className=" border-none outline-none bg-transparent w-28 p-1"
            />
            <h2 className="text-2xl">Splitty</h2>
          </>
        )}
      </div>
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
    </header>
  );
};
export default Header;
