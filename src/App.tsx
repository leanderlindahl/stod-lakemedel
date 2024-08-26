import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Settings from './Pages/Settings';
import './App.scss';
import MainLayout from './components/MainLayout';
import ItemList from './components/ItemList';
import Custom404 from './Pages/Custom404';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="*" element={<Custom404 />} />
      <Route index element={<Home />} />
      <Route path="krossning" element={<ItemList type="krossning" />} />
      <Route path="about" element={<About />} />
      <Route path="settings" element={<Settings />} />
    </Route>,
  ),
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
