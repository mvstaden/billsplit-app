import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import RecentFriends from "../components/RecentFriends/RecentFriends";
import RecentSplits from "../components/RecentSplits/RecentSplits";

import SelectedBill from "../components/SelectedBill/SelectedBill";

const Home = () => {
  return (
    <>
      <Header />
      <SelectedBill />
      <RecentFriends />
   
      <RecentSplits />
      <Navbar />
    </>
  );
};
export default Home;
