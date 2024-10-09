import "./App2.css";
import FriendsLIst from "./components2/FriendsLIst";
import { FaBell } from "react-icons/fa";
import avatar from "./assets/avatar.jpg";
const App2 = () => {
  return (
    <div className="min-h-screen bg-slate-500 flex items-center justify-center">
      <div className="min-w-96 h-[650px] rounded-xl bg-green-200 ">
        <nav className="flex justify-between items-center p-5">
          <h1 className="text-2xl text-center py-2"> Splitty</h1>
          <div className="flex items-center gap-2">
            <span className="bg-slate-300 p-4 rounded-full ">
              <FaBell className="text-1xl " />
            </span>
            <img src={avatar} alt="" width="50" className="rounded-full" />
          </div>
        </nav>

        {/* <FriendsLIst /> */}
      </div>
    </div>
  );
};

export default App2;
