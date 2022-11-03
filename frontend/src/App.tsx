import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getProducts } from './api/products';
import './App.css';
import { CartItem } from './Components/CartItem';
import { Cart } from './Components/Cart';
import { Catalog } from './Components/Catalog';
import { Footer } from './Components/HomePage/Footer';
import { Header } from './Components/HomePage/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { Product } from './types/Product';


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

  return (
    <>
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
              cartState={cartState}
              setCartState={setCartState}
              isLoading={isLoading}
            />}
        />
        <Route 
          path="/tablets" 
          element={
          <>
            <Header />
            <h1>Tablets page</h1>
            <Footer />
          </>
        }
        />
        <Route 
          path="/accessories" 
          element={
          <>
            <Header />
            <h1>Accessories page</h1>
            <Footer />
          </>}
        />

        <Route
          path='/test'
          element={<CartItem />} 
        />
        <Route 
          path='/cart'
          element={<Cart />}
        />
        <Route 
          path="*" 
          element={
          <>
            <Header />
            <p>Page not found</p>
            <Footer />
          </>}
        />
      </Routes>
    </>
  );
}