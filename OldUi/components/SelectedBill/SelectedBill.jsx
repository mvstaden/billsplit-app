import initialFriends from "../../data";
import { GiCommercialAirplane } from "react-icons/gi";
import "./SelectedBill.css";
const SelectedBill = () => {
  return (
    <div className="selectedBill">
      <div className="info">
        <h2 className="">Split With</h2>
        <div className="">
          {initialFriends.map((friend) => (
            <img
              key={friend.id}
              src={friend.image}
              alt={friend.name}
              className=""
            />
          ))}
        </div>
        <button className=" ">Split Now</button>
      </div>
      <div className="balance">
        <h4 className="">Total Bill</h4>
        <p className="total">$600.00</p>

        <span className=" ">
          <GiCommercialAirplane className="" />
        </span>
        <p className="">Design Tour</p>
      </div>
    </div>
  );
};

export default SelectedBill;
