import React from 'react'
import StickyNavbar from './Navbar'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const Thankyou = () => {
  return (
    <div><StickyNavbar/>
    <div className="w-full max-w-6xl mx-auto">
    <div className="mx-auto flex justify-center text-2xl font-poppins mt-12">
            Order Success!
        </div>
        <div className="mx-auto flex justify-center text-2xl font-poppins mt-12">
            Thank you for Shopping
        </div>
        <div className="mx-auto flex justify-center text-2xl font-poppins mt-12 border-2 w-96">
            <Link to="/" className='w-full'>
            <Button fullWidth className='py-4'>
                Back to Home
            </Button>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Thankyou