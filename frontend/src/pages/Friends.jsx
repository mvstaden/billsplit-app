import { FaArrowLeftLong } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";
import Header from "../components/Header";
import { useState } from "react";

const Friends = () => {
  const { friends } = useAppContext();
  

  return (
    <div className="w-full h-[75%] ">
      <div className="flex items-center justify-between relative ">
        <Header href="/home" heading="Friends" icon={FaArrowLeftLong} />
      </div>
      <div className="flex flex-col gap-4 overflow-scroll no-scrollbar h-full mt-5 p-2">
        {friends.map((friend) => (
          <span
            key={friend.id}
            className="flex items-center shadow-sm shadow-black gap-5 bg-[#1C1E2A] p-3 rounded-2xl">
            <img
              src={friend.image}
              alt=""
              className="w-10 h-10 rounded-full object-cover object-top"
            />
            <span className="flex-1">
              <p className="text-lg">{friend.firstName}</p>
              <p className="text-xs text-gray-400">{friend.lastName}</p>
            </span>
            <span className="flex items-center justify-end gap-2  p-2 ">
              <Link to="/messages">
                <TbMessage className="w-9 h-9 p-2 rounded-full bg-[#ffdd6236] text-[#FFDD62]" />
              </Link>
              <Link to="/editFriend">
                <FaUserEdit className="w-9 h-9 p-2 rounded-full bg-[#ffdd6236] text-[#FFDD62]" />
              </Link>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};
export default Friends;
