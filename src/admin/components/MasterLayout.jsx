import React from "react";
import Sidebar from "./Sidebar";
import { Link, Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";
import { Navigate } from "react-router-dom";
import RenderRoutes from "../../routes/RenderRoutes";
import Dashboard from "./Dashboard";
import AddCategory from "../category/AddCategory";
const MasterLayout = () => {
 

  return (
    <div>
      <div className="flex md:flex-row w-screen">
        <div>
          <Sidebar />
        </div>
        </div>
        
        <div>
        <Routes>
      {routes.map((route, index) => {
        return (
          route.component && (
            <Route
          key={index}
          path={route.path}
          element={route.element}
          exact={route.exact}
          name={route.name}
            render={(props) => (
              <route.component {...props}/>
            )}
        />
          )
        )
      })}
      <Navigate from="admin" to="/admin/dashboard"/>
    </Routes>
        </div>
      
    </div>
  );
};

export default MasterLayout;
