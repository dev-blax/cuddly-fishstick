import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  SquaresPlusIcon,
  UserGroupIcon, CakeIcon
} from "@heroicons/react/24/solid";
import NavlistMenuComponent from "./NavlistMenuComponent";
import { Link } from "react-router-dom";

const incubationMenuItems = [
  {
    title: "Incubation Overview",
    description: "Incubation Stages",
    icon: SquaresPlusIcon,
    href: "/incubation/overview",
  },
  {
    title: "Incubation Stages",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
    href: "/incubation/stages",
  },
  {
    title: "Apply for Incubation",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    href: "/incubation/apply",
  },
  {
    title: "Current Startups",
    description: "Find the perfect solution for your needs.",
    icon: CakeIcon,
    href: "/incubation/startups/current",
  },
  {
    title: "Graduated Startups",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    href: "/incubation/startups/graduates",
  },
  {
    title: "Apply Fursa Lab Program",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    href: "/incubation/apply/fursalab",
  },
];

const servicesMenuItems = [
  {
    title: "Shared Space",
    description: "Incubation Stages",
    icon: SquaresPlusIcon,
    href: "/incubation/overview",
  },
  {
    title: "Coaching and Mentorship Programs",
    description: "Incubation Stages",
    icon: SquaresPlusIcon,
    href: "/incubation/overview",
  },
  {
    title: "Mentorship Programs",
    description: "Incubation Stages",
    icon: SquaresPlusIcon,
    href: "/incubation/overview",
  },
  {
    title: "Training Programs",
    description: "Incubation Stages",
    icon: SquaresPlusIcon,
    href: "/incubation/overview",
  },
];

const aboutMenuItems = [
    {
      title: "About DTBi",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
    {
      title: "Founders Overview",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/founders",
    },
    {
      title: "DTBI Board",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/board",
    },
    {
      title: "DTBi Management",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/management",
    },
  ];

const eventsMenuItems = [
    {
      title: "Upcoming events",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
    {
      title: "Gallery",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
    {
      title: "Youtube",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
    
  ];

  const ProjectsMenuItems = [
    {
      title: "Ongoing Projects",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
    {
      title: "Completed Projects",
      description: "Incubation Stages",
      icon: SquaresPlusIcon,
      href: "/incubation/overview",
    },
   
  ];



function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ">
      <NavlistMenuComponent
        label="Incubation"
        menuItems={incubationMenuItems}
      />
      <NavlistMenuComponent label="Services" menuItems={servicesMenuItems} />
      <NavlistMenuComponent label="About us" menuItems={aboutMenuItems} />
      <NavlistMenuComponent
        label="Events & Gallery"
        menuItems={eventsMenuItems}
      />
      <NavlistMenuComponent label="Projects" menuItems={ProjectsMenuItems} />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 text-white">
          <Link> Contact Us </Link>
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavigationMega() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className=" bg-dtbi-orange ">
      <Navbar className="mx-auto max-w-7xl px-4 py-2 shadow-none bg-dtbi-orange border-none ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img src="/logo/logo.png" className="h-6 md:h-8 " alt="" />

          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            {/* <Button variant="text" size="sm" color="blue-gray">
              Log In
            </Button> */}
            <Button variant="gradient" size="sm" color="red">
              Fursa Lab
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            {/* <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
              Log In
            </Button> */}
            <Button variant="gradient" size="sm" color="red">
              Fursa Lab
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
