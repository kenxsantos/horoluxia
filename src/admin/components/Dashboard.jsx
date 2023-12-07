import Sidebar from "./Sidebar";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Dashboard() {
  const navigate = useNavigate();
  const { user, getUser,setUser, userToken } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      await getUser(setUser);
    };

    if (user?.email === "admin@admin.com" && !userToken) {
      navigate('/login');
    } else {
      navigate('/admin/dashboard');
    }

    fetchData();
  }, [setUser, user?.email,userToken, navigate]);

  return (
    <div className="flex md:flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="w-full max-w-6xl mx-auto mb-12 border-2">
        <div className="flex text-center items-center justify-center">
          <h1 className="text-4xl my-12 mb-8 font-extrabold font-horoluxia uppercase">
            Dashboard 
            <br />
            <br />
            {user?.email}
          </h1>
        </div>
      </div>
    </div>
  );
  }

export default Dashboard;
