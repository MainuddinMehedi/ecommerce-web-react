import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NotFoundPage from "./pages/not-found";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function CustomRoutes() {
  const routes = useRoutes([
    // { path: "/", element: <Layout /> },
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/productDetails/:id", element: <ProductDetails /> },
    { path: "/blog", element: <Blog /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/cart", element: <Cart /> },
    { path: "/details", element: <ProductDetails /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return routes;
}
function App() {
  return (
    <Layout>
      <CustomRoutes />
    </Layout>
  );
}

export default App;
