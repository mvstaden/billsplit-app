import { GiAirplaneDeparture } from "react-icons/gi";
import { FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import UserIcon from "../components/UserIcon";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
const BillSplit = () => {
  const [payAmount, setPayAmount] = useState(0);
  const [bill, setBill] = useState(535);
  const { friends } = useAppContext();
  return (
    <div className="w-full h-[75%]">
      <div className="flex items-center justify-between mb-5 ">
        <Link to="/home">
          <FaArrowLeftLong className="w-5 h-5 ml-3" />
        </Link>
        <h2 className="text-2xl">Bill Splitting</h2>

        <UserIcon />
      </div>
      <section className="flex w-full gap-4 items-center justify-between ">
        <div className="flex-1 py-3 bg-[#2D2F3E] rounded-3xl border-2 border-[#5F5269]">
          <div className="flex flex-col items-center gap-0">
            <GiAirplaneDeparture className="h-12 w-12  bg-[#423E5D]  text-[#A786F9] rounded-full p-2" />
            <span className="text-gray-500 text-sm mt-2">Title</span>
            <p className="">Design Tour</p>
          </div>
        </div>
        <div className="flex-1 py-3 bg-[#2D2F3E] rounded-3xl border-2 border-[#5F5269]">
          <div className="flex flex-col items-center gap-0">
            <FaReceipt className="h-12 w-12  bg-[#423E5D]  text-[#A786F9] rounded-full p-3" />
            <span className="text-gray-500 text-sm mt-2">Total Bill</span>
            <p className="">${bill}</p>
          </div>
        </div>
      </section>
      <section className="bg-[#2D2F3E] p-2 border-2 border-dashed border-gray-500   mt-4 rounded-3xl flex flex-col items-center justify-center gap-2">
        <h3 className="text-xl capitalize">Spltting with 4 friends</h3>
        <div className="flex items-center gap-3 ">
          {friends.slice(0, 4).map((friend) => (
            <div key={friend.div}>
              <img
                className="w-10 h-10 rounded-full object-cover object-top"
                src={friend.image}
                alt={friend.firstName}
              />
              <p className="text-center">{friend.firstName}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Price range */}
      <section className="flex flex-col h-[40%] gap-2 overflow-y-scroll mt-5 no-scrollbar">
        {friends.map((friend) => (
          <div key={friend.id} className=" flex w-full p-1 gap-2 items-center">
            <img
              className="w-10 h-10 rounded-full object-cover object-top"
              src={friend.image}
              alt={friend.firstName}
            />
            <div className="flex-1">
              <span className="flex justify-between items-center">
                <h3>{friend.firstName} (25%)</h3>
                <p>${payAmount}</p>
              </span>
              <input
                type="range"
                value={payAmount}
                min={0}
                max={1000}
                onChange={(e) => setPayAmount(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default BillSplit;
