import React, { useState, useEffect } from "react";
import StickyNavbar from "./Navbar";
import { useStateContext } from "../context/ContextProvider";
import axios from "../api/axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Textarea,
  Checkbox,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { LuAsterisk } from "react-icons/lu";
import { Card, Typography } from "@material-tailwind/react";
const Checkout = () => {
  const TABLE_HEAD = ["Product", "Price", "Qty", "Total"];

  var totalCartPrice = 0;
  const [cart, setCart] = useState([]);
  const [error_list, setError] = useState([]);
  const { userToken, user } = useStateContext();
  const navigate = useNavigate();
  if (!userToken) {
    new Swal({
      title: "Please Log in first",
      text: res.data.message,
      icon: "error",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/login");
  }

  useEffect(() => {
    axios.get(`/api/cart`).then((res) => {
      if (res.data.status === 200) {
        setCart(res.data.cart);
      }
    });
  }, []);

  const [checkoutInput, setcheckoutInput] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setcheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
  };
  const handleSubmitOrder = (e, payment_mode) => {
    e.preventDefault();

    const data = {
      firstname: checkoutInput.firstname,
      lastname: checkoutInput.lastname,
      contact: checkoutInput.contact,
      zip: checkoutInput.zip,
      email: checkoutInput.email,
      address: checkoutInput.address,
      city: checkoutInput.city,
      state: checkoutInput.state,
      zip: checkoutInput.zip,
      payment_mode: payment_mode,
      total_amount: totalCartPrice,
    };

    axios.post(`/api/place-order`, data).then((res) => {
      if (res.data.status === 200) {
        new Swal({
          title: "Order Success",
          text: res.data.message,
          icon: "Success",
          showConfirmButton: false,
          timer: 1500,
        });
        setError([]);
        navigate("/thankyou");
      } else if (res.data.status === 422) {
        new Swal({
          title: "Please fill all required fields",
          text: "",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
        setError(res.data.errors);
      }
    });
  };
  return (
    <div>
      <StickyNavbar /> 
        {cart.length > 0 ? (
          <div className="w-full max-w-6xl mx-auto flex justify-center gap-2">
            <div className="w-3/5 shadow-md flex justify-center py-4">
              <form className="w-full max-w-lg">
                <div className="text-center text-xl font-poppins font-semibold mb-8">
                  Basic Information
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 font-poppins">
                    <Input
                      size="lg"
                      label="First Name"
                      name="firstname"
                      id="firstname"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.firstname}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.firstname}
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 px-3 font-poppins">
                    <Input
                      size="lg"
                      label="Last Name"
                      name="lastname"
                      id="lastname"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.lastname}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.lastname}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 font-poppins">
                  <div className="w-full md:w-1/2 px-3">
                    <Input
                      size="lg"
                      label="Contact No."
                      name="contact"
                      id="contact"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.contact}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.contact}
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 px-3 font-poppins">
                    <Input
                      size="lg"
                      label="Zip Code"
                      name="zip"
                      id="email"
                      className="font-poppins"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.zip}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.zip}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 font-poppins">
                  <div className="w-full px-3">
                    <Input
                      size="lg"
                      label="Email"
                      name="email"
                      id="email"
                      className="font-poppins"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.email}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.email}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 font-poppins">
                  <div className="w-full px-3">
                    <Input
                      size="lg"
                      label="Shipping Address"
                      name="address"
                      id="address"
                      autoFocus
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.address}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.address}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3">
                    <Input
                      label="City"
                      size="lg"
                      id="city"
                      name="city"
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.city}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.city}
                    </span>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <Input
                      label="State"
                      size="lg"
                      id="state"
                      name="state"
                      icon={<LuAsterisk className="text-red-500" />}
                      onChange={handleInput}
                      value={checkoutInput.state}
                    />
                    <span className="text-red-500 text-sm font-poppins">
                      {error_list.state}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button fullWidth onClick={(e) => handleSubmitOrder(e, 'COD')}>Place Order</Button>
                </div>
              </form>
            </div>
            <div className="w-2/5">
              <Card className="md:96 py-4">
                <div className="text-center text-xl font-poppins font-semibold mb-8">
                  Order Information
                </div>
                <table className="min-w-max table-auto text-center">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b bg-matte border-blue-gray-100 text-white p-4 text-center"
                        >
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal leading-none"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => {
                      totalCartPrice +=
                        item.product.selling_price * item.product_qty;
                      const isLast = index === cart.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-poppins text-left"
                            >
                              {item.product.name}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-poppins"
                            >
                              {item.product.selling_price}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-poppins"
                            >
                              {item.product_qty}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-poppins"
                            >
                              {item.product.selling_price * item.product_qty}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td
                        colSpan={2}
                        className="text-left p-4 border-t border-blue-gray-50 font-poppins"
                      >
                        Grand Total
                      </td>
                      <td
                        colSpan={2}
                        className="p-4 border-t border-blue-gray-50 text-end font-poppins font-semibold text-2xl"
                      >
                        {totalCartPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </div>
        ) : (
          <div className="mx-auto flex justify-center text-2xl font-poppins mt-12">
            Your Shopping Cart is Empty
          </div>
        )}
    </div>
  );
};

export default Checkout;
