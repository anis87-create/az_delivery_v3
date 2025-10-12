import { createBrowserRouter } from "react-router";
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import RestaurantDetail from './pages/RestaurantDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Favorites from "./pages/Favorites";

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
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'restaurant/:id',
        element: <RestaurantDetail />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
      {
        path:'checkout',
        element: <Checkout />
      },
      {
        path: 'orders',
        element: <Orders />
      },
      {
        path:'favorites',
        element: <Favorites />
      }
    ],
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'register',
    element: <Register />
  },
]);