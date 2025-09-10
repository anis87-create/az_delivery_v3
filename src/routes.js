import { createBrowserRouter } from "react-router";
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
]);