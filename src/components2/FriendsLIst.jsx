import initialFriends from "../data";
import Friend from "./Friend";

const FriendsLIst = () => {
  return (
    <div className=" bg-slate-400 p-4">
      {initialFriends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  );
};
export default FriendsLIst;
