import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import Footer from "./Components/Footer";
import NewsLetter from "./Components/NewsLetter";
import ForgotPassword from "./Components/ForgotPassword";
import { ContextProvider } from "./context/ContextProvider";
import Women from "./Components/Women";
import ResetPassword from "./Components/ResetPassword";
import AdminHome from "./admin/pages/AdminHome";
import ViewProduct from "./Components/ViewProduct";
import ProductDetail from "./Components/ProductDetail";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Thankyou from "./Components/Thankyou";
import MasterLayout from "./admin/components/MasterLayout";
import Dashboard from "./admin/components/Dashboard";
import routes from "./routes/routes";
function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/women" element={<Women />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/:slug" element={<ViewProduct />} />
        <Route
          path="/:category_slug/:product_slug"
          element={<ProductDetail />}
        />
        <Route path="/admin/*" element={<AdminHome />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </ContextProvider>
  );
}

export default App;
