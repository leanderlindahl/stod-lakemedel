import { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import { HiChevronRight } from 'react-icons/hi';
import { useNavigate, useParams } from 'react-router-dom';
import NotFoundQuotes from './not-found-quotes.json';

const ItemList: React.FC = () => {
  const [items, setItems] = useState<{ id: string; label: string; link: string; description: string }[]>();
  const { type } = useParams();
  const navigate = useNavigate();
  const notFoundQuote = NotFoundQuotes[Math.floor(Math.random() * NotFoundQuotes.length)];
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
        {items ? (
          items.map((item) => (
            <li key={item?.id}>
              <Button
                outline
                color="light"
                size="lg"
                className="w-full mb-2"
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <div className="place-self-start">{item.label}</div>
                <HiChevronRight className="ml-2 h-6 w-50 place-self-end" />
              </Button>
            </li>
          ))
        ) : (
          <div>
            <p>Ajdå här fanns inget innehåll ännu. Men du behöver inte gå tomhänt. Här får du ett tänkvärt citat:</p>
            <p>
              <b>"{notFoundQuote?.quote}"</b>
            </p>
            <br />
            <i>{notFoundQuote?.author}</i>
          </div>
        )}
      </ul>
      <Button onClick={() => navigate(-1)} outline color="light" size="lg" className="w-full mb-2">
        Tillbaka
      </Button>
    </div>
  );
};

export default ItemList;
