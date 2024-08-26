import { useEffect } from 'react';

const ItemList: React.FC<{ type: string }> = ({ type }) => {
  useEffect(() => {
    console.log(type);
  }, [type]);

  return <div>Hej from ItemList of type: {type}</div>;
};

export default ItemList;
