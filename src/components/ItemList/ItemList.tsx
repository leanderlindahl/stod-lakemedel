import { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiChevronRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ItemList: React.FC<{ type: string }> = ({ type }) => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`/api/${type}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setItems(data?.items);
    };
    fetchItems();
  }, [type]);

  return (
    <div>
      <ul>
        {items
          ? items.map((item, index) => (
              <li key={index}>
                <Button outline color="light" size="lg" className="w-full mb-2" key={index}>
                  <div className="place-self-start">{item.label}</div>
                  <HiChevronRight className="ml-2 h-6 w-50 place-self-end" />
                </Button>
              </li>
            ))
          : null}
      </ul>
      <Button onClick={() => navigate(-1)} outline color="light" size="lg" className="w-full mb-2">
        Tillbaka
      </Button>
    </div>
  );
};

export default ItemList;
