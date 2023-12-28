import DropdownComponent from "../../../Components/Dropdown/DropdownComponent";
import { Link } from "react-router-dom";
import React from "react";

import { Navbar, IconButton, Collapse } from "@material-tailwind/react";

const incubationItems = [
  { href: "/incubation/overview", label: "Incubation Overview" },
  { href: "/incubation/stages", label: "Incubation Stages" },
  { href: "/apply", label: "Apply for Incubation Program" },
  { label: "Current Startups", href: "/shared-space" },
  { label: "Graduated Startups", href: "/shared-space" },
  { label: "Apply Fursa Lab Program", href: "/shared-space" },
];

const servicesItems = [
  { label: "Shared Space", href: "/shared-space" },
  { label: "Coaching and Mentorship Programs", href: "/shared-space" },
  { href: "/mentorship", label: "Mentorship Programs" },
  { href: "/training", label: "Training Programs" },
];

const projectItems = [
  { label: "Ongoing Projects", href: "/ongoing-projects" },
  { label: "Completed Projects", href: "/completed-projects " },
];

const AboutUsItems = [
  { label: "About DTBI", href: "/about" },
  { label: "Founders Overview", href: "/founders" },
  { label: "DTBI Board", href: "/board" },
  { label: "DTBI Management", href: "/management" },
];

const eventItems = [
  { label: "Upcoming events", href: "/about" },
  { label: "Gallery", href: "/founders" },
  { label: "Youtube", href: "/board" },
];

export default function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-3">
      <Link className=" text-left px-4" to="/">
        Home
      </Link>
      <DropdownComponent label="Incubation" items={incubationItems} />
      <DropdownComponent label="Services" items={servicesItems} />

      <DropdownComponent label="About us" items={AboutUsItems} />
      <DropdownComponent label="Events & Gallery" items={eventItems} />
      <DropdownComponent label="Projects" items={projectItems} />
      <Link className=" text-left px-4">Contact</Link>
    </div>
  );

  return (
    <div className="p-3 bg-dtbi-orange text-white">
      <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4 bg-dtbi-orange shadow-none rounded-none border-none text-white ">
        <div className=" mx-auto flex items-center justify-between text-blue-gray-900 bg-transparent ">
          <img src="/logo/logo.png" className="h-10" alt="" />
          <div className="hidden lg:block text-white ">{navList}</div>
          <div className="flex items-center gap-x-1">
            <a href="" className="bg-red-800 btn text-white uppercase min-w-max ">
              Fursa Lab2
            </a>
          </div>
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
             
              <a href="" className="bg-red-800 btn text-white uppercase min-w-max ">
              Fursa Lab
            </a>
            </div>
          </div>
        </Collapse>
      </Navbar>
      {/* <nav className="lg:max-w-7xl lg:mx-auto flex justify-between items-center">
      <img src="/logo/logo.png" className="h-10" alt="" />


      <div
        className='flex items-center gap-3'
      >
        <Link to="/">Home</Link>
        <DropdownComponent label="Incubation" items={incubationItems} />
        <DropdownComponent label="Services" items={servicesItems} />
        <DropdownComponent label="Projects" items={projectItems} />
        <DropdownComponent label="About us" items={AboutUsItems} />
        <DropdownComponent label="Events & Gallery" items={eventItems} />
        <Link>Contact</Link>
      </div>

      <a href="" className="bg-red-800 btn text-white uppercase">
        Fursa Lab
      </a>
    </nav> */}
    </div>
  );
}
