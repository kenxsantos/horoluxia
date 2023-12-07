import React from 'react'
import Navbar from './Navbar'
import Countdown from './Countdown'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import Kids_Model_1 from '../assets/KidsWatch/Kids_Model_1.jpg'
import Kids_Model_2 from '../assets/KidsWatch/Kids_Model_2.jpg'
import Kids_Model_3 from '../assets/KidsWatch/Kids_Model_3.jpg'


import Kids_1 from '../assets/KidsWatch/Kids_Watches/Kids_1.jpg'
import Kids_2 from '../assets/KidsWatch/Kids_Watches/Kids_2.jpg'
import Kids_3 from '../assets/KidsWatch/Kids_Watches/Kids_3.jpg'
import Kids_4 from '../assets/KidsWatch/Kids_Watches/Kids_4.jpg'
import Kids_5 from '../assets/KidsWatch/Kids_Watches/Kids_5.jpg'
import Kids_6 from '../assets/KidsWatch/Kids_Watches/Kids_6.jpg'
import Kids_7 from '../assets/KidsWatch/Kids_Watches/Kids_7.jpg'
import Kids_8 from '../assets/KidsWatch/Kids_Watches/Kids_8.jpg'
import Kids_9 from '../assets/KidsWatch/Kids_Watches/Kids_9.jpg'
import Kids_10 from '../assets/KidsWatch/Kids_Watches/Kids_10.jpg'
import Kids_11 from '../assets/KidsWatch/Kids_Watches/Kids_11.jpg'
import Kids_12 from '../assets/KidsWatch/Kids_Watches/Kids_12.jpg'
import Kids_13 from '../assets/KidsWatch/Kids_Watches/Kids_13.jpg'
import Kids_14 from '../assets/KidsWatch/Kids_Watches/Kids_14.jpg'
import Kids_15 from '../assets/KidsWatch/Kids_Watches/Kids_15.jpg'


function KidsWatchTab() {

  const BgColor = {
    backgroundColor: '#FEFEDF',
  };
  const SeeMoreTitle = {
    color: 'black',
    fontSize: '5rem',
    fontWeight: 'bold',
    marginLeft: '50px',
    marginTop: '50px',
    fontFamily: 'DM Serif Display, serif',
    textAlign: 'center',
  };

  const Container = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px', // Adjust the space between images here
    justifyContent: 'center', // Center horizontally
  };
  
  const Kids = {
    height: '40rem',
    // Add other styles if needed
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

const Sections = {
  marginLeft: '40px',
  paddingTop: '50px',
  paddingBottom: '50px',
}

  return (
    <>
        <header className="header">
            <p>Free shipping until 2025</p>
        <Countdown />
        </header>
        <Navbar />

<section style={BgColor}>
        <section >
          <div style={Container}>
              <img src={Kids_Model_1} alt="Kids_Model_1"  style={Kids}/>
              <img src={Kids_Model_2} alt="Kids_Model_2" style={Kids}/>
              <img src={Kids_Model_3} alt="Kids_Model_3" style={Kids}/>
          </div>
        </section>
    <h1 style={SeeMoreTitle}>Kid's Watches</h1>

<section style={Sections}>
    <div style={limited}>
        {/* First row */}
          <div style={ImgStyle} id='Fonts' className='FirstSection'>
                      <Card style={ImgStyle} id='Fonts' className="w-96">
                          <CardHeader shadow={false} floated={false} className="h-96">
                              <img
                              src={Kids_1}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Time Trekker
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
                              src={Kids_2}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Adventure Tracker
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
                              src={Kids_3}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Starlight Chrono
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
                              src={Kids_4}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Wonder Watch
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
        {/* First row */}
          <div style={ImgStyle} id='Fonts' className='FirstSection'>
                      <Card style={ImgStyle} id='Fonts' className="w-96">
                          <CardHeader shadow={false} floated={false} className="h-96">
                              <img
                              src={Kids_5}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Pixie Timepiece
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
                              src={Kids_6}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Junior Juggernaut
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
                              src={Kids_7}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Galaxy Guardian
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
                              src={Kids_8}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Rainbow Racer
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
        {/* First row */}
          <div style={ImgStyle} id='Fonts' className='FirstSection'>
                      <Card style={ImgStyle} id='Fonts' className="w-96">
                          <CardHeader shadow={false} floated={false} className="h-96">
                              <img
                              src={Kids_9}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Explorer's Epoch
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
                              src={Kids_10}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Magic Minute
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
                              src={Kids_11}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Dino Dial
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
                              src={Kids_12}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Pirate's Paragon
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
        {/* First row */}
          <div style={ImgStyle} id='Fonts' className='FirstSection'>
                      <Card style={ImgStyle} id='Fonts' className="w-96">
                          <CardHeader shadow={false} floated={false} className="h-96">
                              <img
                              src={Kids_13}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Unicorn O'Clock
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
                              src={Kids_14}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Superhero Stopwatch
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
                              src={Kids_15}
                              alt="card-image"
                              className="h-full w-full object-cover"
                              />
                          </CardHeader>
                          <CardBody>
                              <div className="mb-2 flex items-center justify-between">
                              <Typography color="blue-gray" className="font-medium">
                              Mermaid Minutes
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
      {/* End of fourth row */}
    </section>
</section>
    </>
  )
}

export default KidsWatchTab;