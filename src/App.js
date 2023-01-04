import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  ScrollRestoration,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FooterBanner from "./components/Footer/FooterBanner";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/CartPage/Cart";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <FooterBanner />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
