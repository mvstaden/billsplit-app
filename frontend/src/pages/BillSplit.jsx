import { GiAirplaneDeparture } from "react-icons/gi";
import { FaReceipt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import UserIcon from "../components/UserIcon";
const BillSplit = () => {
  return (
    <div className="w-full  ">
      <div className="flex items-center justify-between mb-5 ">
        <Link to="/home">
          <FaArrowLeftLong className="w-5 h-5 ml-3" />
        </Link>
        <h2 className="text-2xl">Bill Splitting</h2>

        <UserIcon />
      </div>
      <section className="flex gap-4 items-center justify-between p-2">
        <div className="flex-1  py-4 bg-[#2D2F3E] rounded-3xl border-2 border-[#5F5269]">
          <div className="flex flex-col items-center gap-0">
            <GiAirplaneDeparture className="h-12 w-12  bg-[#423E5D]  text-[#A786F9] rounded-full p-2" />
            <span className="text-gray-500 text-sm mt-2">Title</span>
            <p className="">Design Tour</p>
          </div>
        </div>
        <div className="flex-1   py-4 bg-[#2D2F3E] rounded-3xl border-2 border-[#5F5269]">
          <div className="flex flex-col items-center gap-0">
            <FaReceipt className="h-12 w-12  bg-[#423E5D]  text-[#A786F9] rounded-full p-3" />
            <span className="text-gray-500 text-sm mt-2">Title</span>
            <p className="">Design Tour</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default BillSplit;
