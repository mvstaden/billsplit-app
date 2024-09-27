import { useState } from "react";
import initialFriends from "./data";
import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";

function App() {
  const [toggleAddFriend, setToggleAddFriend] = useState(true);
  const [friends, setFriends] = useState(initialFriends);

  const showAddFriend = () => {
    setToggleAddFriend((currentValue) => !currentValue);
  };

  const handleAddFriend = (friend) => {
    setFriends((currentFriends) => [...currentFriends, friend]);
  };

  return (
    <div className="app">
      <div className="friendsbar">
        <div className="friendsList">
          <FriendsList friends={friends} />
        </div>
        <button onClick={showAddFriend}>Add new Friend</button>
        {toggleAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
      </div>
      <div className="splitbillbar">
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
