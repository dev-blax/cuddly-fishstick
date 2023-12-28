import PropTypes from 'prop-types';
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from 'react-router-dom';

const DropdownComponent = ({ label, items }) => {
  console.log('items ', items);
  return (
    <div className=" text-left md:text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            {label}
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="overflow-hidden absolute z-50 left-0 md:right-0 mt-2 w-56 min-w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {items.map((item) => (
              <Menu.Item key={item.href}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`${
                      active ? "bg-dtbi-orange text-white" : "text-gray-900"
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <CgEditBlackPoint
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <CgEditBlackPoint
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

DropdownComponent.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownComponent;
