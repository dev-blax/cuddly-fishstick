import React, {useState} from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,

} from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

function NavlistMenuComponent({ menuItems, label }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderItems = menuItems.map(({ icon: Icon, title, description, href }, key) => (
    <Link to={href} key={key} >
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          {Icon && (
            <Icon strokeWidth={1} className="h-6 text-dtbi-orange w-6" />
          )}
        </div>
        <div>
          <Typography
            variant="h6"
            className="flex items-center text-sm font-semibold text-white md:text-gray-700  "
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs font-light text-gray-200 md:text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium  ">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {label}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

NavlistMenuComponent.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  label: PropTypes.string.isRequired
};

export default NavlistMenuComponent;
