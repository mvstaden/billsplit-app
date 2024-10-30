import Balance from "./components/Balance";
import Header from "./components/Header";
import PendingBills from "./components/PendingBills";
import initialFriends from "./data";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
        <div className="flex items-center justify-evenly gap-2">
      <div className="bg-white rounded-t-2xl">
        <div className="p-4 min-w-96">
          <Header />
          <div className="flex items-center justify-evenly gap-2">
            <Balance />
            <Balance />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold mt-2">Pending Bills</h3>
            <PendingBills />
            <PendingBills />
          </div>
        </div>
        <div className="w-full rounded-t-3xl bg-cyan-300 p-4">
          <h3>Friends</h3>
          <ul className="flex gap-2 flex-col ">
            {initialFriends.map((friend) => (
              <li
                key={friend.id}
                className="p-2 bg-green-200 rounded-3xl flex ">
                <img src={friend.image} alt="" className="rounded-full w-9" />
                <p className="inline-block">{friend.name}</p>
                <p className="inline-block">{friend.balance}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
