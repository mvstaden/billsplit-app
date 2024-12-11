import Header from "../components/Header";
import { GiAirplaneDeparture } from "react-icons/gi";

import { Link } from "react-router-dom";

import { useAppContext } from "../context/AppContext";

const Home = () => {
  const { friends } = useAppContext();
  return (
    <div className="flex flex-col gap-5 relative">
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
                className="h-10 object-cover object-top rounded-full w-10 -ml-2"
              />
            ))}
          </div>

          <Link
            className="bg-[#FFDD62] text-black py-2 rounded-full text-center"
            to="/home/bill-split">
            Split Now
          </Link>
        </div>

        <div className=" p-2 flex flex-col justify-center items-center gap-1 w-24 rounded-2xl border-2 border-dashed border-[#563F4F]">
          <h3 className="text-sm">Total Bill</h3>
          <p className="text-xl">$696.00</p>
          <GiAirplaneDeparture className="h-12 w-12  bg-[#ffdd625e] shadow-[-1px_1px_30px_6px_#ffdd625e] text-[#FFDD62] rounded-full p-2" />
          <p className="text-sm">Design Tour</p>
        </div>
      </section>
    </div>
  );
};
export default Home;
