import { Link } from "react-router-dom";
import "./Landing.css";
import landingImage from "../../assets/SplitImage.png";
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-img">
        <img src={landingImage} alt="" />
      </div>
      <div className="landing-info">
        <h1>Splitty</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          veritatis sit autem neque natus et repudiandae, quasi consectetur
          veniam vero.
        </p>
        <Link to="/home" className="btn btn-started">
          Get started
        </Link>
      </div>
    </div>
  );
};
export default Landing;

{
  /* <div className="">
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
    </div> */
}
