import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../Css/Style.css";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Add1 from "../assets/Pictures/Add1.jpg";
import Add2 from "../assets/Pictures/Add2.jpg";
import Add3 from "../assets/Pictures/Add3.jpg";
import Add4 from "../assets/Pictures/Add4.jpg";
import Add5 from "../assets/Pictures/Add5.jpg";
import Add6 from "../assets/Pictures/Add6.jpg";
import Add7 from "../assets/Pictures/Add7.jpg";
import Add8 from "../assets/Pictures/Add8.jpg";
import Add9 from "../assets/Pictures/Add9.jpg";
import Add10 from "../assets/Pictures/Add10.jpg";
import Add11 from "../assets/Pictures/Add11.jpg";
import Add12 from "../assets/Pictures/Add12.jpeg";
import Add13 from "../assets/Pictures/Add13.jpg";
import Add14 from "../assets/Pictures/Add14.jpg";
import Add15 from "../assets/Pictures/Add15.jpg";
import Add16 from "../assets/Pictures/Add16.jpg";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();
  const handleClick =  () => {
    navigate("/limited-edition")
  }
  return (
    <section className="w-full grid p-8 grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mb-12 bg-[#FBF0E4]">
      <div>
        <h3 className="text-2xl md:text-6xl" id="HeroTitle">
          Grab Up To 50% Off On Selected Watch
          
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6 font-poppins">
          Here at Horoluxia we have a wide range of watches for you to choose
          from.
          <br />
        </p>
          <Button className="rounded-full px-10  font-poppinsf" onClick={handleClick}>Buy Now</Button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: Add1,
  },
  {
    id: 2,
    src: Add2,
  },
  {
    id: 3,
    src: Add3,
  },
  {
    id: 4,
    src: Add4,
  },
  {
    id: 5,
    src: Add5,
  },
  {
    id: 6,
    src: Add6,
  },
  {
    id: 7,
    src: Add7,
  },
  {
    id: 8,
    src: Add8,
  },
  {
    id: 9,
    src: Add9,
  },
  {
    id: 10,
    src: Add10,
  },
  {
    id: 11,
    src: Add11,
  },
  {
    id: 12,
    src: Add12,
  },
  {
    id: 13,
    src: Add13,
  },
  {
    id: 14,
    src: Add14,
  },
  {
    id: 15,
    src: Add15,
  },
  {
    id: 16,
    src: Add16,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HeroSection;
