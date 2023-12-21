import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { BiSolidHome } from "react-icons/bi";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiMiniPresentationChartLine } from "react-icons/hi2";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { MdMotionPhotosOn } from "react-icons/md";
import "../../assets/css/home.css";

export function NavbarComponent() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
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
        className="flex items-center gap-x-2 p-1 font-medium hover:bg-gray-300 rounded-md "
      >
        <BiSolidHome className=" h-4 w-4 text-dtbi-orange " />

        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium orange-hover"
      >
        <MdOutlineKeyboardCommandKey className=" h-4 w-4 text-dtbi-orange " />

        <a href="#" className="flex items-center">
          Incubation
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium orange-hover"
      >
        <HiSquares2X2 className=" h-4 w-4 text-dtbi-orange " />
        <a href="#" className="flex items-center">
          Services
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium orange-hover"
      >
        <HiMiniPresentationChartLine className=" h-4 w-4 text-dtbi-orange" />
        <a href="#" className="flex items-center">
          Project
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium orange-hover"
      >
        <MdMotionPhotosOn className="h-4 w-4 text-dtbi-orange" />
        <a href="#" className="flex items-center">
          Events & Gallery
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto lg:max-w-screen-xl md:w-full px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img className=" h-7 " src="public/logo/logo.png" />
        <div className="hidden lg:block">{navList}</div>
        {/* <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span> Contact </span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span> Login </span>
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
