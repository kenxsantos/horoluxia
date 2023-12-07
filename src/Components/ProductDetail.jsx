import StickyNavbar from "./Navbar";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import axios from "../api/axios";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  // const params = useParams();

  const { category_slug, product_slug } = useParams();
    const [quantity, setQuantity] = useState(1);
    const { userToken, user, getUser } = useStateContext();
    const handleIncrement = () => {
        if (quantity < 10) {
        setQuantity(quantity + 1);
        }
      };
      const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
      };
      useEffect(() => {
        if (!user) {
          getUser();
        }
        if (!userToken) {
          navigate("/login");
        } else {
          // navigate("/:slug");
        }
        
      }, []);
    const handleAddtoCart = (e) => {
        e.preventDefault();
        if (!userToken) {
            navigate("/login");
          } else {
            // navigate("/:slug");
          }
            const data ={
                user_id: user ? user.id : null,
                product_id: product.id,
                product_qty: quantity,
               
            }
            console.log(data);
            axios.post(`/api/add-to-cart`, data).then(res => {
                if (res.data.status === 200) {
                    new Swal({
                        title: "Success",
                        text: res.data.message,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                  } else if (res.data.status === 409) {
                    new Swal({
                      title: "Already added to Cart",
                      text: res.data.message,
                      icon: "info",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
            })

       
    }
    useEffect(() => {
        const maxRetries = 3;
        let retries = 0;
      
        const fetchData = () => {
          axios
            .get(`/api/product-details/${category_slug}/${product_slug}`)
            .then((res) => {
              if (res.data.status === 200) {
                setProduct(res.data.product);
                console.log(product);
              } else if (res.data.status === 404) {
                new Swal({
                  title: "Warning",
                  text: res.data.message,
                  icon: "Error",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
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
      }, [product_slug, category_slug, navigate]);
      
  return (
    <div>
      <StickyNavbar />
      <div className="w-full max-w-5xl mx-auto mb-12 bg-white rounded-xl shadow-md overflow-hidden border-2 mt-8">
          <div className="md:flex" >
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full "
                src={`http://localhost:8000/${product.image}`}
                alt="Modern building architecture"
                width="50px"
              />
            </div>
            <div className="p-8 w-full grid gap-4 h-full">
              <div className="flex justify-between items-center">
                <Typography color="black" className="font-cinzelDeco text-3xl">
                  {product.name}
                </Typography>
                <Typography
                  color="black"
                  className="font-cinzel text-md font-semibold"
                >
                  {product.brand}
                </Typography>
              </div>
              <div className="flex justify-between ">
                <Typography color="black" className="font-poppins text-sm">
                  {product.description}
                </Typography>
              </div>
              <div className="flex justify-between   items-center">
                <Typography
                  color="black"
                  className="font-poppins text-2xl font-semibold"
                >
                  {"₱ " + product.selling_price}
                </Typography>
                <Typography
                  color="black"
                  className="font-poppins text-xl text-red-700 line-through font-semibold"
                >
                   {"₱ " + product.original_price}
                </Typography>
              </div>
              <div className="flex justify-between">
                {product.quantity < 0 ? (
                  <Typography color="black" className="font-poppins text-md">
                    Out of Stock
                  </Typography>
                ) : (
                  <Typography color="black" className="font-poppins text-md">
                    {"Stocks: " + product.quantity}
                  </Typography>
                )}
              </div>
              {product.quantity < 0 ? (
                <div></div>
              ) : (
                <div className="flex justify-between">
                  <div className="relative mb-4 flex flex-wrap items-stretch">
                    <Button 
                    onClick={handleDecrement}
                    className="flex items-center text-md rounded-none">-</Button>
                    <input
                      type="text"
                      value={quantity}
                      className="relative m-0 block w-14 min-w-0 flex-auto text-center font-poppins font-semibold"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <Button
                    onClick={handleIncrement} 
                    className="flex items-center text-md rounded-none">+</Button>
                  </div>
                </div>
              )}
              <div className="flex justify-between">
                {product.quantity < 0 ? (
                  <div color="black" className="font-cinzelDeco text-md">
                                        <Button
                        type="submit"
                        className="py-4 flex items-center justify-center gap-4 text-sm text-left"
                      >
                        <CiHeart className="h-6 w-6 rounded-full text-center" />
                        Wishlist
                      </Button>
                  </div>
                ) : (
                  <div className="flex justify-between w-full">
                    <div color="black" className="font-cinzelDeco text-md">
                    <Button
                        type="submit"
                        className="py-4 flex items-center justify-center gap-4 text-sm text-left"
                      >
                        <CiHeart className="h-6 w-6 rounded-full text-center" />
                        Wishlist
                      </Button>
                    </div>
                    <div color="black" className="font-cinzelDeco text-md">
                    <Button
                        type="submit"
                        className="py-4 flex items-center justify-center gap-4 text-sm text-left"
                        onClick={handleAddtoCart}
                      >
                        <CiShoppingCart className="h-6 w-6 text-center" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductDetail;
