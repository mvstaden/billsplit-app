import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="">
      <h1 className="text-3xl text-center">Splitty</h1>
      <div className="flex flex-col bg-green-100 h-full justify-between items-center">
        <h1 className="text-6xl text-center">Great way to split your bill</h1>
        <img src="https" alt="" />
        <Link
          to="/home"
          className="bg-slate-400 w-full text-center py-4 px-4 rounded-full">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
