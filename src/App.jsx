import { useState } from "react";
import initialFriends from "./data";

function App() {
  const [toggleAddFriend, setToggleAddFriend] = useState(false);

  const showAddFriend = () => {
    setToggleAddFriend((currentValue) => !currentValue);
  };

  const bill = 200;
  return (
    <div className="app">
      <div className="friendsbar">
        <div className="friendsList">
          <ul>
            {initialFriends.map((friend) => (
              <li key={friend.id}>
                <img src={friend.image} alt={friend.name} />
                <h3>{friend.name}</h3>
                <p>{friend.balance}</p>
                <button>Add</button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={showAddFriend}>Add new Friend</button>
        {toggleAddFriend && (
          <div className="form-add-friend">
            <form>
              <h2>Add Friend</h2>
              <label>Friend Name</label>
              <input type="text" placeholder="friendName" />
              <label>Friend Image</label>
              <input type="text" placeholder="Friend image" />
              <button>Add</button>
            </form>
          </div>
        )}
      </div>
      <div className="splitbillbar">
        <form>
          <h2>SPlit Bill</h2>
          <label>Bill Amount</label>
          <input type="text" placeholder="Enter Bill amount" />
          <label>Your expenses</label>
          <input type="text" placeholder="Your expenses" />
          <label>Friends Expenses</label>
          <input
            type="text"
            placeholder="Friends Expenses"
            disabled
            value={bill}
          />
          <select>
            <option value="MyExpenses">Me</option>
            <option value="FriendsExpenses">Friend</option>
          </select>
          <button>Split Bill</button>
        </form>
      </div>
    </div>
  );
}

export default App;
