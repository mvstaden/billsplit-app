import { Link, useNavigate } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";
import UserIcon from "./UserIcon";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const AddFriendForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const imageUrl = "https://i.pravatar.cc/48";
  const navigate = useNavigate();

  const { handleAddFriend } = useAppContext();

  const onAddFriendSubmit = (e) => {
    e.preventDefault();

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      firstName,
      lastName,
      email,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };
    handleAddFriend(newFriend);
    navigate("/home");
  };

  return (
    <>
      <div className="flex items-center justify-between relative">
        <Link to="/home">
          <FaArrowLeftLong className="w-5 h-5 ml-3" />
        </Link>
        <h2 className="text-2xl">Add Friend</h2>
        <UserIcon />
      </div>
      <form className="flex flex-col gap-3 p-2" onSubmit={onAddFriendSubmit}>
        <div>
          <label htmlFor="name" className="text-gray-600">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="p-2 w-full rounded-xl bg-transparent border-2 border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 py-3 rounded-full hover:bg-gray-400">
          Add Friend
        </button>
      </form>
    </>
  );
};
export default AddFriendForm;
