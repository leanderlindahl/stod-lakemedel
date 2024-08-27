import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import Custom404 from './components/Custom404';
import Home from './components/Home';
import ItemList from './components/ItemList';
import About from './components/About';
import Settings from './components/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root className="flex w-full h-full" />,
    errorElement: <Custom404 />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'krossning',
        element: <ItemList type={'krossning'} />,
      },
      {
        path: 'about',
        element: <About />,
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
