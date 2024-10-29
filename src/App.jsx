import Balance from "./components/Balance";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className=" bg-white rounded-2xl p-4 min-w-96">
        <Header />
        <div className="flex items-center justify-evenly gap-2">
          <Balance />
          <Balance />
        </div>
        <div className="mt-3">
          <h3 className="font-bold">Pending Bills</h3>
          
        </div>
      </div>
    </div>
  );
};

export default App;
