import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RecentFriends from "./components/RecentFriends";
import RecentsSplits from "./components/RecentsSplits";
import SelectedBill from "./components/SelectedBill";

const App = () => {
  return (
    <div className="bg-black w-96 mx-auto text-white p-5 rounded-2xl relative">
      <Header />
      <SelectedBill />
      <RecentFriends />
      <h1 className="text-xl mb-4">Recent Splits</h1>
      <RecentsSplits />
      <Navbar />
    </div>
  );
};

export default App;
