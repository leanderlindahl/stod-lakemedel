import { Banner } from 'flowbite-react';
import { HiX } from 'react-icons/hi';
import { MdAnnouncement } from 'react-icons/md';
import Nav from '../../components/Nav';

const PageLayout: React.FC = ({ children }) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col h-screen w-screen">
      <header className="p-[1rem] md:p-[2rem] bg-primary">
        <Nav />
      </header>
      <main className="grid grid-span-12 flex-grow p-[1rem] md:p-[2rem] bg-secondary">
        <Banner className="hidden sm:inline-block text-center pb-0 mb-0">
          <div className="flex w-full justify-between border-b border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
            <div className="mx-auto flex items-center">
              <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                <MdAnnouncement className="mr-4 h-4 w-4" />
                <span className="[&_p]:inline">
                  This project is meant to be viewed in a mobile view port. Switch to mobile using the dev tools. (But
                  you can of course still use it in larger screen sizes if you wish).
                </span>
              </p>
            </div>
            <Banner.CollapseButton color="gray" className="border-0 bg-transparent text-gray-500 dark:text-gray-400">
              <HiX className="h-4 w-4" />
            </Banner.CollapseButton>
          </div>
        </Banner>
        {children}
      </main>
      <footer className="p-[1rem] md:p-[2rem] bg-primary text-center text-white text-sm">
        ©{currentYear} Region Skåne - Alla rättigheter förbehållna
      </footer>
    </div>
  );
};

export default PageLayout;
