import { useParams } from 'react-router-dom';

const ItemDetail: React.FC = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h1>ItemDetail {itemId}</h1>
    </div>
  );
};

export default ItemDetail;
