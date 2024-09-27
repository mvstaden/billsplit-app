import { useState } from "react";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !imageUrl) return;

    const newFriend = {
      id,
      name,
      image: `${imageUrl}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);
  };

  return (
    <div className="form-add-friend" onSubmit={handleSubmit}>
      <form>
        <h2>Add Friend</h2>
        <label>Friend Name</label>
        <input
          type="text"
          placeholder="friendName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Friend Image</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};
export default FormAddFriend;
