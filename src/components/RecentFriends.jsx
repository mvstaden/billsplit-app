import initialFriends from "../data";

const RecentFriends = () => {
  return (
    <div className="w-full p-3 rounded-2xl   border-2 border-red-800 border-dashed  justify-between h-36 mb-4">
      <div className="flex items-center justify-between">
        <h2>Recent Friends</h2>
        <p>See all</p>
      </div>
      <div className="flex items-center justify-between mt-4">
        {initialFriends.map(({ id, image, name }) => (
          <div key={id} className="flex flex-col items-center gap-2">
            <img src={image} alt={name} className="rounded-full h-10 w-10" />
            <p className="text-sm text-center">{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFriends;
