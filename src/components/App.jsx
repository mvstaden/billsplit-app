import { useState } from "react";
import initialFriends from "../data";
import FriendsList from "../components2/FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";

function App() {
  const [toggleAddFriend, setToggleAddFriend] = useState(true);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const showAddFriend = () => {
    setToggleAddFriend((currentValue) => !currentValue);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur.id === friend.id ? null : friend));
  };

  const handleAddFriend = (friend) => {
    setFriends((currentFriends) => [...currentFriends, friend]);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) => {
      friends.map((friend) => {
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      });
    });
  };

  return (
    <div className="app">
      <div className="friendsbar">
        <div className="friendsList">
          <FriendsList friends={friends} onSelection={handleSelection} />
        </div>
        <button onClick={showAddFriend}>Add new Friend</button>
        {toggleAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      </div>
      <div className="splitbillbar">
        <FormSplitBill onSplitBill={handleSplitBill} />
      </div>
    </div>
  );
}

export default App;
