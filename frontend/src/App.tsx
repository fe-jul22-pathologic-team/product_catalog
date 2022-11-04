import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getProducts } from './api/products';

import './App.scss';
import { Cart } from './Pages/Cart';
import { Catalog } from './Pages/Catalog';

import { Header } from './Components/Header';
import { HomePage } from './Pages/HomePage/HomePage';
import { Product } from './types/Product';
import { Footer } from './Components/Footer';
import Tablets from './Components/Tablets/Tablets';
import Accessories from './Components/Accessories/Accessories';
import Favorites from './Components/Favorites/Favorites';

export function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartState, setCartState] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const loadData = async () => {
    const data = await getProducts();

    setProducts(data);
  };

  useEffect(() => {
    loadData().then(() => setIsLoading(true));

  }, []);

  const handleAdd = useCallback((phone: Product) => {
    if (!cartState.includes(phone)) {
      cartState.push(phone);

      setCartState(cartState);
    };
  }, [cartState]);

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/phones"
          element={<Catalog
            phoneProducts={products}
            isLoading={isLoading}
            handleAdd={handleAdd}
          />}
        />
        <Route
          path="/tablets"
          element={
              <Tablets />
          }
        />
        <Route
          path="/accessories"
          element={
              <Accessories />
            }
        />

        <Route
          path='/test'
          element={<h1>Test</h1>}
        />
        <Route
          path='/cart'
          element={<Cart cartProducts={cartState} setCartProducts={setCartState} />}
        />
        <Route
          path='/favorites'
          element={
              <Favorites />
          }
        />

        <Route
          path="*"
          element={
              <p>Page not found</p>}
        />
      </Routes>

      <Footer />
    </>
  );
}
