import Sidebar from "./Sidebar";
function Dashboard() {
  return (
    <div className="flex md:flex-row">
      <div>
        <Sidebar />
      </div>
            <div className="w-full max-w-6xl mx-auto mb-12 border-2"   >
              <div className="flex text-center items-center justify-center">
                <h1 className="text-4xl my-12 mb-8 font-extrabold font-horoluxia uppercase">
                  Dashboard
                </h1>
                </div>
                </div>
        </div>
  );
}

export default Dashboard;
  