import { useState } from "react";

const FormSplitBill = ({ onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [myExpenses, setMyExpenses] = useState("");
  const [whoPaysBill, setWhoPaysBill] = useState("me");

  const friendExpenses = myExpenses ? bill - myExpenses : bill;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !myExpenses) return;
    onSplitBill(whoPaysBill === "user" ? friendExpenses : -myExpenses);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPlit Bill</h2>
      <div>
        <label>Bill Amount</label>
        <input
          type="text"
          placeholder="Enter Bill amount"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Your expenses</label>
        <input
          type="text"
          placeholder="Your expenses"
          value={myExpenses}
          onChange={(e) =>
            setMyExpenses(
              Number(e.target.value) > bill
                ? myExpenses
                : Number(e.target.value)
            )
          }
        />
      </div>
      <div>
        <label>Friends Expenses</label>
        <input
          type="text"
          placeholder="Friends Expenses"
          disabled
          value={friendExpenses}
        />
      </div>
      <div>
        <label>Who is paying the bill</label>
        <select
          value={whoPaysBill}
          onChange={(e) => setWhoPaysBill(e.target.value)}>
          <option value="me">Me</option>
          <option value="friend">Friend</option>
        </select>
      </div>
      <button className="btn">Split Bill</button>
    </form>
  );
};
export default FormSplitBill;
