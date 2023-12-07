import { Card, Typography, Button } from "@material-tailwind/react";
import StickyNavbar from "./Navbar";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "../api/axios";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate, Link } from "react-router-dom";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IconButton } from "@material-tailwind/react";
const Cart = () => {
  var totalCartPrice = 0;
  const { userToken } = useStateContext();
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
  const TABLE_HEAD = [
    "Image",
    "Product",
    "Price",
    "Quantity",
    "Total Price",
    "Remove",
  ];
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const maxRetries = 3;
    let retries = 0;

    const fetchData = () => {
      axios
        .get(`/api/cart`)
        .then((res) => {
          if (res.data.status === 200) {
            setCart(res.data.cart);
            console.log(cart);
          } else if (res.data.status === 401) {
            new Swal({
              title: "Please Log in first",
              text: res.data.message,
              icon: "error",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/login");
          }
        })
        .catch((error) => {
          if (
            error.response &&
            error.response.status === 429 &&
            retries < maxRetries
          ) {
            // Retry after a delay using exponential backoff
            const delay = 2 ** retries * 1000;
            retries++;
            console.log(`Retrying after ${delay} milliseconds`);
            setTimeout(fetchData, delay);
          } else {
            // Handle other errors
            console.error("Error fetching data:", error);
          }
        });
    };
    fetchData();
  }, [navigate]);

  const handleIncrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              product_qty: item.product_qty + (item.product_qty < 10 ? 1 : 0),
            }
          : item
      )
    );
    updateQuantity(cart_id, "inc");
  };
  const handleDecrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              product_qty: item.product_qty - (item.product_qty > 1 ? 1 : 0),
            }
          : item
      )
    );
    updateQuantity(cart_id, "dec");
  };

  function updateQuantity(cart_id, scope) {
    axios.put(`api/cart-update-quantity/${cart_id}/${scope}`).then((res) => {
      if (res.data.status === 200) {
      } else if (res.data.status === 401) {
        navigate("/login");
      }
    });
  }

  const removeItem = (e, cart_id) => {
    e.preventDefault();

    axios.delete(`/api/delete-cartitem/${cart_id}`).then((res) => {
      if (res.data.status === 200) {
        new Swal({
          title: "Success",
          text: res.data.message,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else if (res.data.status === 404) {
        new Swal({
          title: "Error",
          text: res.data.message,
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <StickyNavbar />
      <div className="w-full max-w-6xl mx-auto">
        {cart.length > 0 ? (
          <div className="">
            <Card className="md:96">
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
                    totalCartPrice += item.product.selling_price * item.product_qty;
                    const isLast = index === cart.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50 ";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <img
                            variant="small"
                            color="blue-gray"
                            className="font-normal flex justify-center mx-auto "
                            src={`http://localhost:8000/${item.product.image}`}
                            alt={item.product.name}
                            width="60px"
                          />
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-poppins text-center font-semibold"
                          >
                            {item.product.name}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-poppins font-semibold text-center"
                          >
                            {item.product.selling_price}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="font-normal flex justify-center mx-auto  relative flex flex-wrap w-2/3 border-2  items-center">
                            <Button
                              onClick={() => handleDecrement(item.id)}
                              className="flex items-center rounded-none border-none font-semibold text-xl py-2 px-4"
                              variant="outlined"
                            >
                              -
                            </Button>
                            <input
                              type="text"
                              value={item.product_qty}
                              className="m-0 p-0 w-4 flex-auto text-center font-poppins font-semibold border-none border-gray-300"
                            />
                            <Button
                              onClick={() => handleIncrement(item.id)}
                              className="flex items-center rounded-none border-none font-semibold text-xl py-2 px-4"
                              variant="outlined"
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-poppins font-semibold text-center"
                          >
                            {item.product.selling_price * item.product_qty}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <IconButton className=" flex justify-center mx-auto items-center gap-4">
                            <MdDelete
                              className="w-4 h-4"
                              onClick={(e) => removeItem(e, item.id)}
                            />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Card>
            <Card className="w-96 mt-12 p-4">
              <div className="flex items-center justify-between mb-4">
                <Typography className="text-2xl font-poppins">
                  Sub Total:{" "}
                </Typography>
                <Typography className="text-3xl font-poppins">{totalCartPrice}</Typography>
              </div>
              <div className="flex items-center justify-between mb-4">
                <Typography className="text-2xl font-poppins">
                  Grand Total:{" "}
                </Typography>
                <Typography className="text-3xl font-poppins">{totalCartPrice}</Typography>
              </div>
              <div>
                <Link to='/checkout'>
                <Button fullWidth>Check Out</Button>
                </Link>
              </div>
            </Card>
          </div>
        ) : (
          <div className="mx-auto flex justify-center text-2xl font-poppins mt-12">
            Your Shopping Cart is Empty
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
