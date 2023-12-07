import React from "react";
// Women Watch
import WomensWatch1 from "../assets/WomensWatch/WomensWatch1.jpg";
import WomensWatch2 from "../assets/WomensWatch/WomensWatch2.jpg";
import WomensWatch3 from "../assets/WomensWatch/WomensWatch3.jpg";
import WomensWatch4 from "../assets/WomensWatch/WomensWatch4.jpg";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Women() {
  const ImgStyle = {
    height: "30rem",
    marginRight: "50px",
    width: "19rem",
  };
  const Width = {
    width: "100%",
  };
  return (
    <div className="w-full max-w-6xl mx-auto mb-12 ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl my-12 mb-8 font-extrabold titleHead">Women</h1>
        <Link to="/womens-watch">
          <Button
            variant="outlined"
            type="submit"
            className="rounded flex items-center justify-center gap-4 text-sm text-left bg-none border-none"
          >
            View More
            <FaArrowRight className="h-4 w-4 text-center" />
          </Button>
        </Link>
      </div>
      <div className="bg-[#FBF0E4]">
        <div class="flex gap-4 bg-[#FBF0E4] p-6">
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img
                  src={WomensWatch1}
                  alt="card-image"
                  className="rounded-none"
                />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="black" className="font-poppins">
                    Women's Grace Watch
                  </Typography>
                  <Typography color="black" className="font-poppins">
                    Horoluxia
                  </Typography>
                  <Typography
                    color="black"
                    className="font-poppins text-xl font-semibold"
                  >
                    {"₱ " + 4000}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="w-full  p-0 flex justify-between">
                <IconButton variant="outlined" className="border-none">
                  <CiHeart className="h-8 w-8" />
                </IconButton>
                <Link to={`/womens-watch`}>
                  <IconButton variant="outlined" className="border-none">
                    <CiShoppingCart className="h-8 w-8" />
                  </IconButton>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img
                  src={WomensWatch2}
                  alt="card-image"
                  className="rounded-none"
                />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="black" className="font-poppins">
                    Women's Youthful Watch
                  </Typography>
                  <Typography color="black" className="font-poppins">
                    Horoluxia
                  </Typography>
                  <Typography
                    color="black"
                    className="font-poppins text-xl font-semibold"
                  >
                    {"₱ " + 6000}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="w-full  p-0 flex justify-between">
                <IconButton variant="outlined" className="border-none">
                  <CiHeart className="h-8 w-8" />
                </IconButton>
                <Link to={`/womens-watch`}>
                  <IconButton variant="outlined" className="border-none">
                    <CiShoppingCart className="h-8 w-8" />
                  </IconButton>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img
                  src={WomensWatch3}
                  alt="card-image"
                  className="rounded-none"
                />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="black" className="font-poppins">
                    Women's Blossom Watch
                  </Typography>
                  <Typography color="black" className="font-poppins">
                    Horoluxia
                  </Typography>
                  <Typography
                    color="black"
                    className="font-poppins text-xl font-semibold"
                  >
                    {"₱ " + 8000}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="w-full  p-0 flex justify-between">
                <IconButton variant="outlined" className="border-none">
                  <CiHeart className="h-8 w-8" />
                </IconButton>
                <Link to={`/womens-watch`}>
                  <IconButton variant="outlined" className="border-none">
                    <CiShoppingCart className="h-8 w-8" />
                  </IconButton>
                </Link>
              </CardFooter>
            </Card>
          </div>
          <div class="flex-1 text-gray-700 text-center bg-gray-400">
            <Card className="rounded-none p-2 bg-[#FBF0E4] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <CardHeader
                shadow={false}
                floated={false}
                className="rounded-none m-0"
              >
                <img
                  src={WomensWatch4}
                  alt="card-image"
                  className="rounded-none"
                />
              </CardHeader>
              <CardBody className="p-2">
                <div className="flex flex-col items-start">
                  <Typography color="black" className="font-poppins">
                    Women's Harmony Watch
                  </Typography>
                  <Typography color="black" className="font-poppins">
                    Horoluxia
                  </Typography>
                  <Typography
                    color="black"
                    className="font-poppins text-xl font-semibold"
                  >
                    {"₱ " + 6500}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="w-full  p-0 flex justify-between">
                <IconButton variant="outlined" className="border-none">
                  <CiHeart className="h-8 w-8" />
                </IconButton>
                <Link to={`/womens-watch`}>
                  <IconButton variant="outlined" className="border-none">
                    <CiShoppingCart className="h-8 w-8" />
                  </IconButton>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Women;
