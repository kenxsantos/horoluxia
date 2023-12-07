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

import Graphic from '../assets/LimitedEditions/LimitedEdition_Graphic.png'
import Limited_1 from '../assets/LimitedEditions/Limited_Watches/Limited_1.jpg'
import Limited_2 from '../assets/LimitedEditions/Limited_Watches/Limited_2.jpg'
import Limited_3 from '../assets/LimitedEditions/Limited_Watches/Limited_3.jpg'
import Limited_4 from '../assets/LimitedEditions/Limited_Watches/Limited_4.jpg'
import Limited_5 from '../assets/LimitedEditions/Limited_Watches/Limited_5.jpg'
import Limited_6 from '../assets/LimitedEditions/Limited_Watches/Limited_6.jpg'
import Limited_7 from '../assets/LimitedEditions/Limited_Watches/Limited_7.jpg'
import Limited_8 from '../assets/LimitedEditions/Limited_Watches/Limited_8.jpg'
import Limited_9 from '../assets/LimitedEditions/Limited_Watches/Limited_9.jpg'
import Limited_10 from '../assets/LimitedEditions/Limited_Watches/Limited_10.jpg'
import Limited_11 from '../assets/LimitedEditions/Limited_Watches/Limited_11.jpg'
import Limited_12 from '../assets/LimitedEditions/Limited_Watches/Limited_12.jpg'
import Limited_13 from '../assets/LimitedEditions/Limited_Watches/Limited_13.jpg'
import Limited_14 from '../assets/LimitedEditions/Limited_Watches/Limited_14.jpg'
import Limited_15 from '../assets/LimitedEditions/Limited_Watches/Limited_15.jpg'

function LimitedEditionTab() {
    const BgColor = {
        backgroundColor : "#DDCECF"
    };
    const Sections = {
        marginLeft: '40px',
        paddingTop: '50px',
        paddingBottom: '50px',
    };
    const SeeMoreTitle = {
        color: '#3F3937',
        fontSize: '5rem',
        fontWeight: 'bold',
        marginLeft: '50px',
        marginTop: '50px',
        fontFamily: 'DM Serif Display, serif',
        textAlign: 'center',
      };
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
        <img src={Graphic} alt="Limited Edition Graphic" />
    </div>
    <section style={Sections}>
            <h1 style={SeeMoreTitle}>Limited Edition's</h1>
    </section>
<section style={Sections}>
    {/* first row */}
    <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Limited_1}
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
                                src={Limited_2}
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
                                src={Limited_3}
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
                                src={Limited_4}
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
    {/* end of the first row */}

    {/* second row */}
    <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Limited_5}
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
                                src={Limited_6}
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
                                src={Limited_7}
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
                                src={Limited_8}
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
    {/* end of the second row */}

    {/* third row */}
    <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Limited_9}
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
                                src={Limited_10}
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
                                src={Limited_11}
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
                                src={Limited_12}
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
    {/* end of the third row */}

    {/* fourth row */}
    <div style={limited}>
                    <div style={ImgStyle} id='Fonts' className='FirstSection'>
                        <Card style={ImgStyle} id='Fonts' className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                src={Limited_13}
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
                                src={Limited_14}
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
                                src={Limited_15}
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
            </div>
    {/* end of the fourth row */}
    </section>
</section>
    </>
  )
}

export default LimitedEditionTab