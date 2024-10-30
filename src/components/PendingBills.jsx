import img from "../assets/avatar.jpg";

const PendingBills = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short", // abbreviated month (e.g., Oct)
    day: "numeric", // numeric day (e.g., 20)
    year: "numeric", // numeric year (e.g., 2024)
  });
  return (
    <>
      
      <div className=" bg-slate-500 p-3 flex flex-col gap-2 rounded-2xl">
        <div className=" w-full flex justify-between items-center gap-2 rounded-xl ">
          <img src={img} alt="" className="w-9 rounded-full" />
          <div className="flex-1">
            <h3>Birthday Cake</h3>
            <p>{formattedDate}</p>
          </div>
          <span className="justify-end">$2020</span>
        </div>
        <div className="border-t-2 border-t-gray-300"></div>
        <div className="flex justify-between items-center">
          <img src={img} alt="" className="w-9 rounded-full" />
          <img src={img} alt="" className="w-9 rounded-full -ml-3" />
          <div className="bg-green-300 rounded-full p-1 flex justify-evenly flex-1 ml-7">
            <p> You are owed</p>
            <p>$2005.54</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingBills;
