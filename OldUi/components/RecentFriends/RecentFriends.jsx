import initialFriends from "../../data";
import "./RecentFriends.css";
const RecentFriends = () => {
  return (
    <div className="rf">
      <div className="rf-title">
        <h3>Recent Friends</h3>
        <p>See all</p>
      </div>
      <div className="rf-info">
        {initialFriends.map(({ id, image, name }) => (
          <div key={id}>
            <img src={image} alt={name} />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFriends;
