import React from 'react';
import { Avatar, Navbar, Dropdown, Flowbite, CustomFlowbiteTheme } from 'flowbite-react';

const Nav: React.FC = () => {
  const stodLakemedelTheme: CustomFlowbiteTheme = {
    root: {
      base: 'w-full bg-primary pl-0 pr-4 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
      rounded: {
        on: 'rounded',
        off: '',
      },
      bordered: {
        on: 'border',
        off: '',
      },
      inner: {
        base: 'mx-auto flex flex-wrap items-center justify-between',
        fluid: {
          on: '',
          off: 'container',
        },
      },
    },
  };

  return (
    <div id="nav" className="w-full col-span-12 h-[3.75rem] bg-primary px-0 sm:pr-3 sm:pl-0 flex items-center">
      <Navbar fluid rounded theme={stodLakemedelTheme}>
        <Navbar.Brand href="/" className="justify-self-start">
          <img
            src="./images/reg_skane_vit_logo.png"
            className="mr-3 max-h-[4.5rem] justify-self-start"
            alt="Region Skåne logotyp"
          />
        </Navbar.Brand>
        <div className="flex md:order-last">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>
              <a href="/settings">Settings</a>
            </Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
};

export default Nav;
