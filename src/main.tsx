import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import Custom404 from './components/Custom404';
import Home from './components/Home';
import ItemList from './components/ItemList';
import Settings from './components/Settings';
import ItemDetail from './components/ItemDetail/ItemDetail.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Custom404 />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'item-list/:type',
        element: <ItemList />,
      },
      {
        path: 'item/:itemId',
        element: <ItemDetail />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

async function deferRender() {
  const { worker } = await import('./mocks/browser.js');
  return worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
