import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import StickyNavbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
const ViewProduct = () => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    const maxRetries = 3;
    let retries = 0;

    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/fetch-products/${slug}`);
        if (res.data.status === 200) {
          setProduct(res.data.product_data.product);
          setCategory(res.data.product_data.category);
          console.log();
        } else if (res.data.status === 400) {
          new Swal({
            title: "Warning",
            text: res.data.message,
            icon: "",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
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
      }
    };

    fetchData();
  }, [slug, navigate]);
  return (
    <div>
      <StickyNavbar /> 
        <img
          src={`http://localhost:8000/${category.banner}`}
          alt="card-image"
          className="rounded-none"
        />
        <div className=" w-full max-w-6xl mx-auto w-full text-center text-bold text-4xl font-cinzelDeco mt-12">   
        {category.name}
      </div>
      <div>
        {product.length === 0 ? (
          <div className="mx-auto flex justify-center text-2xl font-poppins mt-12">
            No product available
          </div>
        ) : (
          <div className="w-full max-w-6xl mx-auto mb-12 ">
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.map((item, idx) => (
                <Card
                  key={idx}
                  className="rounded-none p-2 bg-[#FBF0E4] shadow-xl"
                >
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="rounded-none m-0"
                  >
                    <img
                      src={`http://localhost:8000/${item.image}`}
                      alt="card-image"
                      className="rounded-none"
                    />
                  </CardHeader>
                  <CardBody className="p-2">
                    <div className="flex flex-col items-start">
                      <Typography color="black" className="font-poppins">
                        {item.name}
                      </Typography>
                      <Typography color="black" className="font-poppins">
                        {item.brand}
                      </Typography>
                      <Typography
                        color="black"
                        className="font-poppins text-xl font-semibold"
                      >
                        {"₱ " + item.selling_price}
                      </Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="w-full  p-0 flex justify-between">
                    <Link to={`/${item.category.slug}/${item.slug}`}>
                      <IconButton variant="outlined" className="border-none">
                        <CiHeart className="h-8 w-8" />
                      </IconButton>
                    </Link>
                    <Link to={`/${item.category.slug}/${item.slug}`}>
                      <IconButton variant="outlined" className="border-none">
                        <CiShoppingCart className="h-8 w-8" />
                      </IconButton>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProduct;
