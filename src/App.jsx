import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore/lite";
import {
  categoryCollection,
  onAuthChange,
  ordersCollection,
  productsCollection,
} from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],

  // контекст для корзины
  cart: {}, // содержимое корзинки
  setCart: () => {}, // изменить содержимое корзики

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setCategories(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(productsCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setProducts(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    getDocs(ordersCollection) // получить категории
      .then(({ docs }) => {
        // когда категории загрузились
        setOrders(
          // обновить состояние
          docs.map((doc) => ({
            // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id, // и свойства id
          }))
        );
      });

    onAuthChange((user) => {
      setUser(user);
    });
  }, []);
  
  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}
export default App;
