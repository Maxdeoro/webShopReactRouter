import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([{path: '/', element: <Layout />, children: [
  {index: true, element: <Home />},
  {path: 'about', element: <About />},
  {path: 'cart', element: <Cart />},
  {path: 'category/:categoryId', element: <Category />},
  {path: '*', element: <NotFound />},
  {path: 'product/:productId', element: <ProductDetails />},
]}]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
