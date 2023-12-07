import { BsCart2 } from "react-icons/bs";
import Horo from "../assets/Logo/horoluxia.png";
import { Link } from "react-router-dom";
import "../Css/Style.css";
import { useStateContext } from "../context/ContextProvider";
import { useEffect } from "react";
import React from "react";
import {
  Typography,
  Button,
} from "@material-tailwind/react";
function StickyNavbar() {
  const { user, logout, getUser } = useStateContext();
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
  return (
    // <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
    //   <div className="flex items-center justify-between text-blue-gray-900">
    //     <Typography
    //       as="a"
    //       href="#"
    //       className="mr-4 cursor-pointer py-1.5 font-medium"
    //     >
    //       Material Tailwind
    //     </Typography>
    //     <div className="flex items-center gap-4">
    //       <div className="mr-4 hidden lg:block">{navList}</div>
    //       <div className="flex items-center gap-x-1">
    //         <Button
    //           variant="text"
    //           size="sm"
    //           className="hidden lg:inline-block"
    //         >
    //           <span>Log In</span>
    //         </Button>
    //         <Button
    //           variant="gradient"
    //           size="sm"
    //           className="hidden lg:inline-block"
    //         >
    //           <span>Sign in</span>
    //         </Button>
    //       </div>
    //       <IconButton
    //         variant="text"
    //         className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //         ripple={false}
    //         onClick={() => setOpenNav(!openNav)}
    //       >
    //         {openNav ? (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             className="h-6 w-6"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           </svg>
    //         ) : (
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth={2}
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M4 6h16M4 12h16M4 18h16"
    //             />
    //           </svg>
    //         )}
    //       </IconButton>
    //     </div>
    //   </div>
    //   <MobileNav open={openNav}>
    //     {navList}
    //     <div className="flex items-center gap-x-1">
    //       <Button fullWidth variant="text" size="sm" className="">
    //         <span>Log In</span>
    //       </Button>
    //       <Button fullWidth variant="gradient" size="sm" className="">
    //         <span>Sign in</span>
    //       </Button>
    //     </div>
    //   </MobileNav>
    // </Navbar>
    <nav className="border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="font-cinzel text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/limited-edition"
                className="font-cinzel  text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              >
                Limited Edition
              </Link>
            </li>

            <Link
              to="/mens-watch"
              className="font-cinzel  text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
            >
              Men
            </Link>

            <li>
              <Link
                to="/womens-watch"
                className="font-cinzel text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              >
                Women
              </Link>
            </li>
            <li>
              <Link
                to="/kids-watch"
                className="font-cinzel  text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              >
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center" style={{ paddingRight: "5rem" }}>
          <Link to="/" className="flex items-center">
            <img src={Horo} className="logo" alt="Flowbite Logo" />
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover-bg-gray-100 focus-outline-none focus-ring-2 focus-ring-gray-200 dark-text-gray-400 dark-hover-bg-gray-700 dark-focus-ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {user ? (
          <>
            <Link to="/cart">
            <Button     
              type="submit"
              className="flex items-center justify-center gap-4 text-sm  border-none font-cinzel" 
              variant="outlined" 
            >
              <BsCart2 className="w-6 h-6"/>
              Cart
            </Button>
            </Link>
            <Button
              onClick={logout}
              type="submit"
              className="rounded flex items-center justify-center gap-4 text-sm text-left bg-none border-none font-cinzel"
              variant="outlined" 
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link
              to="/SignUp"
              className="text-gray-900 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-700 dark:hover-text-white"
              id="Fonts"
            >
              <Button
                type="submit"
                className="rounded flex items-center justify-center gap-4 text-sm text-left bg-none border-none font-cinzel"
                variant="outlined">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default StickyNavbar;
