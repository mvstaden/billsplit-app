import Header from "../components/Header/Header";
import Navbar from "../components/Navbar";
import RecentFriends from "../components/RecentFriends";
import RecentsSplits from "../components/RecentsSplits";
import SelectedBill from "../components/SelectedBill/SelectedBill";

const Home = () => {
  return (
    <>
      <Header />
      <SelectedBill />
      {/* <RecentFriends />
      <h1 className="text-xl mb-4">Recent Splits</h1>
      <RecentsSplits /> */}
      <Navbar />
    </>
  );
};
export default Home;
