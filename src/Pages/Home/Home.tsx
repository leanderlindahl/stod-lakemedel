import { Button } from 'flowbite-react';
import { HiChevronRight } from 'react-icons/hi';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await fetch('/api/menu', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setMenuItems(data?.menuItems);
    };
    fetchMenuItems();
  }, []);

  const buttonClickHandler = (link: string) => {
    console.log('Button clicked', link);
    navigate(link);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold pb-6 text-center">Stöd vid hantering av läkemedel</h1>
      {menuItems
        ? menuItems.map((item: { label: string; link: string }, index: number) => (
            <Button
              outline
              color="light"
              size="lg"
              className="w-full mb-2"
              onClick={() => buttonClickHandler(item.link)}
              // onClick={() => setOpenModal(true)}
              key={index}
            >
              <div className="place-self-start">{item.label}</div>
              <HiChevronRight className="ml-2 h-6 w-50 place-self-end" />
            </Button>
          ))
        : null}
    </div>
  );
};

export default Home;
