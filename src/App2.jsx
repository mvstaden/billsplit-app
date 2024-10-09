// import { useState } from "react";
import "./App2.css";
import Balance from "./components2/Balance";
import Header from "./components2/Header";
// import initialFriends from "./data";

const App2 = () => {
  // const [friends, setFriends] = useState(initialFriends);

  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="min-w-96 h-[650px] rounded-3xl bg-green-200 p-6">
        <Header />
        <div className="flex items-center h-28 mt-5 justify-center gap-3">
          <Balance />
          <Balance />
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="">Pending Bills</h3>
          <p>View All</p>
          <div>Friends</div>
          {/* <FriendsLIst /> */}
        </div>
      </div>
    </div>
  );
};

export default App2;
