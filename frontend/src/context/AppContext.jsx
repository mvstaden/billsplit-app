import { createContext, useEffect, useContext, useRef, useState } from "react";
import initialFriends from "../data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleAddFriend = (friend) => {
    setFriends((currentFriends) => [...currentFriends, friend]);
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
    console.log("I am not running the whole time");
    // Clean up the listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <AppContext.Provider
      value={{
        isOpen,
        setIsOpen,
        dropdownRef,
        isSearchOpen,
        setIsSearchOpen,
        handleToggleSearch,
        toggleDropdown,
        friends,
        handleAddFriend,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
