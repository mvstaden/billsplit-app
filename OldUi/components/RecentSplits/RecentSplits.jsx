import { HiUserGroup } from "react-icons/hi2";
import initialFriends from "../../data";

import "./RecentSplits.css";

const RecentSplits = () => {
  return (
    <div className="rs">
      <h3 className="rs-title">Recent Splits</h3>
      <div className="rs-container">
        <div className="rs-icon">
          <HiUserGroup className="" />
        </div>
        <div className="rs-info">
          <h4 className="">Team Dinner</h4>
          <p className="">Total Payment ($3600)</p>
        </div>
        <div>
          <div className="rs-img">
            {initialFriends.map((friend) => (
              <img
                key={friend.id}
                src={friend.image}
                alt={friend.name}
                className=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSplits;
