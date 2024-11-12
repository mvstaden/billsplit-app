import { HiUserGroup } from "react-icons/hi2";
import initialFriends from "../data";

const RecentsSplits = () => {
  return (
    <div className="flex items-center bg-slate-600 h-20 px-3 rounded-2xl mb-12">
      <div className="bg-yellow-500 h-14 w-14 flex items-center justify-center rounded-2xl">
        <HiUserGroup className="h-10 w-10 p-2" />
      </div>
      <div className="flex-1 ml-2 -mt-2 ">
        <h3 className="text-lg font-bold tracking-wide">Team Dinner</h3>
        <p className="text-xs text-gray-400">Total Payment ($3600)</p>
      </div>
      <div>
        <div className="flex ml-0 my-3">
          {initialFriends.map((friend) => (
            <img
              key={friend.id}
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
