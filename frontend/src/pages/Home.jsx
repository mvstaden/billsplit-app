import Header from "../components/Header";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import initialFriends from "../data";
import { Link } from "react-router-dom";
import { useState } from "react";
import UserIcon from "../components/UserIcon";
const Home = () => {
  const [friends, setFriends] = useState(initialFriends);
  return (
    <div className="flex flex-col gap-5">
      <Header />

      {/* Split Bill Section */}
      <section className="flex justify-between items-center bg-[#563f4f5f] border-2 border-[#563F4F] rounded-3xl p-4 min-h-36">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl">Split bill with</h2>
          <div className="flex ml-2">
            {friends.slice(0, 4).map((friend) => (
              <img
                key={friend.id}
                src={friend.image}
                alt=""
                className="h-10 rounded-full w-10 -ml-2"
              />
            ))}
          </div>
      
          <Link className="bg-[#FFDD62] text-black py-2 rounded-full text-center">
            Split Now
          </Link>
        </div>

        <div className=" p-2 flex flex-col justify-center items-center gap-1 w-24 rounded-2xl border-2 border-dashed border-[#563F4F]">
          <h3 className="text-sm">Total Bill</h3>
          <p className="text-xl">$696.00</p>
          <GiCommercialAirplane className="h-12 bg-[#ffdd625e] shadow-[-1px_1px_30px_6px_#ffdd625e] text-[#FFDD62] w-12 rounded-full p-2" />
          <p className="text-sm">Design Tour</p>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl">Add Friends</h2>

          <Link to="/add-friend" className=" flex items-center justify-center">
            <FaPlus className="w-8 h-8  p-1 hover:text-[#ffdd62a2] " />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
          {friends.map((friend) => (
            <div key={friend.id}>
              <img
                src={friend.image}
                alt={friend.name}
                className="rounded-full"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;
