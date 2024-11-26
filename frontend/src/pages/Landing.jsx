import { Link } from "react-router-dom";
import landingImage from "../assets/SplitImage.png";
const Landing = () => {
  return (
    <div className="h-full flex flex-col gap-4 items-center md:flex-row p-4">
      <h1 className="text-6xl text-center pb-4">Splitty</h1>
      <img src={landingImage} className="h-56 w-56" alt="" />
      <div className=" flex-1 px-8 text-center">
        <h1 className="text-4xl text-center mb-3">
          Great way to split your bill
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          nisi.
        </p>
      </div>
      <Link
        to="/home"
        className="bg-slate-400 w-full text-center py-4 px-4 rounded-full ">
        Get started
      </Link>
    </div>
  );
};
export default Landing;
