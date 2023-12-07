import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Profile from "../components/Profile";
import AddCategory from "../category/AddCategory";
import ViewCategory from "../category/ViewCategory";
import EditCategory from "../category/EditCategory";
import AddProduct from "../products/AddProduct";
import ViewProduct from "../products/ViewProduct";
import EditProduct from "../products/EditProduct";
import ViewOrder from "../order/ViewOrder";
// import { useNavigate } from 'react-router-dom';
// import { useStateContext } from '../../context/ContextProvider';
const AdminHome = () => {
  // const navigate = useNavigate();
  // const { userToken } = useStateContext();
  // useEffect(() => {
  //   if (userToken) {
  //     navigate('/admin/*');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [userToken, navigate]);

  return (
    <div>
      <div>
        <main>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="view-category" element={<ViewCategory />} />
            <Route path="view-category/edit-category/:id" element={<EditCategory />} />
            <Route path="add-product" element={<AddProduct/>} />
            <Route path="view-product" element={<ViewProduct />} />
            <Route path="view-order" element={<ViewOrder />} />
            <Route path="view-product/edit-product/:id" element={<EditProduct />} />
            <Route path="/*" element={<Navigate to="dashboard" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminHome;
