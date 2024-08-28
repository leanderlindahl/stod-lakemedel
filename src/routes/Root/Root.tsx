import { Outlet } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const Root: React.FC = () => {
  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
};
export default Root;
