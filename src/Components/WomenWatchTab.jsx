import React from 'react';
import Navbar from './Navbar';
import Countdown from './Countdown';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import '../Css/Style.css';
  

import Womens_1 from '../assets/WomensWatch/Womens_Watches/Womens_1.jpg';
import Womens_2 from '../assets/WomensWatch/Womens_Watches/Womens_2.jpg';
import Womens_3 from '../assets/WomensWatch/Womens_Watches/Womens_3.jpg';
import Womens_4 from '../assets/WomensWatch/Womens_Watches/Womens_4.jpg';
import Womens_5 from '../assets/WomensWatch/Womens_Watches/Womens_5.jpg';
import Womens_6 from '../assets/WomensWatch/Womens_Watches/Womens_6.jpg';
import Womens_7 from '../assets/WomensWatch/Womens_Watches/Womens_7.jpg';
import Womens_8 from '../assets/WomensWatch/Womens_Watches/Womens_8.jpg';
import Womens_9 from '../assets/WomensWatch/Womens_Watches/Womens_9.jpg';
import Womens_10 from '../assets/WomensWatch/Womens_Watches/Womens_10.jpg';
import Womens_11 from '../assets/WomensWatch/Womens_Watches/Womens_1.jpg';
import Womens_12 from '../assets/WomensWatch/Womens_Watches/Womens_2.jpg';
import Womens_13 from '../assets/WomensWatch/Womens_Watches/Womens_3.jpg';
import Womens_14 from '../assets/WomensWatch/Womens_Watches/Womens_4.jpg';
import Womens_15 from '../assets/WomensWatch/Womens_Watches/Womens_5.jpg';


import WomensGraphic_1 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_1.png';
import WomensGraphic_2 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_2.png';
import WomensGraphic_3 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_3.png';
import WomensGraphic_4 from '../assets/WomensWatch/GraphicDesign/WomensGraphic_4.png';

function WomenWatchTab() {
    const ImgSize = {
        height: '40rem',
    }
    const SeeMoreTitle = {
        color: 'black',
        fontSize: '5rem',
        fontWeight: 'bold',
        marginLeft: '50px',
        marginTop: '50px',
        fontFamily: 'DM Serif Display, serif',
        textAlign: 'center',
      };
      const Sections = {
        marginLeft: '40px',
        paddingTop: '50px',
        paddingBottom: '50px',
      }
        const ImgStyle = {
          height: '30rem',
          marginRight: '50px',
          width: '19rem',
      };

      const BgColor = {
        backgroundColor: '#FAF2E9',
      };

      const limited = {
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '20px',
      };


  return (
    <>
      <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
      </header>
      <Navbar />
<section style={BgColor}>
      <section>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize} src={WomensGraphic_1} alt="Slide 1" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_2} alt="Slide 2" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_3} alt="Slide 3" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
            <img style={ImgSize}  src={WomensGraphic_4} alt="Slide 4" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={Sections}> 
            <h1 style={SeeMoreTitle}>Women's Watches</h1>
         <div style={limited}>
            <div style={ImgStyle} id='Fonts' className='FirstSection'>
                <Card style={ImgStyle} id='Fonts' className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                        src={Womens_1}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                        Radiant Elegance
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $95.00
                        </Typography>
                        </div>
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Add to Cart
                        </Button>
                    </CardFooter>
                    </Card>
            </div>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_2}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Serenity Timepiece
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_3}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Aurora Blossom Watch
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_4}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Graceful Glamour
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
</div>




{/* second div */}
<div style={limited}>
            <div style={ImgStyle} id='Fonts' className='FirstSection'>
                <Card style={ImgStyle} id='Fonts' className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                        src={Womens_5}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                        Luna Sparkle Watch
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $95.00
                        </Typography>
                        </div>
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Add to Cart
                        </Button>
                    </CardFooter>
                    </Card>
            </div>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_6}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Enchanting Essence Timepiece
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_7}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Opulent Orchid Watch
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_8}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Empress Jewel Timepiece
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
</div>




{/* third div */}
<div style={limited}>
            <div style={ImgStyle} id='Fonts' className='FirstSection'>
                <Card style={ImgStyle} id='Fonts' className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                        src={Womens_9}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                        Celestial Charm Watch
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $95.00
                        </Typography>
                        </div>
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Add to Cart
                        </Button>
                    </CardFooter>
                    </Card>
            </div>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_10}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Twilight Grace Watch
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_11}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Azure Dreamtime
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_12}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Pearlized Precision Watch
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
</div>


{/* fourth div */}
<div style={limited}>
            <div style={ImgStyle} id='Fonts' className='FirstSection'>
                <Card style={ImgStyle} id='Fonts' className="w-96">
                    <CardHeader shadow={false} floated={false} className="h-96">
                        <img
                        src={Womens_13}
                        alt="card-image"
                        className="h-full w-full object-cover"
                        />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-2 flex items-center justify-between">
                        <Typography color="blue-gray" className="font-medium">
                        Mystique Mirage Timepiece
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $95.00
                        </Typography>
                        </div>
                        <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75"
                        >
                        With plenty of talk and listen time, voice-activated Siri access, and
                        an available wireless charging case.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                        Add to Cart
                        </Button>
                    </CardFooter>
                    </Card>
            </div>

<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_14}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Blossom Cascade Watch
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
<section style={ImgStyle} id='Fonts' className='FirstSection'>
<Card style={ImgStyle} id='Fonts' className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={Womens_15}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
          Oceanic Opal Timepiece
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
      <Button
          ripple={false}
          fullWidth={true}
          className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
</section>
</div>
</section>
</section>     

      
    </>
  );
}

export default WomenWatchTab;
