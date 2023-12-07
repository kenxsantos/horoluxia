import { useEffect, useRef, useState } from "react";
import "../Css/Style.css";
import StickyNavbar from "./Navbar";
import HeroSection from "./HeroSection";
import { useStateContext } from "../context/ContextProvider";
import LimitedEdition from "./LimitedEdition";
import Men from "./Men";
import Women from "./Women";
import Kids from "./Kids";
import Countdown from "./Countdown";
import SearchItem from "./SearchItem";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Add10 from "../assets/MensWatch/MensWatches1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Card, CardHeader, Button } from "@material-tailwind/react";

function Home() {
  const { user, getUser, userToken } = useStateContext();
  // useEffect(() => {
  //   if (!user) {
  //     getUser();
  //   if(userToken)
    
  //   }
  // }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(`/api/get-category`).then((res) => {
      if (res.data.status === 200) {
        setCategory(res.data.category);
      }
    });
  });

  return (
    <div>
      <header className="header">
        <Countdown />
      </header>
      <StickyNavbar />
      <section>
        <HeroSection />
        <SearchItem />
      </section>
      <div>
        {category.map((item, idx) => {
          return (
            <div className="w-full max-w-6xl mx-auto mb-12" key={idx}>
              <div className="flex justify-between items-center">
                <h1 className="text-4xl my-12 mb-8 font-extrabold font-horoluxia">
                  {item.name}
                </h1>
                <Link to={`/${item.slug}`}>
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
                <Card className="rounded-none p-2">
                  <CardHeader
                    shadow={false}
                    floated={false}
                    className="rounded-none m-0"
                  >
                    <img
                      src={`http://localhost:8000/${item.banner}`}
                      alt="card-image"
                      className="rounded-none"
                    />
                  </CardHeader>
                </Card>
              </div>
              <div class="flex-1 text-gray-700 text-center bg-gray-400"></div>
            </div>
          );
        })}
      </div>

      <section>
        <LimitedEdition />
      </section>

      <section>
        <Men />
      </section>

      <section>
        <Women />
      </section>

      <section>
        <Kids />
      </section>

      <section>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={Add10} />
            <div>
              <h1 className="text-5xl font-bold" id="HeroTitle">
                Get 5% Cash Back
              </h1>
              <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 font-poppins">
                Earn 5% cash back on everyday purchases <br /> a smart way to
                save and enjoy extra money in your pocket!
              </p>
              <Link path="/mens-watch">
                <Button className="rounded-full px-10  font-poppins">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
  