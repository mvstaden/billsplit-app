import initialFriends from "../data";
import { GiCommercialAirplane } from "react-icons/gi";
const SelectedBill = () => {
  return (
    <div className="bg-red-900 w-full px-2 rounded-2xl bg-opacity-75  border-2 border-red-800 flex items-center  h-40 mb-6">
      <div className=" flex-1 ">
        <h2 className="text-2xl ">Split With</h2>
        <div className="flex ml-0 my-3">
          {initialFriends.map((friend) => (
            <img
              key={friend.id}
              src={friend.image}
              alt={friend.name}
              className="h-8 w-8 rounded-full"
            />
          ))}
        </div>
        <button className="px-5 py-2 text-black bg-yellow-300 rounded-full ">
          Split Now
        </button>
      </div>
      <div className="flex flex-col gap-1 rounded-2xl border-2 border-dashed border-yellow-300 text-center p-1 ">
        <h4 className="text-sm">Total Bill</h4>
        <p className="text-xl">$600.00</p>

        <span className="flex w-20 items-center justify-center ">
          <GiCommercialAirplane className=" text-yellow-400 bg-yellow-100 shadow-[-1px_1px_30px_6px_#f6e05e] rounded-full w-10 h-10 p-2 bg-opacity-45" />
        </span>
        <p className="text-xs">Design Tour</p>
      </div>
    </div>
  );
};

export default SelectedBill;
