const FormSplitBill = () => {
  const bill = 200;
  return (
    <form>
      <h2>SPlit Bill</h2>
      <label>Bill Amount</label>
      <input type="text" placeholder="Enter Bill amount" />
      <label>Your expenses</label>
      <input type="text" placeholder="Your expenses" />
      <label>Friends Expenses</label>
      <input type="text" placeholder="Friends Expenses" disabled value={bill} />
      <select>
        <option value="MyExpenses">Me</option>
        <option value="FriendsExpenses">Friend</option>
      </select>
      <button>Split Bill</button>
    </form>
  );
};
export default FormSplitBill;
