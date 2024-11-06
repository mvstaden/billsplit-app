import { HiUserGroup } from "react-icons/hi2";
import initialFriends from "../data";

const RecentsSplits = () => {
  return (
    <div className="flex items-center bg-slate-600 h-20 px-3 rounded-2xl mb-10">
      <div className="bg-yellow-500 h-14 w-14 flex items-center justify-center rounded-2xl">
        <HiUserGroup className="h-10 w-10 p-2" />
      </div>
      <div className="flex-1 ml-4 -mt-3 ">
        <h3 className="text-lg font-bold tracking-wide">Team Dinner</h3>
        <p className="text-xs mt-1 text-gray-400">Total Payment ($3600)</p>
      </div>
      <div>
        <div className="flex ml-0 my-3">
          {initialFriends.map((friend) => (
            <img
              key={friend.name}
              src={friend.image}
              alt={friend.name}
              className="h-9 w-() flex rounded-full -ml-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentsSplits;
