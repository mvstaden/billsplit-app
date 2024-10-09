const Friend = ({ friend }) => {
  return (
    <div className="flex justify-around">
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      <p>{friend.balance}</p>
    </div>
  );
};
export default Friend;
