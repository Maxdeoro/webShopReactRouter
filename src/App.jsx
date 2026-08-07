import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([{path: '/', element: <Layout />, children: [
  {path: '', element: <Home />},
  {path: 'about', element: <About />},
  {path: 'cart', element: <Cart />},
  {path: 'categories', element: <Categories />},
  {path: '*', element: <NotFound />},
  {path: 'product', element: <ProductDetails />},
]}]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
