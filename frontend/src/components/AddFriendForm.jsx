import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import UserIcon from "./UserIcon";

const AddFriendForm = () => {
  return (
    <div>
      <div className="flex items-center justify-between relative">
        <Link to="/home">
          <FaArrowLeftLong className="w-5 h-5 ml-3" />
        </Link>
        <h2 className="text-2xl">Add Friend</h2>
        <UserIcon />
      </div>
      <form className="flex flex-col gap-3 p-4">
        <div>
          <label htmlFor="name" className="text-gray-600">
            First Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="p-2 w-full rounded-xl bg-transparent border-2 border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-gray-600">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Last Name"
            className="p-2 w-full rounded-xl bg-transparent border-2 border-gray-400"
          />
        </div>
        <div>
          <label htmlFor="name" className="text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="name"
            placeholder="Enter Email"
            className="p-2 w-full rounded-xl bg-transparent border-2 border-gray-400"
          />
        </div>
      </form>
    </div>
  );
};
export default AddFriendForm;
