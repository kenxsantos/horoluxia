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

import GraphicDesign_Men from '../assets/MensWatch/GraphicDesign_Men.png'
import Mens_1 from '../assets/MensWatch/Mens_Watches/Mens_1.jpg'
import Mens_2 from '../assets/MensWatch/Mens_Watches/Mens_2.jpg'
import Mens_3 from '../assets/MensWatch/Mens_Watches/Mens_3.jpg'
import Mens_4 from '../assets/MensWatch/Mens_Watches/Mens_4.jpg'
import Mens_5 from '../assets/MensWatch/Mens_Watches/Mens_5.jpg'
import Mens_6 from '../assets/MensWatch/Mens_Watches/Mens_6.jpg'
import Mens_7 from '../assets/MensWatch/Mens_Watches/Mens_7.jpg'
import Mens_8 from '../assets/MensWatch/Mens_Watches/Mens_8.jpg'
import Mens_9 from '../assets/MensWatch/Mens_Watches/Mens_9.jpg'
import Mens_10 from '../assets/MensWatch/Mens_Watches/Mens_10.jpg'
import Mens_11 from '../assets/MensWatch/Mens_Watches/Mens_11.jpg'
import Mens_12 from '../assets/MensWatch/Mens_Watches/Mens_12.jpg'
import Mens_13 from '../assets/MensWatch/Mens_Watches/Mens_13.jpg'
import Mens_14 from '../assets/MensWatch/Mens_Watches/Mens_14.jpg'
import Mens_15 from '../assets/MensWatch/Mens_Watches/Mens_15.jpg'

function MenWatchTab() {
    const BgColor = {
        backgroundColor: '#000000',
      };
      const SeeMoreTitle = {
        color: 'White',
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
      const limited = {
        padding: '0 50px',
        display: 'flex',
        flexDirection: 'row',
        paddingTop: '20px',
      };
      const ImgStyle = {
        height: '30rem',
        marginRight: '50px',
        width: '19rem',
    };
  return (
    <>
    <header className="header">
        <p>Free shipping until 2025</p>
        <Countdown />
    </header>
      <Navbar />

<section style={BgColor}>
        <div>
            <img src={GraphicDesign_Men} />
        </div>
<section style={Sections}> 
            <h1 style={SeeMoreTitle}>Mens's Watches</h1>
            <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_1}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                ShadowSprint Chrono
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_2}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Aurora Vanguard
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_3}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Nebula Navigator
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_4}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Tempest Thrive Timepiece
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
            </div>

            {/* Second row */}
            <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_5}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Stealth Horizon Watch
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_6}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Eclipse Quest Chronograph
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_7}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Phoenix Precision
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_8}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Midas Enigma Watch
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
            </div>
            {/* End of second row */}

            {/* Third row */}
            <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_9}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Vortex Vertex Timekeeper
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_10}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Zenith Zephyr Chrono
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_11}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Galactic Sentinel
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_12}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Titanium Tempest Watch
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
            </div>
            {/* End of third row */}

            {/* Fourth row */}
            <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_13}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Nova Horizon Chronograph
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_14}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Apex Ascendant Timepiece
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
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Mens_15}
                                alt="card-image"
                                className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="mb-2 flex items-center justify-between">
                                <Typography color="blue-gray" className="font-medium">
                                Lunar Luminance Watch
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

            </div>
            {/* end of fourth row */}
</section>
</section>
    </>
  )
}

export default MenWatchTab